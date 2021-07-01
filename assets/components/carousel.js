import Flickity from 'flickity';

export function carousel(){
    let adaptatifGroupCells = 2;
    let adaptatifCellAlign = "left";
    
    if(window.innerWidth <= 414){
        adaptatifGroupCells = 1
        adaptatifCellAlign = 'center'
    }
    return new Flickity('.flickity', {

      accessibility: true,
      adaptiveHeight: true,
      autoPlay: false,
      cellAlign: adaptatifCellAlign,
      cellSelector: undefined, 
      contain: false,
      draggable: '>1',
      dragThreshold: 1,
      freeScroll: false,
      friction: 0.2,
      // smaller number = easier to flick farther
      
      groupCells: adaptatifGroupCells,
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
    
      watchCSS: false,
      // watches the content of :after of the element
      // activates if #element:after { content: 'flickity' }
    
      wrapAround: false
      // at end of cells, wraps-around to first for infinite scrolling
    
    });
} 