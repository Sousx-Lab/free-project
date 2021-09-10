import '../scss/app.scss';
import  loadTransition  from './services/transition';
import * as Turbo from "@hotwired/turbo";
import carousel from './services/carousel';
import notify from './services/notify';
import disableSubmit from './services/contact';

Turbo.start();

['turbo:load', 'turbo:render'].forEach(e => {
    document.addEventListener(e, function(){
        carousel();
        notify();
        loadTransition();
        disableSubmit();
    })
})
