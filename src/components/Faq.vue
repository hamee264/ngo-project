<template>
    <div class="faq-container">
      <h2 class="faq-title">Frequently Asked Questions</h2>
      <div v-for="(item, index) in faqs" :key="index" class="faq-item">
        <div class="faq-question" @click="toggleFAQ(index)">
          <span>{{ item.question }}</span>
          <span class="faq-icon">{{ activeIndex === index ? '-' : '+' }}</span>
        </div>
        <div v-if="activeIndex === index" class="faq-answer">
          {{ item.answer }}
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        activeIndex: null,
        faqs: [
          {
            question: "What is your return policy?",
            answer: "You can return any item within 30 days for a full refund.",
          },
          {
            question: "How long does shipping take?",
            answer: "Shipping typically takes 3–5 business days.",
          },
          {
            question: "Do you offer international shipping?",
            answer: "Yes, we ship to over 50 countries worldwide.",
          },
        ],
      };
    },
    methods: {
      toggleFAQ(index) {
        this.activeIndex = this.activeIndex === index ? null : index;
      },
    },
  };
  </script>
  
  <style scoped>
  .faq-container {
    max-width: 700px;
    margin: 0 auto;
    padding: 2rem;
  }
  
  .faq-title {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 1.5rem;
    text-align: center;
    color: #4f46e5;
  }
  
  .faq-item {
    border-bottom: 1px solid #ddd;
    padding: 1rem 0;
  }
  
  .faq-question {
    display: flex;
    justify-content: space-between;
    cursor: pointer;
    font-weight: 600;
    color: #444;
    transition: color 0.3s ease;
  }
  
  .faq-question:hover {
    color: #4f46e5;
  }
  
  .faq-icon {
    font-size: 1.2rem;
  }
  
  .faq-answer {
    margin-top: 0.8rem;
    color: #666;
    line-height: 1.6;
  }
  </style>
  