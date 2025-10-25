// core version + navigation, pagination modules:
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'vertical',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

function Home_carousal() {
    return (
        // <!-- Slider main container -->
<div className="swiper">
  {/* <!-- Additional required wrapper --> */}
  <div className="swiper-wrapper">
    {/* <!-- Slides --> */}
    <div className="swiper-slide">Slide 1</div>
    <div className="swiper-slide">Slide 2</div>
    <div className="swiper-slide">Slide 3</div>
    ...
  </div>
  {/* <!-- If we need pagination --> */}
  <div className="swiper-pagination"></div>

  {/* <!-- If we need navigation buttons --> */}
  <div className="swiper-button-prev"></div>
  <div className="swiper-button-next"></div>

  {/* <!-- If we need scrollbar --> */}
  <div className="swiper-scrollbar"></div>
</div>
    )
}

export default Home_carousal