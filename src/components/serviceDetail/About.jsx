import useArtisanContext from "../../hooks/useArtisanContext";

const About = () => {
  const { providerDetail } = useArtisanContext();

  const about = providerDetail?.artisan?.business_detail;

  return (
    <div className="space-y-3 mt-4">
      <h3 className="font-semibold text-sm">About Service</h3>
      <p className=" text-sm opacity-50 ">{about}</p>
    </div>
  );
};

export default About;
