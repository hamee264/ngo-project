<template>
  <div class="executives-container">
    <h2 class="executives-title">Executives</h2>
    <p class="executives-subtitle">Members</p>

    <div class="executives-grid">
      <div v-for="(story, index) in stories" :key="index" class="executive-card">
        <img
          :src="getImage(story.image)"
          :alt="story.title || 'Executive member'"
          class="executive-image"
        />
        <h3 class="executive-title">{{ story.title }}</h3>
        <p class="executive-name">{{ story.name }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      stories: [
        {
          image: "chairman.jpg",
          title: "Chairman",
          name: "Ogunjobi Ganiu Adio",
        },
        {
          image: "sec2.jpg",
          title: "Secretary",
          name: "Mrs Oladipupo Temitope",
        },
        {
          image: "trustee1.jpg",
          title: "Trustee",
          name: "Alhaji Luqman Adewunmi",
        },
        {
          image: "trustee2.jpg",
          title: "Trustee",
          name: "Alhaji Luqman Adewunmi",
        },
        {
          image: "trustee5.jpg",
          title: "Trustee",
          name: "Abdulhalmed Akinyemi Akinsoji",
        },
        {
          image: "trustee6.jpg",
          title: "Trustee",
          name: "Prince Olusegun Stephen",
        },
      ],
    };
  },
  methods: {
    getImage(image) {
      return new URL(`../assets/${image}`, import.meta.url).href;
    },
  },
};
</script>

<style scoped>
.executives-container {
  padding: 3rem 1rem;
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
}

.executives-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 0.5rem;
}

.executives-subtitle {
  font-size: 1.1rem;
  color: #666;
  margin-bottom: 2rem;
}

.executives-grid {
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
}

.executive-card {
  background: #fff;
  padding: 1.5rem;
  border-radius: 16px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.05);
  text-align: left;
  transition: transform 0.3s ease;
}

.executive-card:hover {
  transform: translateY(-5px);
}

.executive-image {
  width: 100%;
  height: 300px; /* Adjust as needed */
  /* object-fit: cover; */
  object-position: top;
  border-radius: 12px;
  margin-bottom: 1rem;
}



.executive-title {
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #4f46e5;
  text-transform: capitalize;
}

.executive-name {
  font-size: 1rem;
  color: #444;
}

</style>
