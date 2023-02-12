import "react-responsive-carousel/lib/styles/carousel.min.css";
import React from "react";
import { Carousel } from "react-responsive-carousel";

export default function HomeCarousal({Carouselitems}) {
  return (
    <Carousel className="citemimage" autoPlay="true" infiniteLoop="true">
      {Carouselitems.map((item,i) => (
        <div key={i}>
          <img  src={"./Images/"+item} />
       
        </div>
      ))}
    </Carousel>
  );
}
