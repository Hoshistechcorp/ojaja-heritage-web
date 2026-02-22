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

    const formData = await req.json();

    const htmlBody = `
      <h2>Ojaja Drinks Distributor Application</h2>
      
      <h3>Section 1: Personal / Company Details</h3>
      <table style="border-collapse:collapse;width:100%">
        <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Full Name</td><td style="padding:8px;border:1px solid #ddd">${formData.fullName}</td></tr>
        <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Company Name</td><td style="padding:8px;border:1px solid #ddd">${formData.companyName}</td></tr>
        <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Phone</td><td style="padding:8px;border:1px solid #ddd">${formData.phone}</td></tr>
        <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Email</td><td style="padding:8px;border:1px solid #ddd">${formData.email}</td></tr>
        <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Business Address</td><td style="padding:8px;border:1px solid #ddd">${formData.businessAddress}</td></tr>
        <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Country</td><td style="padding:8px;border:1px solid #ddd">${formData.country}</td></tr>
        <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">State</td><td style="padding:8px;border:1px solid #ddd">${formData.state || 'N/A'}</td></tr>
        <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">City</td><td style="padding:8px;border:1px solid #ddd">${formData.city}</td></tr>
      </table>

      <h3>Section 2: Business Capacity</h3>
      <table style="border-collapse:collapse;width:100%">
        <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Years in Distribution</td><td style="padding:8px;border:1px solid #ddd">${formData.yearsInDistribution}</td></tr>
        <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Currently Distributes Beverages</td><td style="padding:8px;border:1px solid #ddd">${formData.currentlyDistributesBeverages}</td></tr>
        <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Current Brands</td><td style="padding:8px;border:1px solid #ddd">${formData.currentBrands || 'N/A'}</td></tr>
        <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Monthly Sales Capacity</td><td style="padding:8px;border:1px solid #ddd">${formData.monthlySalesCapacity}</td></tr>
        <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Has Warehouse</td><td style="padding:8px;border:1px solid #ddd">${formData.hasWarehouse}</td></tr>
        <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Warehouse Size</td><td style="padding:8px;border:1px solid #ddd">${formData.warehouseSize || 'N/A'}</td></tr>
      </table>

      <h3>Section 3: Coverage & Logistics</h3>
      <table style="border-collapse:collapse;width:100%">
        <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Areas Covered</td><td style="padding:8px;border:1px solid #ddd">${formData.areasCovered}</td></tr>
        <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Delivery Vehicles</td><td style="padding:8px;border:1px solid #ddd">${formData.deliveryVehicles}</td></tr>
        <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Has Sales Reps</td><td style="padding:8px;border:1px solid #ddd">${formData.hasSalesReps}</td></tr>
        <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Sales Reps Count</td><td style="padding:8px;border:1px solid #ddd">${formData.salesRepsCount || 'N/A'}</td></tr>
      </table>

      <h3>Section 4: Financial Commitment</h3>
      <table style="border-collapse:collapse;width:100%">
        <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Can Meet Minimum Order</td><td style="padding:8px;border:1px solid #ddd">${formData.canMeetMinimumOrder}</td></tr>
        <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Distributor Category</td><td style="padding:8px;border:1px solid #ddd">${formData.distributorCategory}</td></tr>
      </table>

      <h3>Product Interest</h3>
      <p><strong>Products:</strong> ${(formData.products || []).join(', ')}</p>
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
        subject: 'Ojaja Drinks Distributor Application',
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
  } catch (error) {
    console.error('Error sending email:', error);
    const message = error instanceof Error ? error.message : 'Unknown error';
    return new Response(JSON.stringify({ success: false, error: message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
