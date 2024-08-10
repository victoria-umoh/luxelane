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
<<<<<<< HEAD
<<<<<<< HEAD
                    <img className='accordionMenuIconMobile' src="https://cdn-icons-png.flaticon.com/128/739/739249.png" alt="product" /> &nbsp; Men's Clothing
=======
                    <img className='accordionMenuIconMobile' src="https://cdn-icons-png.flaticon.com/128/739/739249.png" alt="" /> &nbsp; Men's Clothing
>>>>>>> 7c5ce7c40f2cf8dfb3c43bf0ad0e268d2bb21db7
=======
                    <img className='accordionMenuIconMobile' src="https://cdn-icons-png.flaticon.com/128/739/739249.png" alt="product" /> &nbsp; Men's Clothing
>>>>>>> 639258daf01638b266aaf57205468d4a5336c8d4
                </button>
                <div className='panelMobile'>
                    <ul>
                        <li><button  className='accordionItem'>Men's T-Shirt 1</button></li>
                        <li><button  className='accordionItem'>Men's T-Shirt 2</button></li>
                        <li><button  className='accordionItem'>Men's T-Shirt 3</button></li>
                    </ul>
                </div>
                <button className='accordionMobile'>
<<<<<<< HEAD
<<<<<<< HEAD
                    <img className='accordionMenuIconMobile' src="https://cdn-icons-png.flaticon.com/128/739/739249.png" alt="product" /> &nbsp; Men's Clothing
=======
                    <img className='accordionMenuIconMobile' src="https://cdn-icons-png.flaticon.com/128/739/739249.png" alt="" /> &nbsp; Men's Clothing
>>>>>>> 7c5ce7c40f2cf8dfb3c43bf0ad0e268d2bb21db7
=======
                    <img className='accordionMenuIconMobile' src="https://cdn-icons-png.flaticon.com/128/739/739249.png" alt="product" /> &nbsp; Men's Clothing
>>>>>>> 639258daf01638b266aaf57205468d4a5336c8d4
                </button>
                <div className='panelMobile'>
                    <ul>
                        <li><button  className='accordionItem'>Men's T-Shirt 1</button></li>
                        <li><button  className='accordionItem'>Men's T-Shirt 2</button></li>
                        <li><button  className='accordionItem'>Men's T-Shirt 3</button></li>
                    </ul>
                </div>
                <button className='accordionMobile'>
<<<<<<< HEAD
<<<<<<< HEAD
                    <img className='accordionMenuIconMobile' src="https://cdn-icons-png.flaticon.com/128/739/739249.png" alt="product" /> &nbsp; Men's Clothing
=======
                    <img className='accordionMenuIconMobile' src="https://cdn-icons-png.flaticon.com/128/739/739249.png" alt="" /> &nbsp; Men's Clothing
>>>>>>> 7c5ce7c40f2cf8dfb3c43bf0ad0e268d2bb21db7
=======
                    <img className='accordionMenuIconMobile' src="https://cdn-icons-png.flaticon.com/128/739/739249.png" alt="product" /> &nbsp; Men's Clothing
>>>>>>> 639258daf01638b266aaf57205468d4a5336c8d4
                </button>
                <div className='panelMobile'>
                    <ul>
                        <li><button  className='accordionItem'>Men's T-Shirt 1</button></li>
                        <li><button  className='accordionItem'>Men's T-Shirt 2</button></li>
                        <li><button  className='accordionItem'>Men's T-Shirt 3</button></li>
                    </ul>
                </div>
                <button className='accordionMobile'>
<<<<<<< HEAD
<<<<<<< HEAD
                    <img className='accordionMenuIconMobile' src="https://cdn-icons-png.flaticon.com/128/739/739249.png" alt="product" /> &nbsp; Men's Clothing
=======
                    <img className='accordionMenuIconMobile' src="https://cdn-icons-png.flaticon.com/128/739/739249.png" alt="" /> &nbsp; Men's Clothing
>>>>>>> 7c5ce7c40f2cf8dfb3c43bf0ad0e268d2bb21db7
=======
                    <img className='accordionMenuIconMobile' src="https://cdn-icons-png.flaticon.com/128/739/739249.png" alt="product" /> &nbsp; Men's Clothing
