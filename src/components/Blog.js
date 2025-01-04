import React from "react";
import Slider from "react-slick"; // Import react-slick slider
import "slick-carousel/slick/slick.css"; // Import slick CSS
import "slick-carousel/slick/slick-theme.css"; // Import slick theme CSS
import blogimage from "../images/blog-image.png";

const Blog = () => {
  // Sample blog data
  const blogs = [
    {
      date: "September 26, 2024",
      title: "Stents and Catheters: The Backbone of Modern Cardiovascular Surgery",
      description:
        "Cardiovascular diseases (CVDs) are the leading cause of death globally, accounting for 17.9 million deaths annually (World Health Organization).",
      image: "../images/blog-image.png", // Replace with your image URL
    },
    {
      date: "September 26, 2024",
      title: "Stents and Catheters: The Backbone of Modern Cardiovascular Surgery",
      description:
        "Cardiovascular diseases (CVDs) are the leading cause of death globally, accounting for 17.9 million deaths annually (World Health Organization).",
      image: "https://via.placeholder.com/400x250", // Replace with your image URL
    },
    {
      date: "September 26, 2024",
      title: "Stents and Catheters: The Backbone of Modern Cardiovascular Surgery",
      description:
        "Cardiovascular diseases (CVDs) are the leading cause of death globally, accounting for 17.9 million deaths annually (World Health Organization).",
      image: "https://via.placeholder.com/400x250", // Replace with your image URL
    },
    {
      date: "19 Jan 2022",
      title: "Stents and Catheters: The Backbone of Modern Cardiovascular Surgery",
      description:
        "Cardiovascular diseases (CVDs) are the leading cause of death globally, accounting for 17.9 million deaths annually (World Health Organization).",
      image: "https://via.placeholder.com/400x250", // Replace with your image URL
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // Adjust for medium screens
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // Adjust for small screens
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="blog-slider-section">
      <h2 className="section-title">Our Blogs</h2>
      <Slider {...settings}>
        {blogs.map((blog, index) => (
          <div key={index} className="blog-card">
            <img src={blogimage} alt={blog.title} className="blog-image" />
            <div className="blog-content">
              <p className="blog-date">{blog.date}</p>
              <h5 className="blog-title">{blog.title}</h5>
              <p className="blog-description">{blog.description}</p>
              <a href="#!" className="blog-read-more">
                Read More →
              </a>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Blog;
