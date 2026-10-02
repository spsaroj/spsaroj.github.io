<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue';
import { ArrowUpRight } from 'lucide-vue-next';
import { personalInfo, navigationConfig } from '../constants/consts';
import { useActiveSection } from '../composables/useActiveSection';

const { activeSection, scrolled, showFixedIdentity, updateScroll } = useActiveSection();

const isActiveLink = (href: string) => {
  if (href === '#overview' && activeSection.value === 'overview') return true;
  if (href === '#timeline' && activeSection.value === 'timeline') return true;
  if (href === '#skills' && activeSection.value === 'skills') return true;
  return false;
};

onMounted(() => {
  window.addEventListener('scroll', updateScroll, { passive: true });
  updateScroll();
});

onUnmounted(() => {
  window.removeEventListener('scroll', updateScroll);
});

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
</script>

<template>
  <header
    :class="[
      'fixed top-0 left-0 right-0 z-40 transition-all duration-300 ease-out',
      scrolled
        ? 'bg-white/95 backdrop-blur-md border-b border-neutral-200/80 py-2 sm:py-2.5 shadow-[0_1px_3px_rgba(0,0,0,0.03)]'
        : 'bg-white py-4 sm:py-5'
    ]"
  >
    <div class="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-4">
      <!-- Brand / Identity block -->
      <div class="flex items-center min-w-0 h-7 sm:h-8">
        <Transition name="navbar-identity" mode="out-in">
          <!-- Normal state (at top): Matching Cozydiadora emblem + uppercase name -->
          <a
            v-if="!showFixedIdentity"
            key="brand-emblem"
            href="#overview"
            class="flex items-center gap-2.5 group cursor-pointer select-none"
          >
            <div class="w-7 h-7 rounded-full bg-neutral-950 text-white flex items-center justify-center font-bold text-xs tracking-tight shadow-2xs group-hover:scale-105 transition-transform shrink-0">
              {{ navigationConfig.brandEmblem }}
            </div>
            <span class="font-extrabold text-neutral-950 text-sm tracking-tight uppercase font-sans whitespace-nowrap">
              {{ personalInfo.name }}
            </span>
          </a>

          <!-- Fixed animated state (when scrolled) -->
          <button
            v-else
            key="brand-scrolled"
            @click="scrollToTop"
            class="flex items-center gap-2 sm:gap-2.5 min-w-0 text-left group cursor-pointer select-none"
            title="Click to scroll to top"
          >
            <!-- Photo -->
            <img
              :src="personalInfo.profilePic"
              :alt="personalInfo.name"
              class="w-6 h-6 sm:w-7 sm:h-7 rounded-full object-cover border border-neutral-300 shadow-2xs shrink-0 group-hover:scale-105 transition-transform"
            />

            <!-- Name -->
            <span class="font-bold text-neutral-950 text-xs sm:text-sm tracking-tight shrink-0 group-hover:text-neutral-700 transition-colors whitespace-nowrap">
              {{ personalInfo.name }}
            </span>

            <!-- Specialization (Hidden on very small screens, visible on md+) -->
            <span class="hidden md:inline text-[11px] text-neutral-500 font-normal pl-2 border-l border-neutral-200 truncate">
              {{ personalInfo.specialization }}
            </span>

            <!-- Location badge with pulse dot -->
            <span class="inline-flex items-center gap-1 text-[10px] sm:text-[11px] font-mono text-neutral-600 bg-neutral-100/90 px-1.5 sm:px-2 py-0.5 rounded-full border border-neutral-200 shrink-0 whitespace-nowrap">
              <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              {{ personalInfo.location }}
            </span>
          </button>
        </Transition>
      </div>

      <!-- Center Nav Links with active section indicator -->
      <nav class="hidden sm:flex items-center gap-1 sm:gap-2 text-xs sm:text-sm font-medium">
        <a
          v-for="link in navigationConfig.navLinks"
          :key="link.name"
          :href="link.href"
          :target="link.external ? '_blank' : undefined"
          :rel="link.external ? 'noopener noreferrer' : undefined"
          :class="[
            'relative px-3 py-1.5 rounded-full inline-flex items-center gap-1 transition-all duration-300 ease-out cursor-pointer',
            !link.external && isActiveLink(link.href)
              ? 'text-neutral-950 font-semibold bg-neutral-100 shadow-2xs'
              : 'text-neutral-600 hover:text-neutral-950 hover:bg-neutral-50/80'
          ]"
        >
          <span>{{ link.name }}</span>
          <ArrowUpRight
            v-if="link.external"
            class="w-3.5 h-3.5 text-neutral-400 group-hover:text-neutral-950 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </a>
      </nav>

      <!-- Right Action: Black Pill Contact Button matching reference image -->
      <div class="flex items-center gap-2.5 shrink-0">
        <a
          href="#contact"
          :class="[
            'px-5 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 shadow-2xs cursor-pointer',
            activeSection === 'contact'
              ? 'bg-neutral-900 text-white ring-2 ring-neutral-900 ring-offset-2 shadow-md'
              : 'bg-neutral-950 text-white hover:bg-neutral-800'
          ]"
        >
          {{ navigationConfig.contactCta }}
        </a>
      </div>
    </div>
  </header>
</template>

<style scoped>
.navbar-identity-enter-active {
  transition:
    opacity 0.25s cubic-bezier(0.16, 1, 0.3, 1),
    transform 0.25s cubic-bezier(0.16, 1, 0.3, 1),
    filter 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  will-change: opacity, transform, filter;
}

.navbar-identity-leave-active {
  transition:
    opacity 0.16s ease-in,
    transform 0.16s ease-in,
    filter 0.16s ease-in;
  will-change: opacity, transform, filter;
}

.navbar-identity-enter-to,
.navbar-identity-leave-from {
  opacity: 1;
  transform: translateY(0);
  filter: none;
}

.navbar-identity-enter-from {
  opacity: 0;
  transform: translateY(5px);
  filter: blur(2px);
}

.navbar-identity-leave-to {
  opacity: 0;
  transform: translateY(-5px);
  filter: blur(2px);
}
</style>
