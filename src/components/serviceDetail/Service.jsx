import useArtisanContext from "../../hooks/useArtisanContext";

const Service = () => {
  const { providerDetail } = useArtisanContext();

  const service = providerDetail?.service_category;

  return (
    <div className="space-y-3 mt-4 border border-secondary px-3 py-2 w-fit text-sm rounded-full">
      {service?.category}
    </div>
  );
};

export default Service;
