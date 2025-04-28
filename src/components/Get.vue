<template>
  <div class="get-container">
    <h1 class="get-title">Get Involved</h1>
    <div class="get-grid">
      <div class="get-card" v-for="item in get" :key="item.id">
        <h3>{{ item.heading }}</h3>
        <p>{{ item.body }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
 
  data() {
    return {
      get: [
        {
          id: 1,
          heading: "Donate",
          body:
            "Your financial support enables us to run educational programs, provide healthcare assistance, and reach more underserved communities. Every contribution counts!",
        },
        {
          id: 2,
          heading: "Volunteer",
          body:
            "Join our team of passionate volunteers and make a direct impact. Whether you have a few hours or several days, your time and skills can change lives.",
        },
        {
          id: 3,
          heading: "Partner with Us",
          body:
            "Collaborate with us as a corporate, nonprofit, or government partner to scale our reach and drive meaningful social impact together.",
        },
      ],
    };
  },
};
</script>

<style scoped>
.get-container {
  padding: 60px 20px;
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
}

.get-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #4f46e5;
  margin-bottom: 40px;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.get-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 32px;
}

.get-card {
  background: #ffffff;
  border-radius: 10px;
  padding: 24px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  text-align: left;
  color: #333;
}

.get-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
}

.get-card h3 {
  font-size: 1.6rem;
  color: #4f46e5;
  margin-bottom: 12px;
  font-weight: 600;
}

.get-card p {
  font-size: 1.05rem;
  color: #333;
  line-height: 1.7;
}

/* Responsive Typography */
@media (max-width: 768px) {
  .get-title {
    font-size: 2rem;
  }

  .get-card h3 {
    font-size: 1.4rem;
  }

  .get-card p {
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .get-title {
    font-size: 1.8rem;
  }

  .get-card h3 {
    font-size: 1.2rem;
  }

  .get-card p {
    font-size: 0.95rem;
  }
}
</style>