<template>
    <div class="about-container">
      <h1 class="about-title">About Us</h1>
      <div class="about-grid">
        <div class="about-card" v-for="aboutme in AboutUs" :key="aboutme.id">
          <h3>{{ aboutme.heading }}</h3>
          <p>{{ aboutme.body }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        AboutUs: [
          {
            id: 1,
            heading: "Our Mission",
            body:
              "To empower underserved communities through access to quality education, healthcare, and development opportunities, fostering sustainable progress and inclusivity.",
          },
          {
            id: 2,
            heading: "Our Vision",
            body:
              "A world where every individual has equal opportunity to thrive regardless of their background, empowered by knowledge, compassion, and collective effort.",
          },
          {
            id: 3,
            heading: "Our Goals",
            body:
              "We aim to implement impactful programs, strengthen community resilience, and collaborate with partners to create long-term solutions for social and economic challenges.",
          },
          {
            id: 4,
            heading: "Our Approach",
            body:
              "We adopt a people-first, grassroots approach—listening, learning, and working hand-in-hand with communities to co-create pathways to a better future.",
          },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .about-container {
    padding: 60px 20px;
    max-width: 1200px;
    margin: 0 auto;
    text-align: center;
  }
  
  .about-title {
    font-size: 2.5rem;
    font-weight: 700;
    color: #1e7c1e;
    margin-bottom: 40px;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
  
  .about-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 32px;
  }
  
  .about-card {
    background: #ffffff;
    border-radius: 10px;
    padding: 24px;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    text-align: left;
    color: #333;
  }
  
  .about-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
  }
  
  .about-card h3 {
    font-size: 1.6rem;
    color: #1e7c1e;
    margin-bottom: 12px;
    font-weight: 600;
  }
  
  .about-card p {
    font-size: 1.05rem;
    color: #333;
    line-height: 1.7;
  }
  
  /* Responsive Typography */
  @media (max-width: 768px) {
    .about-title {
      font-size: 2rem;
    }
  
    .about-card h3 {
      font-size: 1.4rem;
    }
  
    .about-card p {
      font-size: 1rem;
    }
  }
  
  @media (max-width: 480px) {
    .about-title {
      font-size: 1.8rem;
    }
  
    .about-card h3 {
      font-size: 1.2rem;
    }
  
    .about-card p {
      font-size: 0.95rem;
    }
  }
  </style>
  