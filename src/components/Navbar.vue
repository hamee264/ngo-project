<template>
  <header class="navbar" :class="{ scrolled: isScrolled }">
    <div class="nav-shell">

      <!-- Logo -->
      <div class="brand">
        <img src="/src/assets/logo.jpg" alt="NGO Logo" class="logo" />

        <div class="brand-text">
          <h2>Hope Foundation</h2>
          <span>Changing Lives Together</span>
        </div>
      </div>

      <!-- Desktop Navigation -->
      <nav class="desktop-nav">
        <a v-for="link in links" :key="link.id" href="#" @click.prevent="scrollTo(link.id)"
          :class="{ active: activeSection === link.id }">
          {{ link.name }}
        </a>
      </nav>

      <!-- Right Side -->
      <div class="nav-actions">

        <button class="donate-btn">
          Donate
        </button>

        <button class="menu-btn" @click="toggleMenu" aria-label="Open Menu">

          <span :class="{ open: isOpen }"></span>

          <span :class="{ open: isOpen }"></span>

          <span :class="{ open: isOpen }"></span>

        </button>

      </div>

    </div>

    <!-- Overlay -->

    <Transition name="fade">

      <div v-if="isOpen" class="overlay" @click="toggleMenu"></div>

    </Transition>

    <!-- Mobile Menu -->

    <Transition name="slide">

      <aside v-if="isOpen" class="mobile-menu">

        <div class="mobile-top">

          <div class="brand">

            <img src="/src/assets/logo.jpg" class="logo" />

            <div class="brand-text">

              <h2>Hope Foundation</h2>

              <span>Changing Lives Together</span>

            </div>

          </div>

          <button class="close-btn" @click="toggleMenu">
            ✕
          </button>

        </div>

        <nav class="mobile-links">

          <a v-for="link in links" :key="link.id" href="#" @click.prevent="navigate(link.id)">
            {{ link.name }}
          </a>

        </nav>

        <div class="mobile-footer">

          <button class="donate-btn mobile-donate">
            Donate Now
          </button>

        </div>

      </aside>

    </Transition>

  </header>
</template>
<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const isOpen = ref(false);
const isScrolled = ref(false);
const activeSection = ref("home");

const links = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Programs", id: "things" },
  { name: "Volunteer", id: "get" },
  { name: "Resources", id: "resources" },
  { name: "Donate", id: "Donate" },
];

const toggleMenu = () => {
  isOpen.value = !isOpen.value;

  document.body.style.overflow = isOpen.value ? "hidden" : "";
};

const scrollTo = (id) => {
  const section = document.getElementById(id);

  if (!section) return;

  const y =
    section.getBoundingClientRect().top +
    window.pageYOffset -
    110;

  window.scrollTo({
    top: y,
    behavior: "smooth",
  });

  activeSection.value = id;
};

const navigate = (id) => {
  scrollTo(id);
  toggleMenu();
};

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20;

  links.forEach((item) => {
    const section = document.getElementById(item.id);

    if (!section) return;

    const top = section.offsetTop - 180;
    const bottom = top + section.offsetHeight;

    if (
      window.scrollY >= top &&
      window.scrollY < bottom
    ) {
      activeSection.value = item.id;
    }
  });
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);

  document.body.style.overflow = "";
});
</script>
<style scoped>
/* ===========================
   Google Font
=========================== */

/* Import Manrope in main.js or App.vue
@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap');
*/

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {

  --primary: #166534;
  --primary-light: #f3faf6;

  --text: #1f2937;

  --muted: #6b7280;

  --border: #e5e7eb;

  --white: #ffffff;

}

header {

  font-family: "Manrope", sans-serif;

}

.navbar {

  position: fixed;

  top: 22px;

  left: 0;

  width: 100%;

  display: flex;

  justify-content: center;

  z-index: 999;

  transition: .35s ease;

}

/* Floating Container */

.nav-shell {

  width: min(92%, 1250px);

  height: 74px;

  background: #fff;

  border: 1px solid var(--border);

  border-radius: 18px;

  display: flex;

  align-items: center;

  justify-content: space-between;

  padding: 0 22px;

  transition: .35s;

  box-shadow:
    0 6px 18px rgba(15, 23, 42, .05);

}

.navbar.scrolled .nav-shell {

  height: 66px;

  box-shadow:
    0 15px 35px rgba(15, 23, 42, .08);

}

