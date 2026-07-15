<template>
  <section id="about" class="about-section">

    <div class="container">

      <div class="about-grid">

        <!-- Left -->

        <div class="about-content">

          <span class="section-tag">
            ABOUT US
          </span>

          <h2>
            Committed to Creating Lasting
            Change in Our Communities
          </h2>

          <p class="intro">
            Oga Progressive Foundation is a non-profit organisation
            dedicated to improving lives through education,
            healthcare, humanitarian assistance and community
            development. We believe every individual deserves the
            opportunity to succeed regardless of their background.
          </p>

          <div class="about-items">

            <div class="about-item" v-for="item in AboutUs" :key="item.id">
              <h3>{{ item.heading }}</h3>
              <p>{{ item.body }}</p>
            </div>

          </div>

        </div>

        <!-- Right -->

        <div class="about-image">

          <img src="/src/assets/IMG-20250416-WA0097.jpg" alt="About Oga Progressive Foundation" />

        </div>

      </div>

    </div>

  </section>
</template>

<script setup>

const AboutUs = [

  {
    id: 1,
    heading: "Our Mission",
    body: "To empower underserved communities through quality education, healthcare, humanitarian support and sustainable development initiatives."
  },

  {
    id: 2,
    heading: "Our Vision",
    body: "To build a society where every individual has equal access to opportunities that improve quality of life."
  },

  {
    id: 3,
    heading: "Our Goals",
    body: "To deliver impactful programmes, strengthen communities and create lasting social and economic transformation."
  }

]

</script>

<style scoped>
.about-section {

  padding: 120px 0;

  background: #fff;

}

.container {

  width: min(92%, 1200px);

  margin: auto;

}

.about-grid {

  display: grid;

  grid-template-columns: 1.1fr .9fr;

  gap: 70px;

  align-items: center;

}

.section-tag {

  display: inline-block;

  padding: 8px 16px;

  background: #edf7f0;

  color: #166534;

  border-radius: 999px;

  font-size: .85rem;

  font-weight: 700;

  letter-spacing: 1px;

  margin-bottom: 18px;

}

.about-content h2 {

  font-size: clamp(2rem, 4vw, 3rem);

  line-height: 1.2;

  color: #111827;

  margin-bottom: 24px;

}

.intro {

  font-size: 1.05rem;

  line-height: 1.9;

  color: #6b7280;

  margin-bottom: 45px;

}

.about-items {

  display: flex;

  flex-direction: column;

  gap: 28px;

}

.about-item {

  padding-bottom: 24px;

  border-bottom: 1px solid #ececec;

}

.about-item:last-child {

  border-bottom: none;

  padding-bottom: 0;

}

.about-item h3 {

  font-size: 1.2rem;

  margin-bottom: 10px;

  color: #111827;

}

.about-item p {

  line-height: 1.8;

  color: #6b7280;

}

.about-image {

  display: flex;

  justify-content: center;

}

.about-image img {

  width: 100%;

  max-width: 500px;

  height: 600px;

  object-fit: cover;

  border-radius: 24px;

  box-shadow: 0 25px 50px rgba(0, 0, 0, .08);

}

@media(max-width:900px) {

  .about-grid {

    grid-template-columns: 1fr;

  }

  .about-image {

    order: -1;

  }

  .about-image img {

    height: 350px;

  }

}
</style>