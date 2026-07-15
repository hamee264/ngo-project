<template>
  <section id="executives" class="executives-section">

    <div class="container">

      <div class="section-header">

        <span class="section-tag">
          OUR LEADERSHIP
        </span>

        <h2>Meet Our Executives</h2>

        <p>
          Dedicated leaders committed to serving the community with
          integrity, vision and excellence.
        </p>

      </div>

      <div class="executives-grid">

        <article class="executive-card" v-for="(member, index) in executives" :key="index">

          <div class="image-wrapper">

            <img :src="getImage(member.image)" :alt="member.name" class="executive-image">

          </div>

          <div class="card-content">

            <span class="role">

              <i class="fas fa-user-tie"></i>

              {{ member.title }}

            </span>

            <h3>{{ member.name }}</h3>

          </div>

        </article>

      </div>

    </div>

  </section>
</template>
<script setup>

const executives = [

  {
    image: "chairman.jpg",
    title: "Chairman",
    name: "Ogunjobi Ganiu Adio"
  },

  {
    image: "sec3.jpg",
    title: "Secretary",
    name: "Mrs Oladipupo Temitope"
  },

  {
    image: "trustee20.jpg",
    title: "Trustee",
    name: "Alhaji Luqman Adewunmi"
  },

  {
    image: "trustee5.jpg",
    title: "Trustee",
    name: "Comrade Abdulhammed Akinyemi Akinsoji"
  },

  {
    image: "trustee6.jpg",
    title: "Trustee",
    name: "Prince Adesegun Stephen"
  }

]

const getImage = (image) => {

  return new URL(`../assets/${image}`, import.meta.url).href

}

</script>
<style scoped>
.executives-section {

  padding: 120px 0;

  background: #ffffff;

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

  margin-bottom: 18px;

  color: #111827;

}

.section-header p {

  color: #6b7280;

  line-height: 1.8;

}

.executives-grid {

  display: grid;

  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));

  gap: 32px;

}

.executive-card {

  background: #fff;

  border: 1px solid #e5e7eb;

  border-radius: 20px;

  overflow: hidden;

  transition: .35s;

}

.executive-card:hover {

  transform: translateY(-8px);

  box-shadow: 0 20px 45px rgba(0, 0, 0, .08);

}

.image-wrapper {

  overflow: hidden;

}

.executive-image {

  width: 100%;

  height: 340px;

  object-fit: cover;

  transition: .45s;

  display: block;

}

.executive-card:hover .executive-image {

  transform: scale(1.05);

}

.card-content {

  padding: 28px;

  text-align: center;

}

.role {

  display: inline-flex;

  align-items: center;

  gap: 8px;

  padding: 8px 16px;

  background: #edf7f0;

  color: #166534;

  border-radius: 999px;

  font-size: .85rem;

  font-weight: 600;

  margin-bottom: 18px;

}

.role i {

  font-size: .9rem;

}

.card-content h3 {

  font-size: 1.35rem;

  color: #111827;

  font-weight: 700;

  line-height: 1.5;

}

@media(max-width:900px) {

  .executives-section {

    padding: 90px 0;

  }

  .executives-grid {

    grid-template-columns: repeat(2, 1fr);

    gap: 24px;

  }

  .executive-image {

    height: 300px;

  }

}

@media(max-width:600px) {

  .container {

    width: 94%;

  }

  .executives-grid {

    grid-template-columns: 1fr;

  }

  .card-content {

    padding: 22px;

  }

  .executive-image {

    height: 340px;

  }

  .section-header {

    margin-bottom: 45px;

  }

}
</style>