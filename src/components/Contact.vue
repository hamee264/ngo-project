<template>
  <section id="contact" class="contact-section">

    <div class="container">

      <div class="section-header">

        <span class="section-tag">
          CONTACT US
        </span>

        <h2>Get In Touch</h2>

        <p>
          We'd love to hear from you. Whether you have a question,
          want to volunteer, partner with us or support our mission,
          we're here to help.
        </p>

      </div>

      <div class="contact-wrapper">

        <!-- Contact Information -->

        <aside class="contact-info">

          <div class="info-card">

            <h3>Let's Make An Impact Together</h3>

            <p>
              Reach out to us using any of the contact details below
              or send us a message through the contact form.
            </p>

          </div>

          <div class="info-item">

            <div class="info-icon">
              <i class="fas fa-location-dot"></i>
            </div>

            <div>

              <h4>Address</h4>

              <p>Ogun State, Nigeria</p>

            </div>

          </div>

          <div class="info-item">

            <div class="info-icon">
              <i class="fas fa-envelope"></i>
            </div>

            <div>

              <h4>Email</h4>

              <p>ogaprogressivefoundation@yahoo.com</p>

            </div>

          </div>

          <div class="info-item">

            <div class="info-icon">
              <i class="fas fa-phone"></i>
            </div>

            <div>

              <h4>Phone</h4>

              <p>+234 XXX XXX XXXX</p>

            </div>

          </div>

        </aside>

        <!-- Contact Form -->

        <form class="contact-form" @submit.prevent="handleSubmit">

          <div class="input-group">

            <i class="fas fa-user"></i>

            <input type="text" placeholder="Full Name" required>

          </div>

          <div class="input-group">

            <i class="fas fa-envelope"></i>

            <input type="email" placeholder="Email Address" required>

          </div>

          <div class="input-group">

            <i class="fas fa-tag"></i>

            <input type="text" placeholder="Subject">

          </div>

          <div class="input-group textarea-group">

            <i class="fas fa-message"></i>

            <textarea rows="6" placeholder="Your Message" required></textarea>

          </div>

          <button type="submit">

            <i class="fas fa-paper-plane"></i>

            <span>Send Message</span>

          </button>

        </form>

      </div>

    </div>

  </section>
</template>

<script setup>

const handleSubmit = () => {

  alert("Thank you! Your message has been received.");

}

</script>
<style scoped>
/* ==========================
   SECTION
========================== */

.contact-section {
  padding: 120px 0;
  background: #f8faf9;
}

.container {
  width: min(92%, 1200px);
  margin: auto;
}

/* ==========================
   HEADER
========================== */

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

/* ==========================
   LAYOUT
========================== */

.contact-wrapper {
  display: grid;
  grid-template-columns: 380px 1fr;
  gap: 60px;
  align-items: start;
}

/* ==========================
   LEFT SIDE
========================== */

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 22px;

  position: sticky;
  top: 110px;

  align-self: start;
}

.info-card {
  background: #166534;
  color: #fff;
  padding: 36px;
  border-radius: 20px;
}

.info-card h3 {
  font-size: 1.55rem;
  margin-bottom: 15px;
}

.info-card p {
  line-height: 1.8;
  opacity: .95;
}

/* ==========================
   INFO ITEMS
========================== */

.info-item {
  display: flex;
  align-items: center;
  gap: 18px;

  background: #fff;
  padding: 22px;

  border-radius: 18px;
  border: 1px solid #e5e7eb;

  transition: .35s;
}

.info-item:hover {
  transform: translateY(-4px);
  box-shadow: 0 16px 35px rgba(0, 0, 0, .06);
}

.info-icon {
  width: 56px;
  height: 56px;

  display: flex;
  align-items: center;
  justify-content: center;

  background: #edf7f0;
  color: #166534;

  border-radius: 14px;

  flex-shrink: 0;

  transition: .3s;
}

.info-icon i {
  font-size: 1.15rem;
}

.info-item:hover .info-icon {
  background: #166534;
  color: #fff;
}

.info-item h4 {
  color: #111827;
  margin-bottom: 6px;
}

.info-item p {
  color: #6b7280;
  line-height: 1.6;
}

/* ==========================
   FORM
========================== */

.contact-form {

  background: #fff;

  border: 1px solid #e5e7eb;

  border-radius: 20px;

  padding: 40px;

  display: flex;
  flex-direction: column;

  gap: 22px;

  position: sticky;
  top: 110px;

  align-self: start;
}

/* ==========================
   INPUT GROUP
========================== */

.input-group {
  position: relative;
}

.input-group i {

  position: absolute;

  left: 18px;

  top: 50%;

  transform: translateY(-50%);

  color: #166534;

  font-size: 1rem;

  pointer-events: none;
}

.textarea-group i {
  top: 22px;
  transform: none;
}

.input-group input,
.input-group textarea {

  width: 100%;

  padding: 16px 18px 16px 52px;

  border: 1px solid #d1d5db;

  border-radius: 12px;

  font-size: 1rem;

  font-family: inherit;

  transition: .3s;

  background: #fff;
}

.input-group textarea {
  resize: vertical;
  min-height: 170px;
}

.input-group input:focus,
.input-group textarea:focus {

  outline: none;

  border-color: #166534;

  box-shadow: 0 0 0 4px rgba(22, 101, 52, .12);
}

/* ==========================
   BUTTON
========================== */

.contact-form button {

  display: flex;

  align-items: center;

  justify-content: center;

  gap: 10px;

  padding: 16px;

  border: none;

  border-radius: 12px;

  background: #166534;

  color: #fff;

  font-size: 1rem;

  font-weight: 600;

  cursor: pointer;

  transition: .3s;
}

.contact-form button:hover {

  background: #14532d;

  transform: translateY(-2px);
}

.contact-form button i {
  font-size: .95rem;
}

/* ==========================
   RESPONSIVE
========================== */

@media (max-width:900px) {

  .contact-section {
    padding: 90px 0;
  }

  .contact-wrapper {

    grid-template-columns: 1fr;

    gap: 35px;
  }

  .contact-info,
  .contact-form {

    position: static;
  }

  .contact-form {
    padding: 28px;
  }

  .info-card {
    padding: 28px;
  }

}

@media (max-width:600px) {

  .container {
    width: 94%;
  }

  .section-header {
    margin-bottom: 45px;
  }

  .section-header h2 {
    font-size: 2rem;
  }

  .section-header p {
    font-size: .95rem;
  }

  .contact-form {
    padding: 22px;
    border-radius: 18px;
  }

  .input-group input,
  .input-group textarea {
    padding: 14px 16px 14px 48px;
    font-size: .95rem;
  }

  .contact-form button {
    width: 100%;
  }

  .info-card {
    padding: 24px;
  }

  .info-item {
    padding: 18px;
    gap: 14px;
  }

  .info-icon {
    width: 50px;
    height: 50px;
  }

}
</style>