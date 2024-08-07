import React, { Component } from 'react'
import NavMenuMobile from '../components/partials/NavMenuMobile';
import NavMenuDesktop from '../components/partials/NavMenuDesktop';
import FooterDesktop from '../components/partials/FooterDesktop';
import FooterMobile from '../components/partials/FooterMobile';
import Refund from '../components/others/Refund';

export class RefundPage extends Component {
    componentDidMount(){
        window.scroll(0,0)
      }

  render() {
    return (
        <>
        <div className="Desktop">
            <NavMenuDesktop />
        </div>

        <div className="Mobile">
            <NavMenuMobile />
        </div>
        
        <Refund />

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

export default RefundPage
