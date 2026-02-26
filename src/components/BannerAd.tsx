import bannerImage from "@/assets/ojaja-banner-ad.png";

const BannerAd = () => {
  return (
    <section className="w-full">
      <img
        src={bannerImage}
        alt="Ojaja Drinks - Let's Create Cool & Refreshing Memories - Refresh Your World"
        className="w-full h-auto object-cover"
      />
    </section>
  );
};

export default BannerAd;
