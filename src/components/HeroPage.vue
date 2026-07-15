<template>
  <section id="home" class="hero">
    <div class="hero-container">

      <!-- Left Content -->
      <div class="hero-content">

        <span class="hero-badge">
          Building Hope • Creating Impact
        </span>

        <h1>
          Empowering Communities Through
          Sustainable Development
        </h1>

        <p>
          Oga Progressive Foundation partners with individuals,
          communities and organizations to improve education,
          healthcare and economic opportunities for those who
          need them most.
        </p>

        <div class="hero-buttons">
          <button class="primary-btn">
            Support Our Mission
          </button>

          <button class="secondary-btn">
            Learn More
          </button>
        </div>

        <div class="hero-stats">

          <div class="stat">
            <h3>5,000+</h3>
            <span>Lives Impacted</span>
          </div>

          <div class="stat">
            <h3>20+</h3>
            <span>Communities</span>
          </div>

          <div class="stat">
            <h3>12</h3>
            <span>Years of Service</span>
          </div>

        </div>

      </div>

      <!-- Right Image -->

      <div class="hero-image">

        <img src="/src/assets/IMG-20251015-WA0162.jpg" alt="Community Outreach">

      </div>

    </div>
  </section>
</template>

<script setup>

</script>

<style scoped>
.hero {

  min-height: 100vh;

  display: flex;

  align-items: center;

  padding: 130px 0 80px;

  background: #f8faf9;

}

.hero-container {

  width: min(92%, 1250px);

  margin: auto;

  display: grid;

  grid-template-columns: 1fr 1fr;

  gap: 70px;

  align-items: center;

}

.hero-content {

  max-width: 560px;

}

.hero-badge {

  display: inline-block;

  padding: 8px 16px;

  background: #edf7f0;

  color: #166534;

  border-radius: 999px;

  font-size: .9rem;

  font-weight: 600;

  margin-bottom: 25px;

}

.hero h1 {

  font-size: clamp(2.6rem, 5vw, 4.4rem);

  line-height: 1.1;

  color: #1f2937;

  margin-bottom: 25px;

  font-weight: 800;

  letter-spacing: -1px;

}

.hero p {

  color: #4b5563;

  line-height: 1.9;

  font-size: 1.08rem;

  margin-bottom: 40px;

}

.hero-buttons {

  display: flex;

  gap: 18px;

  margin-bottom: 55px;

}

.primary-btn {

  background: #166534;

  color: #fff;

  border: none;

  padding: 15px 28px;

  border-radius: 12px;

  cursor: pointer;

  font-size: 15px;

  font-weight: 700;

  transition: .3s;

}

.primary-btn:hover {

  background: #14532d;

  transform: translateY(-2px);

}

.secondary-btn {

  background: white;

  border: 1px solid #d1d5db;

  color: #1f2937;

  padding: 15px 28px;

  border-radius: 12px;

  cursor: pointer;

  font-size: 15px;

  font-weight: 700;

  transition: .3s;

}

.secondary-btn:hover {

  background: #f3f4f6;

}

.hero-stats {

  display: flex;

  gap: 45px;

}

.stat h3 {

  font-size: 2rem;

  color: #166534;

  margin-bottom: 8px;

}

.stat span {

  color: #6b7280;

  font-size: .95rem;

}

.hero-image {

  display: flex;

  justify-content: center;

}

.hero-image img {

  width: 100%;

  max-width: 520px;

  height: 620px;

  object-fit: cover;

  border-radius: 24px;

  box-shadow: 0 25px 60px rgba(0, 0, 0, .12);

}

@media(max-width:980px) {

  .hero-container {

    grid-template-columns: 1fr;

    gap: 60px;

    text-align: center;

  }

  .hero-content {

    margin: auto;

  }

  .hero-buttons {

    justify-content: center;

  }

  .hero-stats {

    justify-content: center;

    flex-wrap: wrap;

  }

  .hero-image {

    order: -1;

  }

  .hero-image img {

    height: 450px;

  }

}

@media(max-width:600px) {

  .hero {

    padding: 110px 0 70px;

  }

  .hero-buttons {

    flex-direction: column;

  }

  .primary-btn,
  .secondary-btn {

    width: 100%;

  }

  .hero-image img {

    height: 320px;

  }

}
</style>