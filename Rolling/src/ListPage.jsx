import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { getRollingPaperLists } from './api';

const CarouselSlider = () => {
  // Added parentheses here
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
  };

  return (
    <div>
      <h2> Single Item</h2>
      <Slider {...settings}>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
    </div>
  );
};
export function ListPage() {
  const [popularList, setPopularList] = useState([]);
  const rollingPaperListLoad = async () => {
    const { results } = await getRollingPaperLists();
    console.log(results);
  };
  useEffect(() => {
    rollingPaperListLoad();
  }, []);

  return (
    <>
      <CarouselSlider />
    </>
  );
}
