import SliderImage from '../SliderImage/SliderImage';
import Image from '../../assets/image/img-7.svg';
import Image2 from '../../assets/image/img-8.svg';
import Image3 from '../../assets/image/img-9.svg';
import Image4 from '../../assets/image/img-10.svg';
import Image5 from '../../assets/image/img-11.svg';
import Image6 from '../../assets/image/img-12.svg';
import Image7 from '../../assets/image/img-13.svg';
import Image8 from '../../assets/image/img-1.svg';
import Image9 from '../../assets/image/img-14.svg';
import Image10 from '../../assets/image/img-15.svg';
import Image11 from '../../assets/image/img-16.svg';
import Image12 from '../../assets/image/img-17.svg';
import Image13 from '../../assets/image/img-18.svg';
import Image14 from '../../assets/image/img-19.svg';
import Image15 from '../../assets/image/img-20.svg';
import Image16 from '../../assets/image/img-21.svg';
import Image17 from '../../assets/image/img-22.svg';
import Image18 from '../../assets/image/img-23.svg';
import Image19 from '../../assets/image/img-6.svg';
import Image20 from '../../assets/image/img-24.svg';
import Image21 from '../../assets/image/img-25.svg';
import Image22 from '../../assets/image/img-26.svg';
import Image23 from '../../assets/image/img-27.svg';
import Image24 from '../../assets/image/img-28.svg';
import Image25 from '../../assets/image/img-29.svg';
import Image26 from '../../assets/image/img-30.svg';
import Image27 from '../../assets/image/img-3.svg';
import Image28 from '../../assets/image/img-31.svg';
import Image29 from '../../assets/image/img-32.svg';
import Image30 from '../../assets/image/img-33.svg';
import './Body.css';
import { useState } from 'react';

function Body() {
  const [showing, setShowing] = useState(false);
  function show() {
    setShowing(show => !show);
    console.log(showing);
  }
  return (
    <div className="container">
      <div className="body">
        <SliderImage image={Image} />
        <SliderImage image={Image2} />
        <SliderImage image={Image3} />
        <SliderImage image={Image4} />
        <SliderImage image={Image5} />
        <SliderImage image={Image6} />
        <SliderImage image={Image7} />
        <SliderImage image={Image8} />
        <SliderImage image={Image9} />
        <SliderImage image={Image10} />
        <SliderImage image={Image11} />
        <SliderImage image={Image12} />
        <SliderImage image={Image13} />
        <SliderImage image={Image14} />
        <SliderImage image={Image15} />
        <SliderImage image={Image16} />
      </div>
      <div className={!showing ? 'more' : 'show'}>
        <div className="body">
          <SliderImage image={Image17} />
          <SliderImage image={Image18} />
          <SliderImage image={Image3} />
          <SliderImage image={Image19} />
          <SliderImage image={Image20} />
          <SliderImage image={Image21} />
          <SliderImage image={Image22} />
          <SliderImage image={Image23} />
          <SliderImage image={Image19} />
          <SliderImage image={Image24} />
          <SliderImage image={Image25} />
          <SliderImage image={Image26} />
          <SliderImage image={Image27} />
          <SliderImage image={Image28} />
          <SliderImage image={Image29} />
          <SliderImage image={Image30} />
        </div>
      </div>
      <p
        className={`show_more ${showing ? 'more' : ''}`}
        onClick={() => show()}
      >
        View more
      </p>
    </div>
  );
}
export default Body;
