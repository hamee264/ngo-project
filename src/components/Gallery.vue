<template>
  <div class="container">
    <p class="title">Gallery</p>
    <div class="imgCon">
      <img src="/src/assets/IMG-20250416-WA0097.jpg" alt="">
      <img src="/src/assets/IMG-20250416-WA0099.jpg" alt="">
      <img src="/src/assets/IMG-20250416-WA0100.jpg" alt="">
      <img src="/src/assets/IMG-20250416-WA0101.jpg" alt="">
      <img src="/src/assets/IMG-20250416-WA0102.jpg" alt="">
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}

.title {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
}

.imgCon {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;
}

.imgCon img {
  width: 100%;
  height: auto;
  border-radius: 10px;
  object-fit: cover;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.imgCon img:hover {
  transform: scale(1.05);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
}
</style>
