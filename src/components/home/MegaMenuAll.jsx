import React, { Component } from 'react'

export class MegaMenuAll extends Component {
  constructor() {
    super();
    this.handleAccordionClick = this.handleAccordionClick.bind(this);
  }

  componentDidMount() {
    this.setupAccordion();
  }

  setupAccordion() {
    var acc = document.getElementsByClassName('accordionAll');
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
        <div className='accordionMenuDivAll'>
          <div className='accordionMenuDivInsideAll'>
                {/* Your buttons and panels */}
                <button className='accordionAll'>
                    <img className='accordionMenuIconAll' src="https://cdn-icons-png.flaticon.com/128/739/739249.png" alt="" /> &nbsp; Men's Clothing
                </button>
                <div className='panelAll'>
                    <ul>
                        <li><a href="#" className='accordionItemAll'>Men's T-Shirt 1</a></li>
                        <li><a href="#" className='accordionItemAll'>Men's T-Shirt 2</a></li>
                        <li><a href="#" className='accordionItemAll'>Men's T-Shirt 3</a></li>
                    </ul>
                </div>
                <button className='accordionAll'>
                    <img className='accordionMenuIconAll' src="https://cdn-icons-png.flaticon.com/128/739/739249.png" alt="" /> &nbsp; Men's Clothing
                </button>
                <div className='panelAll'>
                    <ul>
                        <li><a href="#" className='accordionItemAll'>Men's T-Shirt 1</a></li>
                        <li><a href="#" className='accordionItemAll'>Men's T-Shirt 2</a></li>
                        <li><a href="#" className='accordionItemAll'>Men's T-Shirt 3</a></li>
                    </ul>
                </div>
                <button className='accordionAll'>
                    <img className='accordionMenuIconAll' src="https://cdn-icons-png.flaticon.com/128/739/739249.png" alt="" /> &nbsp; Men's Clothing
                </button>
                <div className='panelAll'>
                    <ul>
                        <li><a href="#" className='accordionItemAll'>Men's T-Shirt 1</a></li>
                        <li><a href="#" className='accordionItemAll'>Men's T-Shirt 2</a></li>
                        <li><a href="#" className='accordionItemAll'>Men's T-Shirt 3</a></li>
                    </ul>
                </div>
                <button className='accordionAll'>
                    <img className='accordionMenuIconAll' src="https://cdn-icons-png.flaticon.com/128/739/739249.png" alt="" /> &nbsp; Men's Clothing
                </button>
                <div className='panelAll'>
                    <ul>
                        <li><a href="#" className='accordionItemAll'>Men's T-Shirt 1</a></li>
                        <li><a href="#" className='accordionItemAll'>Men's T-Shirt 2</a></li>
                        <li><a href="#" className='accordionItemAll'>Men's T-Shirt 3</a></li>
                    </ul>
                </div>
                <button className='accordionAll'>
                    <img className='accordionMenuIconAll' src="https://cdn-icons-png.flaticon.com/128/739/739249.png" alt="" /> &nbsp; Men's Clothing
                </button>
                <div className='panelAll'>
                    <ul>
                        <li><a href="#" className='accordionItemAll'>Men's T-Shirt 1</a></li>
                        <li><a href="#" className='accordionItemAll'>Men's T-Shirt 2</a></li>
                        <li><a href="#" className='accordionItemAll'>Men's T-Shirt 3</a></li>
                    </ul>
                </div>
                <button className='accordionAll'>
                    <img className='accordionMenuIconAll' src="https://cdn-icons-png.flaticon.com/128/739/739249.png" alt="" /> &nbsp; Men's Clothing
                </button>
                <div className='panelAll'>
                    <ul>
                        <li><a href="#" className='accordionItemAll'>Men's T-Shirt 1</a></li>
                        <li><a href="#" className='accordionItemAll'>Men's T-Shirt 2</a></li>
                        <li><a href="#" className='accordionItemAll'>Men's T-Shirt 3</a></li>
                    </ul>
                </div>
                <button className='accordionAll'>
                    <img className='accordionMenuIconAll' src="https://cdn-icons-png.flaticon.com/128/739/739249.png" alt="" /> &nbsp; Men's Clothing
                </button>
                <div className='panelAll'>
                    <ul>
                        <li><a href="#" className='accordionItemAll'>Men's T-Shirt 1</a></li>
                        <li><a href="#" className='accordionItemAll'>Men's T-Shirt 2</a></li>
                        <li><a href="#" className='accordionItemAll'>Men's T-Shirt 3</a></li>
                    </ul>
                </div>
                <button className='accordionAll'>
                    <img className='accordionMenuIconAll' src="https://cdn-icons-png.flaticon.com/128/739/739249.png" alt="" /> &nbsp; Men's Clothing
                </button>
                <div className='panelAll'>
                    <ul>
                        <li><a href="#" className='accordionItemAll'>Men's T-Shirt 1</a></li>
                        <li><a href="#" className='accordionItemAll'>Men's T-Shirt 2</a></li>
                        <li><a href="#" className='accordionItemAll'>Men's T-Shirt 3</a></li>
                    </ul>
                </div>
                <button className='accordionAll'>
                    <img className='accordionMenuIconAll' src="https://cdn-icons-png.flaticon.com/128/739/739249.png" alt="" /> &nbsp; Men's Clothing
                </button>
                <div className='panelAll'>
                    <ul>
                        <li><a href="#" className='accordionItemAll'>Men's T-Shirt 1</a></li>
                        <li><a href="#" className='accordionItemAll'>Men's T-Shirt 2</a></li>
                        <li><a href="#" className='accordionItemAll'>Men's T-Shirt 3</a></li>
                    </ul>
                </div>
                <button className='accordionAll'>
                    <img className='accordionMenuIconAll' src="https://cdn-icons-png.flaticon.com/128/739/739249.png" alt="" /> &nbsp; Men's Clothing
                </button>
                <div className='panelAll'>
                    <ul>
                        <li><a href="#" className='accordionItemAll'>Men's T-Shirt 1</a></li>
                        <li><a href="#" className='accordionItemAll'>Men's T-Shirt 2</a></li>
                        <li><a href="#" className='accordionItemAll'>Men's T-Shirt 3</a></li>
                    </ul>
                </div>

          </div>
        </div>
      </>
    )
  }
}

export default MegaMenuAll
