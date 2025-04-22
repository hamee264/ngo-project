<template>
    <div class="supports-container">
      <h1 class="supports-title">Get In Touch</h1>
      <form class="form-container" @submit.prevent="handleSubmit" method="POST" action="mailto:Ogaprogressivefoundation@yahoo.com">
        <div class="form-group">
          <label for="name">Name</label>
          <input type="text" id="name" placeholder="Enter your name" required />
        </div>
  
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" placeholder="Enter your email" required />
        </div>
  
        <div class="form-group">
          <label for="message">Message</label>
          <textarea id="message" rows="5" placeholder="Write your message" required></textarea>
        </div>
  
        <button type="submit" class="form-submit">Submit</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      handleSubmit() {
        alert("Message sent!");
        // Add your real submission logic here
      },
    },
  };
  </script>
  
  <style scoped>
  .supports-container {
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: fadeInUp 0.8s ease forwards;
  /* Removed background */
}

.supports-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 2rem;
  color: green;
}

.form-container {
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 2rem;
  border-radius: 16px;
  animation: slideIn 0.5s ease-in-out;
}

.form-group {
  display: flex;
  flex-direction: column;
  background: #ffffff;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
  transition: transform 0.3s ease;
}

.form-group:hover {
  transform: translateY(-2px);
}

.form-group label {
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: #555;
}

.form-group input,
.form-group textarea {
  padding: 0.8rem 1rem;
  border: 1px solid #ccc;
  border-radius: 10px;
  font-size: 1rem;
  transition: all 0.3s ease;
  background: white;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #4f46e5;
  box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.2);
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
}

.form-submit:hover {
  background-color: white;
  color: green;
  border: 2px solid green;
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

@keyframes slideIn {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@media (max-width: 640px) {
  .supports-title {
    font-size: 2rem;
  }

  .form-container {
    padding: 1.5rem;
  }
}

  </style>
  