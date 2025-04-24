
import { Star, StarHalf } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Sarah Johnson",
    rating: 4.5,
    comment: "Amazing food and atmosphere! The avocado toast is a must-try.",
    date: "March 2024"
  },
  {
    id: 2,
    name: "Michael Chen",
    rating: 5,
    comment: "Best French bakery in town. Their croissants are perfect!",
    date: "March 2024"
  },
  {
    id: 3,
    name: "Emma Davis",
    rating: 4,
    comment: "Great lunch menu, fresh ingredients and friendly staff.",
    date: "February 2024"
  }
];

const ReviewStars = ({ rating }: { rating: number }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  
  return (
    <div className="flex gap-1">
      {[...Array(fullStars)].map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
      ))}
      {hasHalfStar && <StarHalf className="w-4 h-4 fill-yellow-400 text-yellow-400" />}
    </div>
  );
};

const Reviews = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-2xl mx-auto px-4">
        <h2 className="text-2xl font-semibold mb-8 text-center">Customer Reviews</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-medium">{review.name}</h3>
                  <p className="text-sm text-gray-500">{review.date}</p>
                </div>
                <ReviewStars rating={review.rating} />
              </div>
              <p className="text-gray-600">{review.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
