import { useEffect, useState } from "react";
import axiosInstance from "../../api/axios";
import { ReviewSkeleton } from "../skeleton/ReviewSkeleton";
import useArtisanContext from "../../hooks/useArtisanContext";
import { RiStarFill, RiStarLine } from "react-icons/ri";
import { IoPerson } from "react-icons/io5";

const Review = () => {
  const { providerDetail } = useArtisanContext();

  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const rating = providerDetail?.overall_ratings || 0;
  const review = providerDetail?.total_reviews || 0;

  useEffect(() => {
    getReview();
  }, [providerDetail]);

  const getReview = async () => {
    setIsLoading(true);
    const url = `/service-user/api/v1/review-service-list/?serviceId=${providerDetail?.id}`;
    try {
      const response = await axiosInstance.get(url);
      if (response) {
        setReviews(response?.data?.data);
      }

      setIsLoading(false);
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };

  const renderStars = () => {
    const stars = [];
    const maxStars = 5;

    for (let i = 1; i <= maxStars; i++) {
      stars.push(
        i <= rating ? (
          <RiStarFill key={i} className="text-orange-400" />
        ) : (
          <RiStarLine key={i} className="text-orange-400" />
        )
      );
    }

    return stars;
  };

  return (
    <div className="space-y-5 ">
      {/* <section className="space-y-2 pt-5">
        <h4 className=" text-xs opacity-50 text-center">Overall rating</h4>
        <div className="flex flex-col  items-center border-b  space-y-1">
          <p className="flex gap-2">
            <span className="flex items-center  text-orange-400 text-sm gap-1 ">
              {renderStars()}
            </span>
            <span className="te font-medium">{rating} out of 5</span>
          </p>
          <p className=" text-xs opacity-50 pb-5">{`based on ${review} reviews`}</p>
        </div>
      </section> */}

      <section className="space-y-4 overflow-y-auto h-80   ">
        <ul>
          {isLoading && <ReviewSkeleton card={5} />}
          {reviews === 0 ? (
            <p className="flex items-center justify-center opacity-70 text-sm">
              No reviews for now
            </p>
          ) : (
            reviews.map((review) => {
              const firstName = review?.service_user?.first_name;
              const lastName = review?.service_user?.last_name;
              const rating = review?.ratings;
              const fullName = `${firstName} ${lastName}`;

              const renderStars = () => {
                const stars = [];
                const maxStars = 5;

                for (let i = 1; i <= maxStars; i++) {
                  stars.push(
                    i <= rating ? (
                      <RiStarFill key={i} className="text-orange-400" />
                    ) : (
                      <RiStarLine key={i} className="text-orange-400" />
                    )
                  );
                }

                return stars;
              };

              return (
                <li className="flex gap-5 py-3 ">
                  <div className="flex items-center justify-center w-8 h-8 bg-primary/5 text-xs rounded-full">
                    <IoPerson />
                  </div>

                  <div className="space-y-1">
                    <h4 className="  font-medium text-sm ">
                      {review?.service_user === null
                        ? "Service user"
                        : fullName}
                    </h4>
                    <p className="flex items-center text-xs  ">
                      {renderStars()}
                    </p>
                    <p className="text-xs opacity-70">{review?.comment}</p>
                    {/* <p className="text-xs opacity-50">
                    <span>London</span>/<span>1/2/23</span>
                  </p> */}
                  </div>
                </li>
              );
            })
          )}
        </ul>
      </section>
    </div>
  );
};

export default Review;
