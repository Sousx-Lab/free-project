import Flickity from 'flickity';

export default function carousel() {

  const option = {
      accessibility: true,
      adaptiveHeight: true,
      autoPlay: false,
      cellAlign: 'left',
      cellSelector: undefined,
      contain: false,
      draggable: false,
      dragThreshold: 1,
      freeScroll: false,
      friction: 0.2,
      // smaller number = easier to flick farther

      groupCells: 1,
      // group cells together in slides

      initialIndex: 0,
      // zero-based index of the initial selected cell

      lazyLoad: true,
      // enable lazy-loading images
      // set img data-flickity-lazyload="src.jpg"
      // set to number to load images adjacent cells

      percentPosition: false,
      // sets positioning in percent values, rather than pixels
      // Enable if items have percent widths
      // Disable if items have pixel widths, like images

      prevNextButtons: true,
      // creates and enables buttons to click to previous & next cells

      pageDots: false,
      // create and enable page dots

      resize: true,
      // listens to window resize events to adjust size & positions

      rightToLeft: false,
      // enables right-to-left layout

      setGallerySize: true,
      // sets the height of gallery
      // disable if gallery already has height set with CSS

      watchCSS: true,
      // watches the content of :after of the element
      // activates if #element:after { content: 'flickity' }

      wrapAround: false
  }
  if (matchMedia('screen and (min-width: 768px)').matches) {
    option.cellAlign = 'left'
    option.draggable = true
  }
  let elem = document.querySelector('.flickity')
  if (elem) {
    return new Flickity(elem, option);
  }
  return null;
}