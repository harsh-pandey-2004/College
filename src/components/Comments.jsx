import React, { useState } from 'react';
import { Star } from 'lucide-react';

const ReviewComponent = () => {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [reviews] = useState([
    {
      id: 1,
      author: "Ali Tufan",
      avatar: "AT",
      title: "The best LMS Design",
      content: "This course is very applicable. Professor Ng explains precisely each algorithm and even tries to give an intuition for mathematical and statistic concepts behind each algorithm. Thank you very much.",
      daysAgo: "2 days ago",
      helpful: 12
    },
    {
      id: 2,
      author: "Sarah Chen",
      avatar: "SC",
      title: "Excellent Course Structure",
      content: "The course content is well-organized and the concepts are explained in a very clear manner. The practical examples really helped in understanding the complex topics.",
      daysAgo: "3 days ago",
      helpful: 8
    }
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ rating, title, content });
  };

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white rounded-xl shadow-lg">
      {/* Flex container for side-by-side layout */}
      <div className="flex gap-6 h-[600px]">
        {/* Reviews Section */}
        <div className="flex-1">
          <div className="border-b border-purple-100 pb-4 mb-4">
            <h2 className="text-2xl font-bold text-purple-800">Course Reviews</h2>
          </div>
          
          {/* Scrollable reviews container */}
          <div className="space-y-4 h-[500px] overflow-y-auto pr-4">
            {reviews.map((review) => (
              <div key={review.id} className="bg-purple-50 rounded-lg p-4 transition-all hover:shadow-md">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center text-white font-semibold">
                    {review.avatar}
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center">
                      <h3 className="font-semibold text-purple-800">{review.author}</h3>
                      <span className="text-sm text-purple-500">{review.daysAgo}</span>
                    </div>
                  </div>
                </div>
                <h4 className="font-medium text-lg text-purple-900 mb-2">{review.title}</h4>
                <p className="text-purple-700 mb-3">{review.content}</p>
                <div className="flex items-center gap-2 mt-2">
                  <button className="px-4 py-1.5 rounded-full bg-purple-100 text-purple-600 text-sm hover:bg-purple-200 transition-colors">
                    Helpful ({review.helpful})
                  </button>
                  <button className="px-4 py-1.5 rounded-full bg-gray-100 text-gray-600 text-sm hover:bg-gray-200 transition-colors">
                    Not Helpful
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Write Review Form Section */}
        <div className="w-96 bg-purple-50 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-purple-800 mb-4">Write a Review</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-purple-700 mb-2">Rating</label>
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setRating(star)}
                    onMouseEnter={() => setHoverRating(star)}
                    onMouseLeave={() => setHoverRating(0)}
                    className="focus:outline-none"
                  >
                    <Star
                      className={`w-6 h-6 ${
                        star <= (hoverRating || rating)
                          ? 'fill-purple-500 text-purple-500'
                          : 'text-purple-200'
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-purple-700 mb-2">Title</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-purple-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all"
                placeholder="Give your review a title"
              />
            </div>

            <div>
              <label className="block text-purple-700 mb-2">Review</label>
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-purple-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all h-32 resize-none"
                placeholder="Share your experience with this course"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition-colors focus:ring-2 focus:ring-purple-200 focus:ring-offset-2"
            >
              Submit Review
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ReviewComponent;