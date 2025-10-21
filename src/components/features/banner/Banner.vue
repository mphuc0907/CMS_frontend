<template>
  <section>
    <div>
      <swiper
        :modules="[Navigation, Pagination, Autoplay]"
        :slides-per-view="1"
        :space-between="50"
        :loop="true"
        :navigation="true"
        :pagination="{ clickable: true }"
        :autoplay="{
          delay: 3000,
          disableOnInteraction: false
        }"
        class="relative"
      >
        <swiper-slide>
          <div class="item-slide w-full max-h-[600px]">
            <img class="w-full h-full object-cover"
              src="https://topdev.vn/blog/wp-content/uploads/2025/10/d4d01671f14a9d388645abdfdf8abd1d.jpg">
          </div>
        </swiper-slide>

        <swiper-slide>
          <div class="item-slide w-full max-h-[600px]">
            <img class="w-full h-full object-cover"
              src="https://topdev.vn/blog/wp-content/uploads/2025/10/bbb835d2c8d4038234634f34b27b9cf9.jpg">
          </div>
        </swiper-slide>

        <swiper-slide>
          <div class="item-slide w-full max-h-[600px]">
            <img class="w-full h-full object-cover"
              src="https://topdev.vn/blog/wp-content/uploads/2025/10/fe8afdb163d1a1313dfd5978caefe951-1.jpg">
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export default {
  components: { Swiper, SwiperSlide },
  setup() {
    const onSwiper = (swiper) => console.log(swiper)
    const onSlideChange = () => console.log('slide change')
    return { onSwiper, onSlideChange, Navigation, Pagination, Autoplay }
  }
}
</script>

<style>
.swiper-button-next,
.swiper-button-prev {
  color: #222;
}
.swiper-pagination-bullet {
  background-color: #999;
  opacity: 0.5;
}
.swiper-pagination-bullet-active {
  background-color: #111;
  opacity: 1;
}
</style>
