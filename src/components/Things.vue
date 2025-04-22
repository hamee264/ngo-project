<template>
    <div class="things-container">
      <h1 class="thing-title">What We Do</h1>
      <div class="thing-grid">
        <div class="thing-card" v-for="thing in things" :key="thing.id">
          <h3>{{ thing.heading }}</h3>
          <p>{{ thing.body }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        things: [
          {
            id: 1,
            heading: "Programs & Services",
            body:
              "We run various programs including educational sponsorships, healthcare access initiatives, youth empowerment projects, and vocational training to uplift underserved communities.",
          },
          {
            id: 2,
            heading: "Impact & Outcomes",
            body:
              "Over the years, we've impacted over 10,000 lives through scholarship programs, built 5 healthcare centers, and partnered with local leaders to enhance economic development and self-sufficiency.",
          },
          {
            id: 3,
            heading: "Areas of Focus",
            body:
              "Our key focus areas include education, health and wellness, women and youth empowerment, rural development, and advocacy for social justice and equal opportunities.",
          },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .things-container {
    padding: 60px 20px;
    max-width: 1200px;
    margin: 0 auto;
    text-align: center;
  }
  
  .thing-title {
    font-size: 2.5rem;
    color: #1e7c1e;
    margin-bottom: 40px;
    font-weight: bold;
    text-transform: uppercase;
  }
  
  .thing-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 32px;
  }
  
  .thing-card {
    background: #ffffff;
    border-radius: 10px;
    padding: 24px;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    text-align: left;
    color: #333;
  }
  
  .thing-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
  }
  
  .thing-card h3 {
    font-size: 1.6rem;
    color: #1e7c1e;
    margin-bottom: 12px;
    font-weight: 600;
  }
  
  .thing-card p {
    font-size: 1.05rem;
    color: #333;
    line-height: 1.7;
  }
  
  /* Responsive Typography */
  @media (max-width: 768px) {
    .thing-title {
      font-size: 2rem;
    }
  
    .thing-card h3 {
      font-size: 1.4rem;
    }
  
    .thing-card p {
      font-size: 1rem;
    }
  }
  
  @media (max-width: 480px) {
    .thing-title {
      font-size: 1.8rem;
    }
  
    .thing-card h3 {
      font-size: 1.2rem;
    }
  
    .thing-card p {
      font-size: 0.95rem;
    }
  }
  </style>
  