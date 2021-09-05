
export default function loadTransition()
{
    let observer = new IntersectionObserver(function (observables) {
        observables.forEach(function (observable) {
           
          // L'élément devient visible
          if (observable.intersectionRatio > 0.5) {
            observable.target.style.cssText = `transition-delay: 0.${observable.target.dataset.delay}s;` 
            observable.target.classList.add('in')
            console.log(observable.target)
            observer.unobserve(observable.target)
          }
         
        })
      }, {
        root: null,
        rootMargin:'0px',
        threshold: 0.5
      });
      
      // On observe nos éléments
      let items = document.querySelectorAll(".fade")
      items.forEach(function (item) {
        observer.observe(item)
      })
}