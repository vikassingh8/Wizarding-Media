import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";

const Carousels = () => {
  return (
    <div className="relative">
      <Carousel
        showArrows={true}
        showStatus={false}
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        stopOnHover={true}
        swipeable={true}
        dynamicHeight={true}
        renderArrowPrev={(onClickHandler, hasPrev, label) =>
          hasPrev && (
            <button
              type="button"
              onClick={onClickHandler}
              title={label}
              className="absolute left-10 top-1/2 transform -translate-y-1/2 text-orange-600"
              style={{ zIndex: 2, fontSize: "5rem" }}
            >
              &#8249; {/* Unicode for the left arrow */}
            </button>
          )
        }
        renderArrowNext={(onClickHandler, hasNext, label) =>
          hasNext && (
            <button
              type="button"
              onClick={onClickHandler}
              title={label}
              className="absolute right-10 top-1/2 transform -translate-y-1/2 text-orange-600"
              style={{ zIndex: 2, fontSize: "5rem" }}
            >
              &#8250; {/* Unicode for the right arrow */}
            </button>
          )
        }
      >
        <div>
          <img src={img1} alt="Slide 1" />
        </div>
        <div>
          <img src={img2} alt="Slide 2" />
        </div>
        <div>
          <img src={img3} alt="Slide 3" />
        </div>
      </Carousel>
    </div>
  );
};

export default Carousels;
