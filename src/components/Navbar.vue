<template>
  <div class="container">
    <header class="navbar">
      <!-- Logo -->
      <div class="logoContainer">
        <img src="/src/assets/logo.jpg" alt="NGO Logo" class="logo" />
      </div>

      <!-- Hamburger Icon -->
      <div class="hamburger" @click="toggleMenu">
        <span :class="{ open: isOpen }"></span>
        <span :class="{ open: isOpen }"></span>
        <span :class="{ open: isOpen }"></span>
      </div>

      <!-- Desktop Navigation -->
      <nav class="navContainer desktop-nav">
        <a class="link" href="#heropage" @click.prevent="scrollTo('heropage')">Home</a>
    <a class="link" href="#about" @click.prevent="scrollTo('about')">About</a>
    <a class="link" href="#things" @click.prevent="scrollTo('things')">What We Do</a>
    <a class="link" href="#get" @click.prevent="scrollTo('get')">Get Involved</a>
    <a class="link" href="#resources" @click.prevent="scrollTo('resources')">Resources</a>
    <a class="link" href="#Donate" @click.prevent="scrollTo('Donate')">Support</a>
      </nav>
    </header>

    <!-- Sidebar Overlay -->
    <div class="sidebar-overlay" v-if="isOpen" @click="toggleMenu"></div>

    <!-- Mobile Sidebar -->
    <aside class="mobile-sidebar" :class="{ show: isOpen }">
      <nav class="sidebar-nav">
        <a class="link" href="#heropage"  @click="toggleMenu" @click.prevent="scrollTo('heropage')">Home</a>
    <a class="link" href="#about"  @click="toggleMenu" @click.prevent="scrollTo('about')">About</a>
    <a class="link" href="#things"  @click="toggleMenu" @click.prevent="scrollTo('things')">What We Do</a>
    <a class="link" href="#get"  @click="toggleMenu" @click.prevent="scrollTo('get')">Get Involved</a>
    <a class="link" href="#resources"  @click="toggleMenu" @click.prevent="scrollTo('resources')">Resources</a>
    <a class="link" href="#Donate"  @click="toggleMenu" @click.prevent="scrollTo('Donate')">Support</a>
      </nav>
    </aside>

    <!-- Hero Section or Main Content -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen;
    },
    scrollTo(id) {
      const el = document.getElementById(id)
      if (el) {
        const top = el.getBoundingClientRect().top + window.pageYOffset - 80; // Adjust for navbar height
        window.scrollTo({ top, behavior: 'smooth' })
      }
    }
  },
  
};
</script>

<style scoped>

.container {
  width: 100%;
  font-family: 'Segoe UI', sans-serif;
  padding-top: 80px; 
  overflow-x: hidden;
  /* padding-right: 30px !important; */
}

/* Navbar */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 20px 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: transparent;
  backdrop-filter: blur(8px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  z-index: 1000;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
}

/* Logo */
.logo {
  height: 48px;
  object-fit: contain;
  border-radius: 50%;
}

/* Desktop Nav */
.navContainer {
  display: flex;
  gap: 20px;
  padding-right: 15px !important;
}

.navContainer .link,
.sidebar-nav .link {
  position: relative;
  text-decoration: none;
  color: #000;
  font-weight: 600;
  font-size: 16px;
  padding: 5px 10px;
  transition: color 0.3s ease;
  z-index: 100;
}

.navContainer .link::after,
.sidebar-nav .link::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -4px;
  width: 0%;
  height: 2px;
  background-color: #4f46e5;
  transition: width 0.3s ease;
}

.navContainer .link:hover,
.sidebar-nav .link:hover {
  color: #4f46e5;
}

.navContainer .link:hover::after,
.sidebar-nav .link:hover::after {
  width: 100%;
}

/* Hamburger */
.hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  cursor: pointer;
  z-index: 1010;
}

.hamburger span {
  height: 3px;
  width: 26px;
  background-color: #000;
  border-radius: 4px;
  transition: all 0.3s ease;
}

.hamburger span.open:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}

.hamburger span.open:nth-child(2) {
  opacity: 0;
}

.hamburger span.open:nth-child(3) {
  transform: rotate(-45deg) translate(5px, -5px);
}

/* Overlay */
.sidebar-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.35);
  z-index: 999;
}

/* Sidebar */
.mobile-sidebar {
  position: fixed;
  top: 0;
  left: -400px;
  width: 260px;
  height: 100vh;
  background-color: #ffffff;
  box-shadow: 2px 0 12px rgba(0, 0, 0, 0.2);
  padding: 40px 24px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 24px;
  transition: left 0.3s ease;
  z-index: 1000;
}

.mobile-sidebar.show {
  left: 0;
}

.sidebar-nav {
  display: flex;
  flex-direction: column;
  gap: 22px;
}

.sidebar-nav router-link {
  color: #222;
}

/* Hero Section */
.hero {
  background: url('/src/assets/heroimg2.jpg') no-repeat center center/cover;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  padding: 0 20px;
}

.hero-content {
  background: rgba(0, 0, 0, 0.45);
  padding: 40px;
  border-radius: 12px;
}

.hero-content h1 {
  font-size: 38px;
  font-weight: bold;
  margin-bottom: 16px;
}

.hero-content p {
  font-size: 20px;
  font-weight: 500;
}

/* Responsive Styles */
@media (max-width: 768px) {
  .desktop-nav {
    display: none;
  }

  .hamburger {
    display: flex;
  }

  .hero-content {
    padding: 24px;
  }

  .hero-content h1 {
    font-size: 28px;
  }

  .hero-content p {
    font-size: 16px;
  }
  /* Desktop Nav */
/* .navContainer {
  display: flex;
  gap: 20px;
  display: none;
  padding-right: 0px !important;
} */
}
</style>
