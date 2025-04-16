<template>
    <section class="hero-section">
      <div class="hero-overlay">
        <h1>Welcome to Oga Progressive Foundation</h1>
        <p>Empowering communities through education, healthcare, and support</p>
        <button class="hero-btn">Learn More</button>
      </div>
    </section>
  </template>
  
  <script>
  export default {};
  </script>
  
  <style scoped>
  /* Hero Section */
  .hero-section {
    width: 100%;
    min-height: 100vh;
    background: url('/src/assets/heroimg2.jpg') center/cover no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 0 16px;
    position: static;
    color: #fff;
    margin: 20px 0;
  }
  
  /* Overlay */
  .hero-overlay {
    background-color: rgba(0, 0, 0, 0.55);
    padding: 3rem 2rem;
    border-radius: 1rem;
    width: 100%;
    max-width: 800px;
    box-sizing: border-box;
  }
  
  /* Headings & Text */
  .hero-overlay h1 {
    font-size: clamp(1.8rem, 5vw, 3rem);
    font-weight: 700;
    text-transform: uppercase;
    margin-bottom: 1rem;
    line-height: 1.3;
  }
  
  .hero-overlay p {
    font-size: clamp(1rem, 2.5vw, 1.25rem);
    margin-bottom: 2rem;
    line-height: 1.6;
  }
  
  /* Button */
  .hero-btn {
    padding: 0.85rem 2rem;
    background-color: #1e7c1e;
    border: none;
    border-radius: 0.5rem;
    color: white;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .hero-btn:hover {
    background-color: #155d15;
  }
  
  /* Extra Responsive Tweaks */
  @media (max-width: 360px) {
    .hero-btn {
      width: 100%;
      font-size: 0.95rem;
    }
  
    .hero-overlay {
      padding: 2rem 1rem;
    }
  }
  </style>
  