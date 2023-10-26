import { carouselVideos } from './videos.js'
import { routes } from './routes.js'

const divCarouselVideos = document.getElementById('carousel-videos')

const requestVideos = await fetch(routes.videos)
const jsonVideos = await requestVideos.json()

console.log(jsonVideos);

divCarouselVideos.innerHTML = carouselVideos(jsonVideos)

$(document).ready(function(){
    setTimeout(() => {
        
    
        const owl = $('.owl-carousel').owlCarousel({
            center:true,
            loop: true,
            arrows: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplaySpeed: 1500,
            mobileFirst: true,
            dots: true,
            lazyLoad: true,
            margin: 10,
            items:3,
            nav:true,
        })

        console.log(owl.on);
        
        owl.on('mousemove', '.owl-stage', function (e) {
            console.log(e.deltaY);
            /* if (e.deltaY>0) {
                owl.trigger('next.owl');
            } else {
                owl.trigger('prev.owl');
            }
            e.preventDefault() */;
        });

    }, 500);

  });

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