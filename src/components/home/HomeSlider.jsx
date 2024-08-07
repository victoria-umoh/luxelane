import React, { Component } from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider1 from '../../assets/images/banner5.jpg';
import Slider2 from '../../assets/images/banner2.jpg';
import Slider3 from '../../assets/images/banner3.jpg';

export class HomeSlider extends Component {
    constructor(props){
        super(props);
        this.previous=this.previous.bind(this);
        this.next=this.next.bind(this);
    }

    previous(){
        this.slider.slickPrev()
    }

    next(){
        this.slider.slickNext()
    }
  render() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1, 
        initialSlide: 0,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
            }
        }
        ]
      };

    return (
      <>
        <Slider {...settings}>

          <div>
            <img className='slider-img' src={Slider1} alt='' />
          </div>

          <div>
            <img className='slider-img' src={Slider2} alt='' />
          </div>

          <div>
            <img className='slider-img' src={Slider3} alt='' />
          </div>

        </Slider>
        
      </>
    )
  }
}

export default HomeSlider
