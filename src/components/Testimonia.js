import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./Testimonia.css";

import testimonia1 from "./assets/testimonials-1.jpg";
import testimonia2 from "./assets/testimonials-2.jpg";
import testimonia3 from "./assets/testimonials-3.jpg";
import testimonia4 from "./assets/testimonials-4.jpg";
import testimonia5 from "./assets/testimonials-5.jpg";

const TestimonialCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const testimonials = [
    {
      id: 1,
      image: testimonia1,
      name: "John Doe",
      position: "CEO",
      stars: 5,
      message: '"I am a frequent shopper on this website and I continue to be impressed by their selection of products. They have everything I need for my home and personal needs, and the prices are unbeatable. The website is easy to use and I always receive my orders in a timely manner. I highly recommend this site to anyone looking for quality products!"',
    },
    {
      id: 2,
      image: testimonia2,
      name: "Jane Smith",
      position: "Marketing Manager",
      stars: 4,
      message:
        ' "I haveve been shopping on this website for months now and I am consistently impressed by the quality of their products. The customer service is also top-notch, and any time I have had an issue they have been quick to respond and resolve it. I highly recommend this site to anyone looking for high-quality products and exceptional service!"',
    },
    {
      id: 3,
      image: testimonia3,
      name: "Charlotte Singh",
      position: "Marketing Manager",
      stars: 4,
      message:
        '"I recently discovered this website and I am so glad I did. The products are amazing and the customer service is exceptional. I had a question about a product and their customer service team was quick to respond and very helpful. I will definitely be coming back to this site for all of my future shopping needs!  this site for all of my future shopping needs"',
    },
    {
      id: 4,
      image: testimonia4,
      name: "Ava Rodriguez",
      position: "Marketing Manager",
      stars: 4,
      message:
        '"I recently purchased a product from this website and I could not be happier with my purchase. The product arrived quickly and was exactly what I was looking for. The website was easy to navigate and the checkout process was a breeze. I will definitely be shopping here again! I will definitely be shopping here again I recently purchased"',
    },
    {
      id: 5,
      image: testimonia5,
      name: "Liam Patel",
      position: "Marketing Manager",
      stars: 4,
      message:
        '"I was a bit skeptical about buying products online, but this website has completely changed my mind. The products are of great quality and the prices are very reasonable. I also love the fact that they offer free shipping on orders over a certain amount. I would definitely recommend this site to anyone looking for a hassle-free shopping experience!"',
    },
  ];

  return (
    <div className="testimonial-carousel">
      <Slider {...settings}>
        {testimonials.map((testimonial) => (
          <div className="testimonial-slide" key={testimonial.id}>
            <div className="testimonial-content">
              <div className="testimonial-image">
                <img
                  src={testimonial.image}
                  alt={`Testimonial ${testimonial.id}`}
                />
              </div>
              <div className="testimonial-details">
                <h3 className="testimonial-name">{testimonial.name}</h3>
                <p className="testimonial-position">{testimonial.position}</p>
                <div className="testimonial-rating">
                  {Array.from({ length: testimonial.stars }).map((_, index) => (
                    <span key={index} className="star">
                      &#9733;
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <p className="testimonial-message">{testimonial.message}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialCarousel;
