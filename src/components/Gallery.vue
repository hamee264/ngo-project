<template>
  <div class="container">
    <p class="title">Gallery</p>

    <div class="gallery-wrapper">
      <Swiper :modules="[Navigation, Pagination, Autoplay]" :slides-per-view="3" :space-between="25" :loop="true"
        :navigation="true" :pagination="{ clickable: true }" :autoplay="{
          delay: 2500,
          disableOnInteraction: false,
        }" :breakpoints="{
          0: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 25,
          },
        }" class="gallerySwiper">
        <SwiperSlide v-for="(image, index) in images" :key="index">
          <div class="gallery-card">
            <img :src="image" :alt="'Gallery ' + (index + 1)" class="gallery-image" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
    <section class="video-section">

      <div class="video-header">

        <span class="video-tag">
          Featured Video
        </span>

        <h2>Watch Our Journey</h2>

        <p>
          Take a glimpse into our outreach programs, community projects,
          educational support, and the lives we've impacted over the years.
        </p>

      </div>

      <div class="video-card">

        <video controls preload="metadata" poster="/src/assets/gal1.jpg" src="/src/assets/vid.mp4">
        </video>
        <video controls src="/src/assets/WhatsApp Video 2026-07-14 at 13.35.08.mp4"></video>
        <video controls src="/src/assets/WhatsApp Video 2026-07-14 at 13.35.10.mp4"></video>
        <video src="/src/assets/WhatsApp Video 2026-07-14 at 13.37.07.mp4" controls></video>

      </div>

    </section>


  </div>
</template>
<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const images = Object.values(
  import.meta.glob("../assets/*.{jpg,jpeg,png,JPG,JPEG,PNG}", {
    eager: true,
    import: "default",
  })
);
</script>
<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}

.title {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 2rem;
}

.gallerySwiper {
  width: 100%;
  border-radius: 15px;
  overflow: hidden;
}

.gallery-image {
  width: 100%;
  height: 650px;
  object-fit: cover;
  display: block;
}

.video-section {
  margin-top: 90px;
}

.video-header {
  max-width: 700px;
  margin: 0 auto 45px;
  text-align: center;
}

.video-tag {
  display: inline-block;
  padding: 8px 18px;
  background: #edf7f0;
  color: #166534;
  border-radius: 999px;
  font-size: .85rem;
  font-weight: 700;
  letter-spacing: 1px;
  margin-bottom: 18px;
}

.video-header h2 {
  font-size: clamp(2rem, 4vw, 2.8rem);
  color: #111827;
  margin-bottom: 15px;
}

.video-header p {
  color: #6b7280;
  line-height: 1.8;
}

.video-card {
  position: relative;
  overflow: hidden;
  border-radius: 24px;
  background: #fff;
  padding: 15px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, .08);
}

.video-card::before {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg,
      rgba(22, 101, 52, .08),
      transparent 45%);
  pointer-events: none;
}

.video-card video {
  display: block;
  width: 100%;
  max-height: 650px;
  border-radius: 18px;
  object-fit: cover;
}

.video-card:hover {
  transform: translateY(-6px);
  transition: .35s;
  box-shadow: 0 30px 70px rgba(0, 0, 0, .12);
}

@media(max-width:768px) {

  .video-section {
    margin-top: 70px;
  }

  .video-card {
    padding: 10px;
    border-radius: 18px;
  }

  .video-card video {
    border-radius: 14px;
  }

}

@media (max-width: 768px) {
  .gallery-image {
    height: 350px;
  }
}
</style>