>>>>>>> 639258daf01638b266aaf57205468d4a5336c8d4
                </button>
                <div className='panelMobile'>
                    <ul>
                        <li><button  className='accordionItem'>Men's T-Shirt 1</button></li>
                        <li><button  className='accordionItem'>Men's T-Shirt 2</button></li>
                        <li><button  className='accordionItem'>Men's T-Shirt 3</button></li>
                    </ul>
                </div>
                <button className='accordionMobile'>
<<<<<<< HEAD
<<<<<<< HEAD
                    <img className='accordionMenuIconMobile' src="https://cdn-icons-png.flaticon.com/128/739/739249.png" alt="product" /> &nbsp; Men's Clothing
=======
                    <img className='accordionMenuIconMobile' src="https://cdn-icons-png.flaticon.com/128/739/739249.png" alt="" /> &nbsp; Men's Clothing
>>>>>>> 7c5ce7c40f2cf8dfb3c43bf0ad0e268d2bb21db7
=======
                    <img className='accordionMenuIconMobile' src="https://cdn-icons-png.flaticon.com/128/739/739249.png" alt="product" /> &nbsp; Men's Clothing
>>>>>>> 639258daf01638b266aaf57205468d4a5336c8d4
                </button>
                <div className='panelMobile'>
                    <ul>
                        <li><button  className='accordionItem'>Men's T-Shirt 1</button></li>
                        <li><button  className='accordionItem'>Men's T-Shirt 2</button></li>
                        <li><button  className='accordionItem'>Men's T-Shirt 3</button></li>
                    </ul>
                </div>
                <button className='accordionMobile'>
<<<<<<< HEAD
<<<<<<< HEAD
                    <img className='accordionMenuIconMobile' src="https://cdn-icons-png.flaticon.com/128/739/739249.png" alt="product" /> &nbsp; Men's Clothing
=======
                    <img className='accordionMenuIconMobile' src="https://cdn-icons-png.flaticon.com/128/739/739249.png" alt="" /> &nbsp; Men's Clothing
>>>>>>> 7c5ce7c40f2cf8dfb3c43bf0ad0e268d2bb21db7
=======
                    <img className='accordionMenuIconMobile' src="https://cdn-icons-png.flaticon.com/128/739/739249.png" alt="product" /> &nbsp; Men's Clothing
>>>>>>> 639258daf01638b266aaf57205468d4a5336c8d4
                </button>
                <div className='panelMobile'>
                    <ul>
                        <li><button  className='accordionItem'>Men's T-Shirt 1</button></li>
                        <li><button  className='accordionItem'>Men's T-Shirt 2</button></li>
                        <li><button  className='accordionItem'>Men's T-Shirt 3</button></li>
                    </ul>
                </div>
                <button className='accordionMobile'>
<<<<<<< HEAD
<<<<<<< HEAD
                    <img className='accordionMenuIconMobile' src="https://cdn-icons-png.flaticon.com/128/739/739249.png" alt="product" /> &nbsp; Men's Clothing
=======
                    <img className='accordionMenuIconMobile' src="https://cdn-icons-png.flaticon.com/128/739/739249.png" alt="" /> &nbsp; Men's Clothing
>>>>>>> 7c5ce7c40f2cf8dfb3c43bf0ad0e268d2bb21db7
=======
                    <img className='accordionMenuIconMobile' src="https://cdn-icons-png.flaticon.com/128/739/739249.png" alt="product" /> &nbsp; Men's Clothing
>>>>>>> 639258daf01638b266aaf57205468d4a5336c8d4
                </button>
                <div className='panelMobile'>
                    <ul>
                        <li><button  className='accordionItem'>Men's T-Shirt 1</button></li>
                        <li><button  className='accordionItem'>Men's T-Shirt 2</button></li>
                        <li><button  className='accordionItem'>Men's T-Shirt 3</button></li>
                    </ul>
                </div>
                <button className='accordionMobile'>
<<<<<<< HEAD
<<<<<<< HEAD
                    <img className='accordionMenuIconMobile' src="https://cdn-icons-png.flaticon.com/128/739/739249.png" alt="product" /> &nbsp; Men's Clothing
=======
                    <img className='accordionMenuIconMobile' src="https://cdn-icons-png.flaticon.com/128/739/739249.png" alt="" /> &nbsp; Men's Clothing
