<template>
  <section id="values" class="values-section">

    <div class="container">

      <div class="section-header">

        <span class="section-tag">
          OUR VALUES
        </span>

        <h2>
          The Principles That Guide Us
        </h2>

        <p>
          Everything we do is rooted in values that inspire trust,
          strengthen communities and create lasting impact.
        </p>

      </div>

      <div class="values-grid">

        <article class="value-card" v-for="value in values" :key="value.id">

          <div class="value-number">
            {{ String(value.id).padStart(2, '0') }}
          </div>

          <h3>{{ value.heading }}</h3>

          <p>{{ value.body }}</p>

        </article>

      </div>

    </div>

  </section>
</template>

<script setup>

const values = [

  {
    id: 1,
    heading: "Solidarity",
    body: "We stand together with communities, believing that collective effort creates lasting and meaningful change."
  },

  {
    id: 2,
    heading: "Integrity",
    body: "Transparency, accountability and honesty guide every decision we make and every relationship we build."
  },

  {
    id: 3,
    heading: "Empowerment",
    body: "We equip individuals and communities with knowledge, resources and opportunities to achieve sustainable growth."
  },

  {
    id: 4,
    heading: "Collaboration",
    body: "We believe meaningful partnerships and teamwork multiply our impact and strengthen every initiative."
  },

  {
    id: 5,
    heading: "Inclusiveness",
    body: "We embrace diversity and ensure everyone is treated with dignity, respect and equal opportunity."
  }

]

</script>

<style scoped>
.values-section {

  padding: 120px 0;

  background: #ffffff;

}

.container {

  width: min(92%, 1200px);

  margin: auto;

}

.section-header {

  text-align: center;

  max-width: 700px;

  margin: 0 auto 70px;

}

.section-tag {

  display: inline-block;

  padding: 8px 18px;

  background: #edf7f0;

  color: #166534;

  border-radius: 999px;

  font-size: .85rem;

  font-weight: 700;

  letter-spacing: 1px;

  margin-bottom: 18px;

}

.section-header h2 {

  font-size: clamp(2rem, 4vw, 3rem);

  color: #111827;

  margin-bottom: 18px;

}

.section-header p {

  font-size: 1.05rem;

  line-height: 1.8;

  color: #6b7280;

}

.values-grid {

  display: grid;

  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));

  gap: 28px;

}

.value-card {

  background: #fff;

  padding: 35px 30px;

  border: 1px solid #e5e7eb;

  border-radius: 18px;

  transition: .35s ease;

  height: 100%;

}

.value-card:hover {

  transform: translateY(-6px);

  border-color: #166534;

  box-shadow: 0 18px 40px rgba(0, 0, 0, .06);

}

.value-number {

  width: 52px;

  height: 52px;

  display: flex;

  align-items: center;

  justify-content: center;

  background: #edf7f0;

  color: #166534;

  font-size: 1rem;

  font-weight: 700;

  border-radius: 14px;

  margin-bottom: 24px;

}

.value-card h3 {

  font-size: 1.35rem;

  color: #111827;

  margin-bottom: 15px;

}

.value-card p {

  color: #6b7280;

  line-height: 1.8;

}

@media (max-width:768px) {

  .values-section {

    padding: 90px 0;

  }

  .values-grid {

    grid-template-columns: 1fr;

  }

  .value-card {

    padding: 28px;

  }

}
</style>