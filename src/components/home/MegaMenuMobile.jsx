import React, { Component } from 'react'

export class MegaMenuMobile extends Component {
        constructor() {
          super();
          this.handleAccordionClick = this.handleAccordionClick.bind(this);
        }
      
        componentDidMount() {
          this.setupAccordion();
        }
      
        setupAccordion() {
          var acc = document.getElementsByClassName('accordionMobile');
          var accNum = acc.length;
      
          for (var i = 0; i < accNum; i++) {
            acc[i].addEventListener('click', this.handleAccordionClick);
          }
        }
      
        handleAccordionClick(event) {
          // Use event.currentTarget instead of this
          event.currentTarget.classList.toggle('active');
          var panel = event.currentTarget.nextElementSibling;
              if (panel.style.maxHeight) {
                  panel.style.maxHeight = null;
              } else {
                  panel.style.maxHeight = panel.scrollHeight + 'px';
              }
        }
  render() {
    return (
      <>
        <div className='accordionMenuDivMobile'>
          <div className='accordionMenuDivInsideMobile'>
                {/* Your buttons and panels */}
                <button className='accordionMobile'>
                    <img className='accordionMenuIconMobile' src="https://cdn-icons-png.flaticon.com/128/739/739249.png" alt="" /> &nbsp; Men's Clothing
                </button>
                <div className='panelMobile'>
                    <ul>
                        <li><button  className='accordionItem'>Men's T-Shirt 1</button></li>
                        <li><button  className='accordionItem'>Men's T-Shirt 2</button></li>
                        <li><button  className='accordionItem'>Men's T-Shirt 3</button></li>
                    </ul>
                </div>
                <button className='accordionMobile'>
                    <img className='accordionMenuIconMobile' src="https://cdn-icons-png.flaticon.com/128/739/739249.png" alt="" /> &nbsp; Men's Clothing
                </button>
                <div className='panelMobile'>
                    <ul>
                        <li><button  className='accordionItem'>Men's T-Shirt 1</button></li>
                        <li><button  className='accordionItem'>Men's T-Shirt 2</button></li>
                        <li><button  className='accordionItem'>Men's T-Shirt 3</button></li>
                    </ul>
                </div>
                <button className='accordionMobile'>
                    <img className='accordionMenuIconMobile' src="https://cdn-icons-png.flaticon.com/128/739/739249.png" alt="" /> &nbsp; Men's Clothing
                </button>
                <div className='panelMobile'>
                    <ul>
                        <li><button  className='accordionItem'>Men's T-Shirt 1</button></li>
                        <li><button  className='accordionItem'>Men's T-Shirt 2</button></li>
                        <li><button  className='accordionItem'>Men's T-Shirt 3</button></li>
                    </ul>
                </div>
                <button className='accordionMobile'>
                    <img className='accordionMenuIconMobile' src="https://cdn-icons-png.flaticon.com/128/739/739249.png" alt="" /> &nbsp; Men's Clothing
                </button>
                <div className='panelMobile'>
                    <ul>
                        <li><button  className='accordionItem'>Men's T-Shirt 1</button></li>
                        <li><button  className='accordionItem'>Men's T-Shirt 2</button></li>
                        <li><button  className='accordionItem'>Men's T-Shirt 3</button></li>
                    </ul>
                </div>
                <button className='accordionMobile'>
                    <img className='accordionMenuIconMobile' src="https://cdn-icons-png.flaticon.com/128/739/739249.png" alt="" /> &nbsp; Men's Clothing
                </button>
                <div className='panelMobile'>
                    <ul>
                        <li><button  className='accordionItem'>Men's T-Shirt 1</button></li>
                        <li><button  className='accordionItem'>Men's T-Shirt 2</button></li>
                        <li><button  className='accordionItem'>Men's T-Shirt 3</button></li>
                    </ul>
                </div>
                <button className='accordionMobile'>
                    <img className='accordionMenuIconMobile' src="https://cdn-icons-png.flaticon.com/128/739/739249.png" alt="" /> &nbsp; Men's Clothing
                </button>
                <div className='panelMobile'>
                    <ul>
                        <li><button  className='accordionItem'>Men's T-Shirt 1</button></li>
                        <li><button  className='accordionItem'>Men's T-Shirt 2</button></li>
                        <li><button  className='accordionItem'>Men's T-Shirt 3</button></li>
                    </ul>
                </div>
                <button className='accordionMobile'>
                    <img className='accordionMenuIconMobile' src="https://cdn-icons-png.flaticon.com/128/739/739249.png" alt="" /> &nbsp; Men's Clothing
                </button>
                <div className='panelMobile'>
                    <ul>
                        <li><button  className='accordionItem'>Men's T-Shirt 1</button></li>
                        <li><button  className='accordionItem'>Men's T-Shirt 2</button></li>
                        <li><button  className='accordionItem'>Men's T-Shirt 3</button></li>
                    </ul>
                </div>
                <button className='accordionMobile'>
                    <img className='accordionMenuIconMobile' src="https://cdn-icons-png.flaticon.com/128/739/739249.png" alt="" /> &nbsp; Men's Clothing
                </button>
                <div className='panelMobile'>
                    <ul>
                        <li><button  className='accordionItem'>Men's T-Shirt 1</button></li>
                        <li><button  className='accordionItem'>Men's T-Shirt 2</button></li>
                        <li><button  className='accordionItem'>Men's T-Shirt 3</button></li>
                    </ul>
                </div>
                <button className='accordionMobile'>
                    <img className='accordionMenuIconMobile' src="https://cdn-icons-png.flaticon.com/128/739/739249.png" alt="" /> &nbsp; Men's Clothing
                </button>
                <div className='panelMobile'>
                    <ul>
                        <li><button  className='accordionItem'>Men's T-Shirt 1</button></li>
                        <li><button  className='accordionItem'>Men's T-Shirt 2</button></li>
                        <li><button  className='accordionItem'>Men's T-Shirt 3</button></li>
                    </ul>
                </div>
                <button className='accordionMobile'>
                    <img className='accordionMenuIconMobile' src="https://cdn-icons-png.flaticon.com/128/739/739249.png" alt="" /> &nbsp; Men's Clothing
                </button>
                <div className='panelMobile'>
                    <ul>
                        <li><button  className='accordionItem'>Men's T-Shirt 1</button></li>
                        <li><button  className='accordionItem'>Men's T-Shirt 2</button></li>
                        <li><button  className='accordionItem'>Men's T-Shirt 3</button></li>
                    </ul>
                </div>
                <button className='accordionMobile'>
                    <img className='accordionMenuIconMobile' src="https://cdn-icons-png.flaticon.com/128/739/739249.png" alt="" /> &nbsp; Men's Clothing
                </button>
                <div className='panelMobile'>
                    <ul>
                        <li><button  className='accordionItem'>Men's T-Shirt 1</button></li>
                        <li><button  className='accordionItem'>Men's T-Shirt 2</button></li>
                        <li><button  className='accordionItem'>Men's T-Shirt 3</button></li>
                    </ul>
                </div>
                <button className='accordionMobile'>
                    <img className='accordionMenuIconMobile' src="https://cdn-icons-png.flaticon.com/128/739/739249.png" alt="" /> &nbsp; Men's Clothing
                </button>
                <div className='panelMobile'>
                    <ul>
                        <li><button  className='accordionItem'>Men's T-Shirt 1</button></li>
                        <li><button  className='accordionItem'>Men's T-Shirt 2</button></li>
                        <li><button  className='accordionItem'>Men's T-Shirt 3</button></li>
                    </ul>
                </div>
                <button className='accordionMobile'>
                    <img className='accordionMenuIconMobile' src="https://cdn-icons-png.flaticon.com/128/739/739249.png" alt="" /> &nbsp; Men's Clothing
                </button>
                <div className='panelMobile'>
                    <ul>
                        <li><button  className='accordionItem'>Men's T-Shirt 1</button></li>
                        <li><button  className='accordionItem'>Men's T-Shirt 2</button></li>
                        <li><button  className='accordionItem'>Men's T-Shirt 3</button></li>
                    </ul>
                </div>
                <button className='accordionMobile'>
                    <img className='accordionMenuIconMobile' src="https://cdn-icons-png.flaticon.com/128/739/739249.png" alt="" /> &nbsp; Men's Clothing
                </button>
                <div className='panelMobile'>
                    <ul>
                        <li><button  className='accordionItem'>Men's T-Shirt 1</button></li>
                        <li><button  className='accordionItem'>Men's T-Shirt 2</button></li>
                        <li><button  className='accordionItem'>Men's T-Shirt 3</button></li>
                    </ul>
                </div>
                <button className='accordionMobile'>
                    <img className='accordionMenuIconMobile' src="https://cdn-icons-png.flaticon.com/128/739/739249.png" alt="" /> &nbsp; Men's Clothing
                </button>
                <div className='panelMobile'>
                    <ul>
                        <li><button  className='accordionItem'>Men's T-Shirt 1</button></li>
                        <li><button  className='accordionItem'>Men's T-Shirt 2</button></li>
                        <li><button  className='accordionItem'>Men's T-Shirt 3</button></li>
                    </ul>
                </div>
          </div>
        </div>
      </>
    )
  }
}

export default MegaMenuMobile
