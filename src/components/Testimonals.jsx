import { Star } from '@mui/icons-material';
import React from 'react';

function Testimonals() {
  const testimonials = [
    {
      name: 'Jane Doe',
      review:
        'This Tailwind CSS library is just amazing! I was able to build my entire website in no time.',
      rating: 5,
    },
    {
      name: 'John Doe',
      review:
        'The UI components in this library are top-notch and made my development process so much easier.',
      rating: 5,
    },
    {
      name: 'Samantha Smith',
      review:
        "I've been using this library for my personal projects and I am very impressed with the quality and ease of use.",
      rating: 4,
    },
  ];

  const profileImage =
    'https://pbs.twimg.com/profile_images/1605762947686375425/lsoGWWty_400x400.jpg';

  return (
    <div className='bg-blue-50 p-12 shadow-lg'>
      <h3 className='text-3xl font-bold text-center text-indigo-500 mb-8'>
        What Our Customers Say
      </h3>
      <div className='flex flex-col justify-center items-center'>
        {testimonials.map((testimonial, index) => (
          <div
            key={testimonial.name}
            index={index}
            className='flex flex-col items-center mb-8 border-b border-gray-300 py-12'
          >
            <div className='flex items-center'>
              {[...Array(5)].map((star, i) => {
                const ratingValue = i + 1;
                return (
                  <Star
                    key={`star-${i}`}
                    className={`text-indigo-500 ${
                      ratingValue <= testimonial.rating
                        ? 'text-indigo-500'
                        : 'text-gray-300'
                    }`}
                  />
                );
              })}
            </div>
            <p className='text-center text-gray-700 font-medium my-6'>
              "{testimonial.review}"
            </p>
            <h4 className='text-lg mb-5 font-semibold text-center text-indigo-500'>
              {testimonial.name}
            </h4>
            <img src={profileImage} className='w-10 h-10 rounded-full' alt='' />
            {/**  //TODO add the review profile/preview image, once there are actual reviews could implement google reviews API */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonals;
