import useArtisanContext from "../../hooks/useArtisanContext";

const About = () => {
  const { providerDetail } = useArtisanContext();

  const about = providerDetail?.artisan?.business_detail;

  return (
    <div className="space-y-3">
      <div className="p-5 bg-secondary/10 ">{about}</div>
    </div>
  );
};

export default About;
