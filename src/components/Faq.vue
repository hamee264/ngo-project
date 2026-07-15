<template>
  <section id="faq" class="faq-section">

    <div class="container">

      <div class="section-header">

        <span class="section-tag">
          FAQS
        </span>

        <h2>
          Frequently Asked Questions
        </h2>

        <p>
          Find answers to some of the most common questions about our
          foundation, programmes and how you can support our mission.
        </p>

      </div>

      <div class="faq-list">

        <div class="faq-card" v-for="(item, index) in faqs" :key="index">

          <button class="faq-question" @click="toggleFAQ(index)">

            <span>{{ item.question }}</span>

            <span class="faq-icon" :class="{ active: activeIndex === index }">
              +
            </span>

          </button>

          <transition name="faq">

            <div v-if="activeIndex === index" class="faq-answer">

              {{ item.answer }}

            </div>

          </transition>

        </div>

      </div>

    </div>

  </section>
</template>

<script setup>

import { ref } from 'vue'

const activeIndex = ref(null)

const toggleFAQ = (index) => {
  activeIndex.value =
    activeIndex.value === index ? null : index
}

const faqs = [

  {
    question: "How can I make a donation?",
    answer: "You can support our programmes through financial donations, educational materials, food items or other resources needed by the foundation."
  },

  {
    question: "Can I volunteer with the foundation?",
    answer: "Yes. We welcome passionate individuals who would like to volunteer during outreach programmes, community events and other activities."
  },

  {
    question: "Who benefits from your programmes?",
    answer: "Our programmes primarily support children, vulnerable families, students, widows, youths and underserved communities."
  },

  {
    question: "Can my organisation partner with the foundation?",
    answer: "Absolutely. We collaborate with businesses, NGOs, educational institutions and government agencies to expand our impact."
  },

  {
    question: "How do I stay updated?",
    answer: "Follow our social media pages or visit our website regularly to stay informed about upcoming events, projects and community initiatives."
  }

]

</script>

<style scoped>
.faq-section {

  padding: 120px 0;

  background: #ffffff;

}

.container {

  width: min(92%, 900px);

  margin: auto;

}

.section-header {

  text-align: center;

  max-width: 700px;

  margin: 0 auto 60px;

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

.faq-list {

  display: flex;

  flex-direction: column;

  gap: 18px;

}

.faq-card {

  background: #fff;

  border: 1px solid #e5e7eb;

  border-radius: 16px;

  overflow: hidden;

  transition: .3s;

}

.faq-card:hover {

  border-color: #166534;

}

.faq-question {

  width: 100%;

  display: flex;

  justify-content: space-between;

  align-items: center;

  padding: 24px;

  background: none;

  border: none;

  cursor: pointer;

  font-size: 1.05rem;

  font-weight: 600;

  text-align: left;

  color: #111827;

}

.faq-icon {

  width: 34px;

  height: 34px;

  display: flex;

  align-items: center;

  justify-content: center;

  background: #edf7f0;

  color: #166534;

  border-radius: 50%;

  font-size: 1.3rem;

  transition: .3s;

}

.faq-icon.active {

  transform: rotate(45deg);

}

.faq-answer {

  padding: 0 24px 24px;

  line-height: 1.8;

  color: #6b7280;

}

.faq-enter-active,
.faq-leave-active {

  transition: all .3s ease;

}

.faq-enter-from,
.faq-leave-to {

  opacity: 0;

  transform: translateY(-8px);

}

@media(max-width:768px) {

  .faq-section {

    padding: 90px 0;

  }

  .faq-question {

    padding: 20px;

    font-size: 1rem;

  }

  .faq-answer {

    padding: 0 20px 20px;

  }

}
</style>