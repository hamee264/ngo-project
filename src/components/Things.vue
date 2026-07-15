<template>
  <section id="things" class="programs-section">

    <div class="container">

      <div class="section-header">

        <span class="section-tag">
          WHAT WE DO
        </span>

        <h2>
          Our Programmes
        </h2>

        <p>
          We are committed to improving lives through practical initiatives
          that create opportunities, restore hope and strengthen communities.
        </p>

      </div>

      <div class="program-grid">

        <article class="program-card" v-for="program in things" :key="program.id">

          <img :src="program.image" :alt="program.heading" class="program-image">

          <div class="program-content">

            <h3>{{ program.heading }}</h3>

            <p>{{ program.body }}</p>

          </div>

        </article>

      </div>

    </div>

  </section>
</template>

<script setup>
import education from '/src/assets/class3.jpg'
import healthcare from '/src/assets/IMG-20251015-WA0161.jpg'
import relief from '/src/assets/IMG-20251015-WA0155.jpg'
import youth from '/src/assets/IMG-20251015-WA0162.jpg'
import community from '/src/assets/IMG-20251015-WA0153.jpg'
import family from '/src/assets/IMG-20251015-WA0142.jpg'

const things = [
  {
    id: 1,
    image: education,
    heading: "Education Support",
    body: "Providing school fees, uniforms, exercise books, school bags, learning materials and scholarships to children from disadvantaged backgrounds."
  },
  {
    id: 2,
    image: healthcare,
    heading: "Healthcare Assistance",
    body: "Supporting medical outreaches, providing healthcare assistance and helping vulnerable families gain access to essential medical services."
  },
  {
    id: 3,
    image: relief,
    heading: "Relief & Welfare",
    body: "Distributing food items, relief materials and emergency assistance to vulnerable individuals and families during difficult times."
  },
  {
    id: 4,
    image: youth,
    heading: "Youth Empowerment",
    body: "Equipping young people with vocational skills, mentorship and entrepreneurship opportunities for sustainable livelihoods."
  },
  {
    id: 5,
    image: community,
    heading: "Community Development",
    body: "Working closely with local communities on projects that promote education, sanitation, social inclusion and sustainable development."
  },
  {
    id: 6,
    image: family,
    heading: "Family Support",
    body: "Providing assistance to widows, elderly people and low-income families through various welfare initiatives and community outreach."
  }
]

</script>

<style scoped>
.programs-section {

  padding: 120px 0;

  background: #f8faf9;

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

  color: #6b7280;

  line-height: 1.8;

  font-size: 1.05rem;

}

.program-grid {

  display: grid;

  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));

  gap: 28px;

}

.program-card {
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 18px;
  overflow: hidden;
  transition: .3s ease;
}

.program-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 16px 40px rgba(0, 0, 0, .08);
  border-color: #166534;
}

.program-image {
  width: 100%;
  height: 220px;
  object-fit: cover;
}

.program-content {
  padding: 28px;
}

.program-content h3 {
  font-size: 1.35rem;
  color: #111827;
  margin-bottom: 14px;
}

.program-content p {
  color: #6b7280;
  line-height: 1.8;
}


@media(max-width:768px) {

  .program-grid {

    grid-template-columns: 1fr;

  }

  .program-card {

    padding: 28px;

  }

}
</style>