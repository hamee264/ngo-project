<template>
  <div class="donate-container">
    <h2 class="donate-title">Support Our Cause</h2>
    <p class="donate-description">
      Your donation helps us continue our mission. Thank you for your support!
    </p>

    <form class="donate-form" @submit.prevent="handleDonate">
      <div class="input-wrapper">
        <label for="donorName">Name</label>
        <input
          type="text"
          id="donorName"
          v-model="donor.name"
          placeholder="Enter your name"
          required
        />
      </div>

      <div class="input-wrapper">
        <label for="donorEmail">Email</label>
        <input
          type="email"
          id="donorEmail"
          v-model="donor.email"
          placeholder="Enter your email"
          required
        />
      </div>

      <div class="input-wrapper">
        <label for="donationAmount">Amount ($)</label>
        <input
          type="number"
          id="donationAmount"
          v-model="donor.amount"
          placeholder="Enter amount"
          required
          min="1"
        />
      </div>

      <button type="submit" class="form-submit">Donate</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      donor: {
        name: '',
        email: '',
        amount: '',
      },
    };
  },
  methods: {
    handleDonate() {
      console.log('Donation submitted:', this.donor);
      // Hook into backend/payment gateway here
    },
  },
};
</script>

<style scoped>
.donate-container {
  padding: 2rem;
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
  animation: fadeInUp 0.8s ease forwards;
}

.donate-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: #333;
}

.donate-description {
  font-size: 1.1rem;
  color: #666;
  margin-bottom: 2rem;
}

.donate-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.input-wrapper {
  display: flex;
  flex-direction: column;
  padding: 1rem;
  border-radius: 12px;
  background: #fff;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.08);
  transition: box-shadow 0.3s ease;
}

.input-wrapper:hover {
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.1);
}

.input-wrapper label {
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #444;
  text-align: left;
}

.input-wrapper input {
  border: none;
  outline: none;
  padding: 0.8rem 1rem;
  font-size: 1rem;
  border-radius: 8px;
  background: #f5f5f5;
  transition: all 0.3s ease;
}

.input-wrapper input:focus {
  background: #fff;
  box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.15);
}

.form-submit {
  background-color: green;
  color: white;
  border: none;
  padding: 0.9rem 1.5rem;
  border-radius: 12px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.08);
}

.form-submit:hover {
  background-color: white;
  border: green solid 2px;
  color: green;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
