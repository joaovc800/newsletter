import { carouselVideos } from './videos.js'
import { routes } from './routes.js'

const divCarouselVideos = document.getElementById('carousel-videos')

const requestVideos = await fetch(routes.videos)
const jsonVideos = await requestVideos.json()

console.log(jsonVideos);

divCarouselVideos.innerHTML = carouselVideos(jsonVideos)

setTimeout(() => {
    $('.owl-carousel').owlCarousel({
        center:true,
        loop: true,
        arrows: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        mobileFirst: true,
        dots: false,
        margin: 10
    })
}, 300)

/* center: true,
        items:2,
        loop:true,
        margin:10,
        responsive:{
            200:{
                items:4
            }
        }
 */