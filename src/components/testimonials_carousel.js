import React from 'react';
// import "./testimonials_carousel.css";
import "./../css/testimonials_carousel.css";
import "./../css/carousel-fix.css"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const getProps = () => ({
    showArrows: false,
    showStatus: true, //
    showIndicators: true, //
    infiniteLoop: true,
    showThumbs: false,
    useKeyboardArrows: true,
    autoPlay: true,
    stopOnHover: true,
    swipeable: true,
    dynamicHeight: true,
    emulateTouch: true,
    autoFocus: false,
    thumbWidth: 0,
    selectedItem: 0,
    interval: 5000,
    transitionTime: 1000,
    swipeScrollTolerance: 5,
    ariaLabel: undefined,
});

const createCarouselItemImage = (item, index, options = {}) => (
    <div key={"project" + index} className="lg:px-12">
        <div className="slider-testimonial mx-auto flex flex-col w-96">
            <img alt={"customer" + index} src={item.avatarUrl} className="h-28 w-28 rounded-full shadow-md mx-auto" />
        </div>
        <div className="mx-auto flex flex-col lg:px-12 mt-4">
            <p className="text-justify text-gray-500 px-12 italic">
                {item.text}
            </p>
            <p className="text-lg text-right flex flex-col px-8 lg:px-12 mt-4">
                <span className="text-gray-600 font-semibold">{item.position}, </span>
                <span className="text-gray-600 font-semibold">{item.name}</span>
            </p>
        </div>
    </div>
);

const baseChildren = testimonials => <div>{testimonials.map(createCarouselItemImage)}</div>;

function TestimonialsCarousel({testimonials}) {
    return (
        <Carousel {...getProps()} >
            {baseChildren(testimonials).props.children}
        </Carousel>
    );
  }

export default TestimonialsCarousel