<template>
    <div class="values-container">
      <h1 class="section-title">Our Values</h1>
      <div class="values-grid">
        <div class="value-card" v-for="value in values" :key="value.id">
          <h3>{{ value.heading }}</h3>
          <p>{{ value.body }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        values: [
          {
            id: 1,
            heading: "Solidarity",
            body:
              "We stand together, united in progress and development, empowering individuals and groups towards common goals.",
          },
          {
            id: 2,
            heading: "Integrity",
            body:
              "We act with honesty and uphold strong moral principles in everything we do.",
          },
          {
            id: 3,
            heading: "Empowerment",
            body:
              "We equip communities with the tools and knowledge needed to create lasting change.",
          },
          {
            id: 4,
            heading: "Collaboration",
            body:
              "We believe in teamwork and value partnerships that amplify our impact.",
          },
          {
            id: 5,
            heading: "Inclusiveness",
            body:
              "We respect diversity and ensure everyone has a voice in shaping our shared future.",
          },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .values-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 60px 20px;
    max-width: 1200px;
    margin: 70px auto;
    text-align: center;
  }
  
  .section-title {
    font-size: 2.2rem;
    font-weight: 700;
    color: #1e7c1e;
    margin-bottom: 40px;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
  
  .values-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 32px;
    width: 100%;
    justify-content: center;
  }
  
  .value-card {
    background: #ffffff;
    border-radius: 10px;
    padding: 24px;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    text-align: left;
    color: #333;
  }
  
  .value-card h3 {
    font-size: 1.6rem;
    margin-bottom: 12px;
    color: #1e7c1e;
    font-weight: 600;
  }
  
  .value-card p {
    font-size: 1.1rem;
    color: #555;
    line-height: 1.8;
    margin-bottom: 24px;
  }
  
  .value-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.12);
  }
  
  .value-card:focus-within {
    outline: 2px solid #1e7c1e;
  }
  
  /* Accessibility: Focus styles for keyboard navigation */
  .value-card:focus {
    outline: 2px solid #1e7c1e;
  }
  
  @media (max-width: 768px) {
    .section-title {
      font-size: 1.8rem;
    }
  
    .value-card {
      padding: 20px;
    }
  
    .value-card h3 {
      font-size: 1.4rem;
    }
  
    .value-card p {
      font-size: 1rem;
    }
  }
  </style>
  