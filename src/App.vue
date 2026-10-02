<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { ArrowUp } from 'lucide-vue-next';
import { footerConfig } from './constants/consts';
import { useActiveSection } from './composables/useActiveSection';
import Navbar from './components/Navbar.vue';
import About from './pages/About.vue';
import Timeline from './pages/Timeline.vue';
import Skills from './pages/Skills.vue';
import Contact from './pages/Contact.vue';

const { activeSection, updateScroll } = useActiveSection();
const showScrollTop = ref(false);

const handleScroll = () => {
  showScrollTop.value = window.scrollY > 300;
};

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

let scrollObserver: IntersectionObserver | null = null;

const initScrollObserver = () => {
  const revealElements = document.querySelectorAll('.scroll-reveal');
  if (scrollObserver) {
    scrollObserver.disconnect();
  }

  scrollObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        } else {
          // When scrolled fully out of view, allow smooth re-entry
          const rect = entry.target.getBoundingClientRect();
          if (rect.top > window.innerHeight + 80 || rect.bottom < -80) {
            entry.target.classList.remove('is-visible');
          }
        }
      });
    },
    {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    }
  );

  revealElements.forEach((el) => scrollObserver?.observe(el));
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true });
  window.addEventListener('scroll', updateScroll, { passive: true });
  updateScroll();

  // Allow browser to perform initial paint with hidden styles before playing entrance animations
  setTimeout(() => {
    initScrollObserver();
  }, 60);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
  window.removeEventListener('scroll', updateScroll);
  if (scrollObserver) {
    scrollObserver.disconnect();
  }
});
</script>

<template>
  <div class="min-h-screen bg-white text-neutral-900 selection:bg-neutral-900 selection:text-white antialiased font-sans">
    <Navbar />

    <main class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 pb-20 space-y-16 sm:space-y-20">
      <div id="overview" class="scroll-mt-24">
        <About />
      </div>

      <div class="border-t border-neutral-100 pt-14 sm:pt-20 scroll-mt-24" id="timeline">
        <!-- Also support #experience hash -->
        <span id="experience" class="sr-only"></span>
        <Timeline />
      </div>

      <div class="border-t border-neutral-100 pt-14 sm:pt-20 scroll-mt-24" id="skills">
        <Skills />
      </div>

      <div class="border-t border-neutral-100 pt-14 sm:pt-20 scroll-mt-24" id="contact">
        <Contact />
      </div>

      <footer class="border-t border-neutral-100 pt-8 text-xs font-mono text-neutral-400 flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left scroll-reveal">
        <span>© {{ new Date().getFullYear() }} {{ footerConfig.copyrightHolder }}</span>
        <span>{{ footerConfig.location }}</span>
      </footer>
    </main>

    <!-- Fixed '^' arrow button on bottom right with margin -->
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 translate-y-3 scale-90"
      enter-to-class="opacity-100 translate-y-0 scale-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0 scale-100"
      leave-to-class="opacity-0 translate-y-3 scale-90"
    >
      <button
        v-if="showScrollTop"
        @click="scrollToTop"
        class="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40 w-10 h-10 rounded-full bg-white/95 border border-neutral-300 shadow-md hover:shadow-lg text-neutral-800 hover:text-neutral-950 hover:border-neutral-900 flex items-center justify-center transition-all duration-150 cursor-pointer"
        aria-label="Scroll to top"
        title="Scroll to top"
      >
        <ArrowUp class="w-4 h-4" />
      </button>
    </Transition>
  </div>
</template>