>>>>>>> 7c5ce7c40f2cf8dfb3c43bf0ad0e268d2bb21db7
=======
                    <img className='accordionMenuIconMobile' src="https://cdn-icons-png.flaticon.com/128/739/739249.png" alt="product" /> &nbsp; Men's Clothing
>>>>>>> 639258daf01638b266aaf57205468d4a5336c8d4
                </button>
                <div className='panelMobile'>
                    <ul>
                        <li><button  className='accordionItem'>Men's T-Shirt 1</button></li>
                        <li><button  className='accordionItem'>Men's T-Shirt 2</button></li>
                        <li><button  className='accordionItem'>Men's T-Shirt 3</button></li>
                    </ul>
                </div>
                <button className='accordionMobile'>
<<<<<<< HEAD
<<<<<<< HEAD
                    <img className='accordionMenuIconMobile' src="https://cdn-icons-png.flaticon.com/128/739/739249.png" alt="product" /> &nbsp; Men's Clothing
=======
                    <img className='accordionMenuIconMobile' src="https://cdn-icons-png.flaticon.com/128/739/739249.png" alt="" /> &nbsp; Men's Clothing
>>>>>>> 7c5ce7c40f2cf8dfb3c43bf0ad0e268d2bb21db7
=======
                    <img className='accordionMenuIconMobile' src="https://cdn-icons-png.flaticon.com/128/739/739249.png" alt="product" /> &nbsp; Men's Clothing
>>>>>>> 639258daf01638b266aaf57205468d4a5336c8d4
                </button>
                <div className='panelMobile'>
                    <ul>
                        <li><button  className='accordionItem'>Men's T-Shirt 1</button></li>
                        <li><button  className='accordionItem'>Men's T-Shirt 2</button></li>
                        <li><button  className='accordionItem'>Men's T-Shirt 3</button></li>
                    </ul>
                </div>
                <button className='accordionMobile'>
<<<<<<< HEAD
<<<<<<< HEAD
                    <img className='accordionMenuIconMobile' src="https://cdn-icons-png.flaticon.com/128/739/739249.png" alt="product" /> &nbsp; Men's Clothing
=======
                    <img className='accordionMenuIconMobile' src="https://cdn-icons-png.flaticon.com/128/739/739249.png" alt="" /> &nbsp; Men's Clothing
>>>>>>> 7c5ce7c40f2cf8dfb3c43bf0ad0e268d2bb21db7
=======
                    <img className='accordionMenuIconMobile' src="https://cdn-icons-png.flaticon.com/128/739/739249.png" alt="product" /> &nbsp; Men's Clothing
>>>>>>> 639258daf01638b266aaf57205468d4a5336c8d4
                </button>
                <div className='panelMobile'>
                    <ul>
                        <li><button  className='accordionItem'>Men's T-Shirt 1</button></li>
                        <li><button  className='accordionItem'>Men's T-Shirt 2</button></li>
                        <li><button  className='accordionItem'>Men's T-Shirt 3</button></li>
                    </ul>
                </div>
                <button className='accordionMobile'>
<<<<<<< HEAD
<<<<<<< HEAD
                    <img className='accordionMenuIconMobile' src="https://cdn-icons-png.flaticon.com/128/739/739249.png" alt="product" /> &nbsp; Men's Clothing
=======
                    <img className='accordionMenuIconMobile' src="https://cdn-icons-png.flaticon.com/128/739/739249.png" alt="" /> &nbsp; Men's Clothing
>>>>>>> 7c5ce7c40f2cf8dfb3c43bf0ad0e268d2bb21db7
=======
                    <img className='accordionMenuIconMobile' src="https://cdn-icons-png.flaticon.com/128/739/739249.png" alt="product" /> &nbsp; Men's Clothing
>>>>>>> 639258daf01638b266aaf57205468d4a5336c8d4
                </button>
                <div className='panelMobile'>
                    <ul>
                        <li><button  className='accordionItem'>Men's T-Shirt 1</button></li>
                        <li><button  className='accordionItem'>Men's T-Shirt 2</button></li>
                        <li><button  className='accordionItem'>Men's T-Shirt 3</button></li>
                    </ul>
                </div>
                <button className='accordionMobile'>
