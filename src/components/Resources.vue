<template>
  <section id="resources" class="resources-section">

    <div class="container">

      <div class="section-header">

        <span class="section-tag">
          RESOURCES
        </span>

        <h2>
          Explore Our Resources
        </h2>

        <p>
          Stay informed with our latest news, reports and answers to common
          questions about our work and community impact.
        </p>

      </div>

      <div class="resources-grid">

        <article class="resource-card" v-for="item in supports" :key="item.id">

          <img :src="item.image" :alt="item.heading" class="resource-image">

          <div class="resource-content">

            <h3>{{ item.heading }}</h3>

            <p>{{ item.body }}</p>

            <!-- <button class="resource-btn">
              {{ item.button }}
            </button> -->

          </div>

        </article>

      </div>

    </div>

  </section>
</template>

<script setup>

import blog from "/src/assets/gal1.jpg"
import report from "/src/assets/IMG-20251015-WA0153.jpg"
import faq from "/src/assets/IMG-20251015-WA0161.jpg"

const supports = [

  {
    id: 1,
    image: blog,
    heading: "Our Blog",
    body: "Read inspiring stories, community updates, project highlights and the latest news from our foundation.",
    button: "Read Articles"
  },

  {
    id: 2,
    image: report,
    heading: "Annual Reports",
    body: "Access our annual reports, financial summaries and project impact reports that demonstrate transparency and accountability.",
    button: "View Reports"
  },

  {
    id: 3,
    image: faq,
    heading: "Frequently Asked Questions",
    body: "Find answers to common questions about donations, volunteering, partnerships and our programmes.",
    button: "Read FAQs"
  }

]

</script>

<style scoped>
.resources-section {

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

  color: #111827;

  margin-bottom: 18px;

}

.section-header p {

  font-size: 1.05rem;

  line-height: 1.8;

  color: #6b7280;

}

.resources-grid {

  display: grid;

  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));

  gap: 30px;

}

.resource-card {

  background: #fff;

  border: 1px solid #e5e7eb;

  border-radius: 20px;

  overflow: hidden;

  transition: .35s;

  display: flex;

  flex-direction: column;

}

.resource-card:hover {

  transform: translateY(-6px);

  border-color: #166534;

  box-shadow: 0 18px 40px rgba(0, 0, 0, .06);

}

.resource-image {

  width: 100%;

  height: 220px;

  object-fit: cover;

  transition: .4s;

}

.resource-card:hover .resource-image {

  transform: scale(1.05);

}

.resource-content {

  padding: 30px;

  display: flex;

  flex-direction: column;

  flex: 1;

}

.resource-content h3 {

  font-size: 1.4rem;

  margin-bottom: 16px;

  color: #111827;

}

.resource-content p {

  line-height: 1.8;

  color: #6b7280;

  margin-bottom: 24px;

}

.resource-btn {

  margin-top: auto;

  padding: 14px 22px;

  border: none;

  border-radius: 10px;

  background: #166534;

  color: #fff;

  font-weight: 600;

  cursor: pointer;

  transition: .3s;

}

.resource-btn:hover {

  background: #14532d;

}

@media(max-width:768px) {

  .resources-grid {

    grid-template-columns: 1fr;

  }

  .resource-content {

    padding: 24px;

  }

  .resource-image {

    height: 200px;

  }

}
</style>