import React, { Component } from 'react';
import FeaturedProducts from '../components/home/FeaturedProducts';
import Categories from '../components/home/Categories';
import Collection from '../components/home/Collection';
import NewArrival from '../components/home/NewArrival';
import HomeTop from '../components/home/HomeTop';
import NavMenuMobile from '../components/partials/NavMenuMobile';
import HomeTopMobile from '../components/home/HomeTopMobile';
import NavMenuDesktop from '../components/partials/NavMenuDesktop';
import FooterDesktop from '../components/partials/FooterDesktop';
import FooterMobile from '../components/partials/FooterMobile';
import AppURL from '../api/AppURL';
import axios from 'axios';

export class HomePage extends Component {

  componentDidMount(){
    window.scroll(0,0);

    this.GetVisitorDetails(); //call GetVisitorDetails() so it loads when page is refreshed 
  }

  // Define a method named GetVisitorDetails within a class or a functional component
  GetVisitorDetails =()=>{
     axios.get(AppURL.VisitorDetails).then().catch()    // Used axios to make a GET request to the VisitorDetails URL from the AppURL class
  }
  
  render() {
    return (
      <>
        <div className="Desktop">
          <NavMenuDesktop />
          <HomeTop />
        </div>

        <div className="Mobile">
          <NavMenuMobile />
          <HomeTopMobile />
        </div>


        <FeaturedProducts />

        <NewArrival />

        <Categories />

        <Collection />

        
        <div className="Desktop">
          <FooterDesktop />
        </div>

        <div className="Mobile">
          <FooterMobile />
        </div>
      </>
    )
  }
}

export default HomePage
