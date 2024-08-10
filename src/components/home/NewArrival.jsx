import React, { Component } from 'react'
import { Container, Row, Card } from 'react-bootstrap'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export class NewArrival extends Component {

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
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 4,
        slidesToScroll: 1, 
        initialSlide: 0,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
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
            <Container className='text-center' fluid={true}>
                <div className='section-title text-center mt-55'>
                    <h2>NEW ARRIVAL &nbsp;
                        <button className='btn btn-sm ml-2 site-btn' onClick={this.previous}><i className='fa fa-angle-left'></i></button>&nbsp;
                        <button className='btn btn-sm ml-2 site-btn' onClick={this.next}><i className='fa fa-angle-right'></i></button>
                    </h2>
                    <p>Some Of Our Exclusive Collection</p>
                </div>

                <Row>
                    <Slider ref={c=>(this.slider=c)} {...settings}>
                        <div>
                            <Card className='image-box card'>
                                <img 
                                src="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/20/2184812/1.jpg?4682" 
                                alt="product" className='center' />
                                <Card.Body>
                                    <p className='product-name-on-card'>XIAOMI Redmi A2+ 6.52" 2GB RAM/32GB ROM</p>
                                    <p className='product-price-on-card'>₦ 61,800</p>
                                </Card.Body>
                            </Card>
                        </div>
                        <div>
                        <Card className='image-box card'>
                            <img 
                            src="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/90/4761412/1.jpg?4199" 
                            alt="product" className='center' />
                            <Card.Body>
                                <p className='product-name-on-card'>XIAOMI Redmi A2+ 6.52" 2GB RAM/32GB ROM</p>
                                <p className='product-price-on-card'>₦ 61,800</p>
                            </Card.Body>
                        </Card>
                        </div>
                        <div>
                        <Card className='image-box card'>
                            <img 
                            src="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/99/5079471/1.jpg?7475"
                            alt="product" className='center' />
                            <Card.Body>
                                <p className='product-name-on-card'>XIAOMI Redmi A2+ 6.52" 2GB RAM/32GB ROM</p>
                                <p className='product-price-on-card'>₦ 61,800</p>
                            </Card.Body>
                        </Card>
                        </div>
                        <div>
                        <Card className='image-box card'>
                            <img 
                            src="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/60/729753/1.jpg?9622"
                            alt="product" className='center' />
                            <Card.Body>
                                <p className='product-name-on-card'>XIAOMI Redmi A2+ 6.52" 2GB RAM/32GB ROM</p>
                                <p className='product-price-on-card'>₦ 61,800</p>
                            </Card.Body>
                        </Card>
                        </div>
                        <div>
                        <Card className='image-box card'>
                            <img 
                            src="https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/L/A/217159_1701542512.jpg"
                            alt="product" className='center' />
                            <Card.Body>
                                <p className='product-name-on-card'>XIAOMI Redmi A2+ 6.52" 2GB RAM/32GB ROM</p>
                                <p className='product-price-on-card'>₦ 61,800</p>
                            </Card.Body>
                        </Card>
                        </div>
                        <div>
                        <Card className='image-box card'>
                            <img 
                            src="https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/O/P/137865_1653482610.jpg"
                            alt="product" className='center' />
                            <Card.Body>
                                <p className='product-name-on-card'>XIAOMI Redmi A2+ 6.52" 2GB RAM/32GB ROM</p>
                                <p className='product-price-on-card'>₦ 61,800</p>
                            </Card.Body>
                        </Card>
                        </div>
                    </Slider>
                </Row>


            </Container>
        </>
    )
  }
}

export default NewArrival