<<<<<<< HEAD
<<<<<<< HEAD
                    <img className='accordionMenuIconMobile' src="https://cdn-icons-png.flaticon.com/128/739/739249.png" alt="product" /> &nbsp; Men's Clothing
=======
                    <img className='accordionMenuIconMobile' src="https://cdn-icons-png.flaticon.com/128/739/739249.png" alt="" /> &nbsp; Men's Clothing
>>>>>>> 7c5ce7c40f2cf8dfb3c43bf0ad0e268d2bb21db7
=======
                    <img className='accordionMenuIconMobile' src="https://cdn-icons-png.flaticon.com/128/739/739249.png" alt="product" /> &nbsp; Men's Clothing
>>>>>>> 639258daf01638b266aaf57205468d4a5336c8d4
                </button>
                <div className='panelMobile'>
                    <ul>
                        <li><button  className='accordionItem'>Men's T-Shirt 1</button></li>
                        <li><button  className='accordionItem'>Men's T-Shirt 2</button></li>
                        <li><button  className='accordionItem'>Men's T-Shirt 3</button></li>
                    </ul>
                </div>
                <button className='accordionMobile'>
<<<<<<< HEAD
<<<<<<< HEAD
                    <img className='accordionMenuIconMobile' src="https://cdn-icons-png.flaticon.com/128/739/739249.png" alt="product" /> &nbsp; Men's Clothing
=======
                    <img className='accordionMenuIconMobile' src="https://cdn-icons-png.flaticon.com/128/739/739249.png" alt="" /> &nbsp; Men's Clothing
>>>>>>> 7c5ce7c40f2cf8dfb3c43bf0ad0e268d2bb21db7
=======
                    <img className='accordionMenuIconMobile' src="https://cdn-icons-png.flaticon.com/128/739/739249.png" alt="product" /> &nbsp; Men's Clothing
>>>>>>> 639258daf01638b266aaf57205468d4a5336c8d4
                </button>
                <div className='panelMobile'>
                    <ul>
                        <li><button  className='accordionItem'>Men's T-Shirt 1</button></li>
                        <li><button  className='accordionItem'>Men's T-Shirt 2</button></li>
                        <li><button  className='accordionItem'>Men's T-Shirt 3</button></li>
                    </ul>
                </div>
                <button className='accordionMobile'>
<<<<<<< HEAD
<<<<<<< HEAD
                    <img className='accordionMenuIconMobile' src="https://cdn-icons-png.flaticon.com/128/739/739249.png" alt="product" /> &nbsp; Men's Clothing
=======
                    <img className='accordionMenuIconMobile' src="https://cdn-icons-png.flaticon.com/128/739/739249.png" alt="" /> &nbsp; Men's Clothing
>>>>>>> 7c5ce7c40f2cf8dfb3c43bf0ad0e268d2bb21db7
=======
                    <img className='accordionMenuIconMobile' src="https://cdn-icons-png.flaticon.com/128/739/739249.png" alt="product" /> &nbsp; Men's Clothing
>>>>>>> 639258daf01638b266aaf57205468d4a5336c8d4
                </button>
                <div className='panelMobile'>
                    <ul>
                        <li><button  className='accordionItem'>Men's T-Shirt 1</button></li>
                        <li><button  className='accordionItem'>Men's T-Shirt 2</button></li>
                        <li><button  className='accordionItem'>Men's T-Shirt 3</button></li>
                    </ul>
                </div>
                <button className='accordionMobile'>
<<<<<<< HEAD
<<<<<<< HEAD
                    <img className='accordionMenuIconMobile' src="https://cdn-icons-png.flaticon.com/128/739/739249.png" alt="product" /> &nbsp; Men's Clothing
=======
                    <img className='accordionMenuIconMobile' src="https://cdn-icons-png.flaticon.com/128/739/739249.png" alt="" /> &nbsp; Men's Clothing
>>>>>>> 7c5ce7c40f2cf8dfb3c43bf0ad0e268d2bb21db7
=======
                    <img className='accordionMenuIconMobile' src="https://cdn-icons-png.flaticon.com/128/739/739249.png" alt="product" /> &nbsp; Men's Clothing
>>>>>>> 639258daf01638b266aaf57205468d4a5336c8d4
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