/* =======================
Brand
======================= */

.brand {

  display: flex;

  align-items: center;

  gap: 14px;

}

.logo {

  width: 48px;

  height: 48px;

  object-fit: cover;

  border-radius: 50%;

}

.brand-text h2 {

  font-size: 18px;

  color: var(--text);

  font-weight: 700;

}

.brand-text span {

  font-size: 12px;

  color: var(--muted);

}

/* ===========================
Desktop Navigation
=========================== */

.desktop-nav {

  display: flex;

  gap: 12px;

}

.desktop-nav a {

  text-decoration: none;

  color: var(--text);

  font-size: 15px;

  font-weight: 600;

  padding: 10px 15px;

  border-radius: 10px;

  transition: .25s;

}

.desktop-nav a:hover {

  background: #f8fafc;

}

.desktop-nav a.active {

  background: var(--primary-light);

  color: var(--primary);

}

/* ===========================
Buttons
=========================== */

.nav-actions {

  display: flex;

  align-items: center;

  gap: 14px;

}

.donate-btn {

  border: none;

  background: var(--primary);

  color: white;

  padding: 12px 22px;

  border-radius: 12px;

  font-weight: 700;

  cursor: pointer;

  transition: .3s;

}

.donate-btn:hover {

  transform: translateY(-2px);

  background: #14532d;

}

/* ===========================
Hamburger
=========================== */

.menu-btn {

  width: 46px;

  height: 46px;

  display: none;

  background: #fff;

  border: 1px solid var(--border);

  border-radius: 12px;

  cursor: pointer;

  position: relative;

}

.menu-btn span {

  position: absolute;

  left: 12px;

  width: 22px;

  height: 2px;

  background: #222;

  transition: .3s;

}

.menu-btn span:nth-child(1) {

  top: 15px;

}

.menu-btn span:nth-child(2) {

  top: 22px;

}

.menu-btn span:nth-child(3) {

  top: 29px;

}

.menu-btn span.open:nth-child(1) {

  transform: rotate(45deg);

  top: 22px;

}

.menu-btn span.open:nth-child(2) {

  opacity: 0;

}

.menu-btn span.open:nth-child(3) {

  transform: rotate(-45deg);

  top: 22px;

}

/* ===========================
Overlay
=========================== */

.overlay {

  position: fixed;

  inset: 0;

  background: rgba(15, 23, 42, .25);

  backdrop-filter: blur(2px);

}

/* ===========================
Mobile Menu
=========================== */

.mobile-menu {

  position: fixed;

  top: 18px;

  right: 18px;

  width: 320px;

  height: calc(100vh - 36px);

  background: #fff;

  border-radius: 22px;

  border: 1px solid var(--border);

  box-shadow:
    0 20px 45px rgba(15, 23, 42, .10);

  padding: 24px;

  display: flex;

  flex-direction: column;

}

.mobile-top {

  display: flex;

  justify-content: space-between;

  align-items: center;

  margin-bottom: 40px;

}

.close-btn {

  border: none;

  background: none;

  font-size: 22px;

  cursor: pointer;

}

.mobile-links {

  display: flex;

  flex-direction: column;

  gap: 10px;

}

.mobile-links a {

  text-decoration: none;

  color: var(--text);

  padding: 14px 16px;

  border-radius: 12px;

  font-weight: 600;

  transition: .25s;

}

.mobile-links a:hover {

  background: #f8fafc;

}

.mobile-footer {

  margin-top: auto;

}

/* ===========================
Transitions
=========================== */

.fade-enter-active,
.fade-leave-active {

  transition: .25s;

}

.fade-enter-from,
.fade-leave-to {

  opacity: 0;

}

.slide-enter-active,
.slide-leave-active {

  transition: .35s ease;

}

.slide-enter-from,
.slide-leave-to {

  transform: translateX(40px);

  opacity: 0;

}

/* ===========================
Responsive
=========================== */

@media(max-width:980px) {

  .desktop-nav {

    display: none;

  }

  .donate-btn {

    display: none;

  }

  .menu-btn {

    display: block;

  }

}

@media(max-width:600px) {

  .brand-text span {

    display: none;

  }

  .brand-text h2 {

    font-size: 16px;

  }

  .nav-shell {

    width: 94%;

    padding: 0 16px;

  }

  .mobile-menu {

    width: 92%;

    right: 4%;

  }

}
</style>