import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY');
    if (!RESEND_API_KEY) {
      throw new Error('RESEND_API_KEY is not configured');
    }

    const orderData = await req.json();

    const itemsHtml = (orderData.items || []).map((item: { product: string; packSize: string; quantity: number }) =>
      `<tr>
        <td style="padding:8px;border:1px solid #ddd">${item.product}</td>
        <td style="padding:8px;border:1px solid #ddd">${item.packSize}</td>
        <td style="padding:8px;border:1px solid #ddd">${item.quantity}</td>
      </tr>`
    ).join('');

    const htmlBody = `
      <h2>Ojaja Drinks Order Request</h2>
      
      <h3>Customer Details</h3>
      <table style="border-collapse:collapse;width:100%">
        <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Full Name</td><td style="padding:8px;border:1px solid #ddd">${orderData.fullName}</td></tr>
        <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Email</td><td style="padding:8px;border:1px solid #ddd">${orderData.email}</td></tr>
        <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Phone</td><td style="padding:8px;border:1px solid #ddd">${orderData.phone}</td></tr>
        <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Country</td><td style="padding:8px;border:1px solid #ddd">${orderData.country}</td></tr>
        <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">City</td><td style="padding:8px;border:1px solid #ddd">${orderData.city}</td></tr>
        <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Address</td><td style="padding:8px;border:1px solid #ddd">${orderData.address}</td></tr>
      </table>

      <h3>Order Items</h3>
      <table style="border-collapse:collapse;width:100%">
        <tr>
          <th style="padding:8px;border:1px solid #ddd;background:#f5f5f5">Product</th>
          <th style="padding:8px;border:1px solid #ddd;background:#f5f5f5">Pack Size</th>
          <th style="padding:8px;border:1px solid #ddd;background:#f5f5f5">Quantity</th>
        </tr>
        ${itemsHtml}
      </table>
    `;

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: 'Ojaja Drinks <onboarding@resend.dev>',
        to: ['ojajadrinks@gmail.com'],
        subject: 'Order Request',
        html: htmlBody,
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      console.error('Resend API error:', data);
      throw new Error(`Resend API error: ${JSON.stringify(data)}`);
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    console.error('Error sending email:', error);
    return new Response(JSON.stringify({ success: false, error: message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
