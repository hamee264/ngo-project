<template>
  <div class="supports-container">
    <h1 class="supports-title">Resources</h1>
    <div class="supports-grid">
      <div class="supports-card" v-for="item in supports" :key="item.id">
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
      supports: [
  {
    id: 1,
    heading: "Blog",
    body:
      "Discover inspiring stories, expert insights, and community highlights. Stay connected with our latest updates and impact-driven work.",
  },
  {
    id: 2,
    heading: "Report",
    body:
      "Explore our annual reports and project outcomes. See how transparency and accountability shape our mission and achievements.",
  },
  {
    id: 3,
    heading: "FAQS",
    body:
      "Got questions? Find answers about our mission, operations, and how you can get involved in making a difference.",
  },
]

    };
  },
};
</script>

<style scoped>
.supports-container {
  padding: 60px 20px;
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
}

.supports-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #4f46e5;
  margin-bottom: 40px;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.supports-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 32px;
}

.supports-card {
  background: #ffffff;
  border-radius: 10px;
  padding: 24px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  text-align: left;
  color: #333;
}

.supports-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
}

.supports-card h3 {
  font-size: 1.6rem;
  color: #4f46e5;
  margin-bottom: 12px;
  font-weight: 600;
}

.supports-card p {
  font-size: 1.05rem;
  color: #333;
  line-height: 1.7;
}

/* Responsive Typography */
@media (max-width: 768px) {
  .supports-title {
    font-size: 2rem;
  }

  .supports-card h3 {
    font-size: 1.4rem;
  }

  .supports-card p {
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .supports-title {
    font-size: 1.8rem;
  }

  .supports-card h3 {
    font-size: 1.2rem;
  }

  .supports-card p {
    font-size: 0.95rem;
  }
}
</style>
