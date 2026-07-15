<template>
  <section id="get" class="involve-section">

    <div class="container">

      <div class="section-header">

        <span class="section-tag">
          GET INVOLVED
        </span>

        <h2>
          Be Part of the Change
        </h2>

        <p>
          Whether you choose to donate, volunteer or partner with us,
          your support helps us reach more communities and transform lives.
        </p>

      </div>

      <div class="involve-grid">

        <article class="involve-card" v-for="item in get" :key="item.id">

          <img :src="item.image" :alt="item.heading" class="card-image">

          <div class="card-content">

            <h3>{{ item.heading }}</h3>

            <p>{{ item.body }}</p>

            <!-- <button class="action-btn">
              {{ item.button }}
            </button> -->

          </div>

        </article>

      </div>

    </div>

  </section>
</template>

<script setup>

import donate from "/src/assets/IMG-20251015-WA0119.jpg"
import volunteer from "/src/assets/IMG-20251015-WA0120.jpg"
import partner from "/src/assets/IMG-20251015-WA0121.jpg"

const get = [

  {
    id: 1,
    image: donate,
    heading: "Donate",
    body: "Every contribution helps provide education, healthcare and humanitarian support to people who need it most.",
    button: "Donate Now"
  },

  {
    id: 2,
    image: volunteer,
    heading: "Volunteer",
    body: "Share your time and skills by joining our outreach programmes and community development initiatives.",
    button: "Become a Volunteer"
  },

  {
    id: 3,
    image: partner,
    heading: "Partner With Us",
    body: "Collaborate with us as an organisation, institution or business to create lasting impact together.",
    button: "Contact Us"
  }

]

</script>

<style scoped>
.involve-section {

  padding: 120px 0;

  background: #f8faf9;

}

.container {

  width: min(92%, 1200px);

  margin: auto;

}

.section-header {

  text-align: center;

  max-width: 700px;

  margin: 0 auto 70px;

}

.section-tag {

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

.section-header h2 {

  font-size: clamp(2rem, 4vw, 3rem);

  color: #111827;

  margin-bottom: 18px;

}

.section-header p {

  color: #6b7280;

  line-height: 1.8;

}

.involve-grid {

  display: grid;

  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));

  gap: 32px;

}

.involve-card {

  background: #fff;

  border-radius: 20px;

  overflow: hidden;

  border: 1px solid #e5e7eb;

  transition: .35s;

}

.involve-card:hover {

  transform: translateY(-6px);

  box-shadow: 0 20px 45px rgba(0, 0, 0, .06);

}

.card-image {

  width: 100%;

  height: 220px;

  object-fit: cover;

}

.card-content {

  padding: 30px;

}

.card-content h3 {

  font-size: 1.4rem;

  margin-bottom: 16px;

  color: #111827;

}

.card-content p {

  line-height: 1.8;

  color: #6b7280;

  margin-bottom: 28px;

}

.action-btn {

  padding: 14px 24px;

  border: none;

  background: #166534;

  color: #fff;

  border-radius: 10px;

  font-weight: 600;

  cursor: pointer;

  transition: .3s;

}

.action-btn:hover {

  background: #14532d;

}

@media(max-width:768px) {

  .involve-grid {

    grid-template-columns: 1fr;

  }

  .card-content {

    padding: 24px;

  }

}
</style>