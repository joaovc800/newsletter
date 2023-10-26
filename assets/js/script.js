import { carouselVideos, Highlights } from './videos.js'
import { routes } from './routes.js'

const divCarouselVideos = document.getElementById('carousel-videos')
const divHighlights = document.getElementById('highlights')

const requestVideos = await fetch(routes.videos)
const jsonVideos = await requestVideos.json()

divCarouselVideos.innerHTML = await carouselVideos(jsonVideos)

const requestHighlights = await fetch(routes.highlights)
const jsonHighlights = await requestHighlights.json()

divHighlights.innerHTML = await Highlights(jsonHighlights)



const owl = $('.owl-carousel').owlCarousel({
    center:true,
    loop: true,
    arrows: true,
    dots: true,
    lazyLoad: true,
    margin: 10,
    items:3,
    nav:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        700:{
            items:2,
            nav:true
        },
        1000:{
            items:3,
            nav:true,
        }
    }
})


owl.on('mousewheel', 'ytp-cued-thumbnail-overlay-image', function (e) {
    console.log(e);
/* if (e.deltaY>0) {
        owl.trigger('next.owl');
    } else {
        owl.trigger('prev.owl');
    }
    e.preventDefault(); */
});