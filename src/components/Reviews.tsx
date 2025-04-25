import { Star, StarHalf, ChevronLeft, Info } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { motion } from "framer-motion";

// Review card data type
interface ReviewCard {
  id: number;
  name: string;
  date: string;
  rating: number;
  comment: string;
  avatar?: string;
}

const reviewCards: ReviewCard[] = [
  {
    id: 1,
    name: "Mohammed",
    date: "March 2024",
    rating: 5,
    comment: "Absolutely loved it!",
    avatar: "/default-avatar.png"
  },
  {
    id: 2,
    name: "Sarah Johnson",
    date: "March 2024",
    rating: 4.5,
    comment: "Amazing food and atmosphere! The avocado toast is a must-try.",
    avatar: "/avatar-sarah.png"
  },
  {
    id: 3,
    name: "Michael Chen",
    date: "March 2024",
    rating: 5,
    comment: "Best French bakery in town. Their croissants are perfect!",
    avatar: "/avatar-michael.png"
  }
];

// Star rating component
const ReviewStars = ({ rating }: { rating: number }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  
  return (
    <div className="flex gap-1">
      {[...Array(fullStars)].map((_, i) => (
        <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
      ))}
      {hasHalfStar && <StarHalf className="w-6 h-6 fill-yellow-400 text-yellow-400" />}
    </div>
  );
};

// Review Card Component
const ReviewCard = ({ review }: { review: ReviewCard }) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm min-w-[380px] md:min-w-0 hover:shadow-md transition-shadow duration-300">
      {/* Back button and Title */}
      <div className="flex items-center gap-2 mb-6">
        <button className="p-1 md:hidden">
          <ChevronLeft className="w-5 h-5" />
        </button>
        <h2 className="text-lg font-medium">Paul Bakery & Restaurant</h2>
      </div>

      {/* User Info */}
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden">
          <img 
            src={review.avatar || "/default-avatar.png"} 
            alt="" 
            className="w-full h-full object-cover" 
          />
        </div>
        <div className="flex-1">
          <h3 className="font-medium text-gray-900">{review.name}</h3>
          <p className="text-sm text-gray-500 flex items-center gap-1">
            Posting publicly across Google
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <Info className="w-4 h-4 text-gray-400" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Your review will be posted publicly on Google</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </p>
        </div>
      </div>

      {/* Overall Rating - Centered */}
      <div className="flex justify-center mb-8">
        <div className="flex gap-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star 
              key={star} 
              className="w-8 h-8 fill-yellow-400 text-yellow-400" 
            />
          ))}
        </div>
      </div>

      {/* Category Ratings */}
      <div className="space-y-4 mb-6">
        <div className="space-y-3">
          {["Food", "Service", "Atmosphere"].map((category) => (
            <div key={category} className="flex items-center justify-between">
              <span className="text-gray-600 min-w-[100px]">{category}</span>
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star 
                    key={star} 
                    className="w-5 h-5 text-gray-300" 
                    fill="none" 
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Review Text Input */}
      <div className="mb-6">
        <textarea
          className="w-full p-3 border rounded-lg resize-none h-24"
          placeholder="Share your experience"
          defaultValue={review.comment}
        />
      </div>

      {/* Google Review Button */}
      <button className="w-full py-2.5 px-4 bg-white border rounded-lg text-gray-700 font-medium flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors">
        <svg className="w-5 h-5" viewBox="0 0 24 24">
          <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
          <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
          <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
          <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
        </svg>
        review this place
      </button>
    </div>
  );
};

const Reviews = () => {
  return (
    <section className="bg-gray-50 min-h-screen">
      {/* Header */}
      {/* <div className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center h-16">
            <div className="flex items-center gap-4">
              <button className="p-2 md:hidden">
                <ChevronLeft className="w-6 h-6" />
              </button>
              <div>
                <img src="/paul-logo.png" alt="PAUL" className="h-6" />
                <span className="text-xs text-gray-500">depuis 1889</span>
              </div>
            </div>
            <div className="ml-auto">
              <span className="text-gray-700">Reviews</span>
            </div>
          </div>
        </div>
      </div> */}

      {/* Reviews Section */}
      <div className="max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto px-4 py-8">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-8 text-center">Customer Reviews</h2>
        
        {/* Mobile: Horizontal Scroll */}
        <div className="md:hidden overflow-x-auto pb-6 -mx-4 px-4">
          <div className="flex gap-4">
            {reviewCards.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        </div>

        {/* Desktop: Grid Layout */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">
          {reviewCards.map((review) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <ReviewCard review={review} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
