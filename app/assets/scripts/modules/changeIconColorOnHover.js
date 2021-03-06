import $ from 'jquery';

class changeIconColorOnHover {
  constructor(icons) {
     this.icons = icons;
     this.events();
  }
  events() {
    const that = this;
    this.icons.each(function() {
      $(this).hover(that.setBlackIcon.bind(this), that.setWhiteIcon.bind(this));
    });
  }
  setBlackIcon() {
    this.className = this.className.replace('white', 'black')
  }
  setWhiteIcon() {
    this.className = this.className.replace('black', 'white')
  }
}

export default changeIconColorOnHover;