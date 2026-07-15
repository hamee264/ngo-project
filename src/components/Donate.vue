<template>
  <section id="donate" class="donate-section">

    <div class="container">

      <div class="section-header">

        <span class="section-tag">
          SUPPORT OUR MISSION
        </span>

        <h2>Make A Difference Today</h2>

        <p>
          Every contribution helps us provide education, healthcare,
          welfare support and hope to vulnerable individuals and communities.
        </p>

      </div>

      <div class="donate-wrapper">

        <!-- Left -->

        <div class="donate-info">

          <div class="impact-card">

            <h3>Your Donation Helps To</h3>

            <ul>

              <li>
                <i class="fas fa-graduation-cap"></i>
                Sponsor children's education
              </li>

              <li>
                <i class="fas fa-box-open"></i>
                Provide food and relief materials
              </li>

              <li>
                <i class="fas fa-heart-pulse"></i>
                Support healthcare programmes
              </li>

              <li>
                <i class="fas fa-handshake"></i>
                Empower vulnerable families
              </li>

              <li>
                <i class="fas fa-seedling"></i>
                Develop local communities
              </li>

            </ul>
          </div>

        </div>

        <!-- Right -->

        <form class="donate-form" @submit.prevent="handleDonate">

          <input type="text" v-model="donor.name" placeholder="Full Name" required>

          <input type="email" v-model="donor.email" placeholder="Email Address" required>

          <input type="number" v-model="donor.amount" placeholder="Donation Amount (₦)" required>

          <button>
            Continue To Donate
          </button>

        </form>

      </div>

    </div>

  </section>
</template>

<script setup>

import { reactive } from "vue"

const donor = reactive({

  name: "",
  email: "",
  amount: ""

})

const handleDonate = () => {

  alert("Proceed to payment gateway here.");

}

</script>

<style scoped>
.donate-section {

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

  margin-bottom: 18px;

  letter-spacing: 1px;

}

.section-header h2 {

  font-size: clamp(2rem, 4vw, 3rem);

  margin-bottom: 18px;

  color: #111827;

}

.section-header p {

  color: #6b7280;

  line-height: 1.8;

}

.donate-wrapper {

  display: grid;

  grid-template-columns: 380px 1fr;

  gap: 60px;

  align-items: start;

}

.impact-card {

  background: #166534;

  color: #fff;

  padding: 40px;

  border-radius: 20px;

  position: sticky;

  top: 120px;

}

.impact-card h3 {

  margin-bottom: 25px;

  font-size: 1.6rem;

}

.impact-card ul {

  list-style: none;

  padding: 0;

  margin: 0;

  display: flex;

  flex-direction: column;

  gap: 18px;

}

.impact-card li {

  line-height: 1.6;

}

.donate-form {

  background: #fff;

  padding: 40px;

  border-radius: 20px;

  border: 1px solid #e5e7eb;

  display: flex;

  flex-direction: column;

  gap: 20px;

}

.donate-form input {

  padding: 16px;

  border: 1px solid #d1d5db;

  border-radius: 12px;

  font-size: 1rem;

  transition: .3s;

}

.donate-form input:focus {

  outline: none;

  border-color: #166534;

  box-shadow: 0 0 0 4px rgba(22, 101, 52, .12);

}

.donate-form button {

  padding: 16px;

  background: #166534;

  color: #fff;

  border: none;

  border-radius: 12px;

  font-size: 1rem;

  font-weight: 600;

  cursor: pointer;

  transition: .3s;

}

.donate-form button:hover {

  background: #14532d;

}

@media(max-width:900px) {

  .donate-section {

    padding: 90px 0;

  }

  .donate-wrapper {

    grid-template-columns: 1fr;

    gap: 35px;

  }

  .impact-card {

    position: static;

    padding: 30px;

  }

  .donate-form {

    padding: 28px;

  }

}

@media(max-width:600px) {

  .container {

    width: 94%;

  }

  .donate-form {

    padding: 22px;

  }

  .donate-form input {

    padding: 14px;

    font-size: .95rem;

  }

  .donate-form button {

    width: 100%;

  }

}
</style>