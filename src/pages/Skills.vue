<script setup lang="ts">
import { ref, watch, onMounted, onUnmounted } from 'vue';
import { X, SlidersHorizontal, Layers } from 'lucide-vue-next';
import { resumeSkills, outsideInterests, skillsConfig } from '../constants/consts';

const showDetailModal = ref(false);

const openModal = () => {
  showDetailModal.value = true;
};

const closeModal = () => {
  showDetailModal.value = false;
};

// Handle Escape key & body scroll lock
const handleKeyDown = (e: KeyboardEvent) => {
  if (e.key === 'Escape' && showDetailModal.value) {
    closeModal();
  }
};

watch(showDetailModal, (isOpen) => {
  if (isOpen) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
});

onMounted(() => {
  window.addEventListener('keydown', handleKeyDown);
});

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeyDown);
  document.body.style.overflow = '';
});

</script>

<template>
  <section class="space-y-8">
    <!-- Header matching Education & Experience layout -->
    <div class="text-center space-y-3 scroll-reveal">
      <h2 class="text-3xl sm:text-4xl md:text-5xl font-sans font-bold text-neutral-900 tracking-tight">
        {{ skillsConfig.title }}
      </h2>

      <p class="text-xs text-neutral-400 font-mono">
        {{ skillsConfig.subtitle }}
      </p>

      <div class="pt-1 flex items-center justify-center">
        <!-- 'View Detail' Button -->
        <button
          @click="openModal"
          class="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-neutral-300 bg-white text-xs font-semibold text-neutral-800 hover:text-neutral-950 hover:border-neutral-900 hover:bg-neutral-50 transition-all cursor-pointer shadow-2xs group"
          title="View full categorized skills list"
        >
          <SlidersHorizontal class="w-3.5 h-3.5 text-neutral-500 group-hover:text-neutral-950 transition-colors" />
          <span>{{ skillsConfig.viewDetailsButton }}</span>
        </button>
      </div>
    </div>

    <!-- 6 Big Icons (Text Always Displayed, Border Color Changes on Hover) -->
    <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5 scroll-reveal scroll-delay-1">
      <!-- 1. Golang (Go Gopher) -->
      <div
        class="group relative bg-white rounded-2xl border-2 border-neutral-200/80 hover:border-[#00ADD8] hover:shadow-[0_4px_20px_rgba(0,173,216,0.18)] hover:-translate-y-1 transition-all duration-200 p-4 sm:p-5 flex flex-col items-center justify-center min-h-[145px] sm:min-h-[160px] cursor-pointer"
        @click="openModal"
      >
        <!-- Go Gopher Icon -->
        <div class="transition-transform duration-200 group-hover:scale-105">
          <svg viewBox="0 0 64 64" class="w-14 h-14" fill="none">
            <!-- Gopher Ears -->
            <circle cx="15" cy="18" r="5" fill="#00ADD8" />
            <circle cx="15" cy="18" r="2.5" fill="#F4E8D7" />
            <circle cx="49" cy="18" r="5" fill="#00ADD8" />
            <circle cx="49" cy="18" r="2.5" fill="#F4E8D7" />
            <!-- Chubby Cyan Body -->
            <path d="M14 26c0-9 8-15 18-15s18 6 18 15v18c0 10-8 16-18 16s-18-6-18-16V26z" fill="#00ADD8" />
            <!-- Big Round Eyes -->
            <circle cx="23" cy="24" r="7.5" fill="#ffffff" stroke="#00ADD8" stroke-width="1.5" />
            <circle cx="41" cy="24" r="7.5" fill="#ffffff" stroke="#00ADD8" stroke-width="1.5" />
            <!-- Pupils looking forward with reflections -->
            <circle cx="25" cy="24" r="3.5" fill="#231F20" />
            <circle cx="26.5" cy="22.5" r="1.2" fill="#ffffff" />
            <circle cx="39" cy="24" r="3.5" fill="#231F20" />
            <circle cx="40.5" cy="22.5" r="1.2" fill="#ffffff" />
            <!-- Snout & Nose -->
            <ellipse cx="32" cy="33" rx="7" ry="5" fill="#F4E8D7" />
            <ellipse cx="32" cy="31" rx="3" ry="2" fill="#231F20" />
            <!-- Front Buck Teeth -->
            <rect x="29.2" y="36" width="2.6" height="4.5" rx="0.6" fill="#ffffff" stroke="#231F20" stroke-width="0.8" />
            <rect x="32.8" y="36" width="2.6" height="4.5" rx="0.6" fill="#ffffff" stroke="#231F20" stroke-width="0.8" />
            <!-- Cute Paws -->
            <ellipse cx="18" cy="46" rx="4.5" ry="3.5" fill="#F4E8D7" />
            <ellipse cx="46" cy="46" rx="4.5" ry="3.5" fill="#F4E8D7" />
          </svg>
        </div>

        <!-- Text Always Displayed -->
        <div class="mt-3 text-center">
          <span class="text-xs font-mono font-bold text-neutral-900 tracking-tight block group-hover:text-[#00ADD8] transition-colors">
            Golang
          </span>
          <span class="text-[10px] font-mono text-neutral-500 block">
            Microservices
          </span>
        </div>

        <!-- Floating Tooltip on Hover -->
        <div class="absolute -top-10 opacity-0 group-hover:opacity-100 transition-all duration-150 pointer-events-none z-20 hidden md:block">
          <div class="bg-neutral-950 text-white text-[11px] font-mono px-2.5 py-1 rounded shadow-lg whitespace-nowrap">
            Golang · Concurrency & Streaming
          </div>
        </div>
      </div>

      <!-- 2. Java (Distinct Java Coffee Cup with Steam Trails) -->
      <div
        class="group relative bg-white rounded-2xl border-2 border-neutral-200/80 hover:border-[#E76F00] hover:shadow-[0_4px_20px_rgba(231,111,0,0.18)] hover:-translate-y-1 transition-all duration-200 p-4 sm:p-5 flex flex-col items-center justify-center min-h-[145px] sm:min-h-[160px] cursor-pointer"
        @click="openModal"
      >
        <!-- Distinct Java Icon -->
        <div class="transition-transform duration-200 group-hover:scale-105">
          <svg viewBox="0 0 64 64" class="w-14 h-14" fill="none">
            <!-- Red/Orange Steam Plumes -->
            <path d="M33 5c3 4-2 7.5-1 11.5 2.5-3 5-5 2.5-9.5-1-1-1-2-.5-2z" fill="#E76F00" />
            <path d="M26 8c2.5 3.5-1.5 6 0 10 2.5-3.5 5-5 1.5-8-1-1-1-2-.5-2z" fill="#E76F00" />
            <path d="M41 12c2.5 3-1 5 0 8 2.5-2.5 4-4 1.5-6.5-1-1-1-2-.5-2z" fill="#E76F00" />
            <!-- Java Cup Body -->
            <path d="M18 27c0 0-2 8 8 10 9 2 20 2 24-4 2-3 2-6 2-6H18z" fill="#5382A1" />
            <!-- Java Cup Lower Contour -->
            <path d="M14 39c0 0 4 9 18 9 15 0 19-8 19-8s-3 3-10 4c-8 1-17 0-25-4.5z" fill="#5382A1" />
            <!-- Java Cup Handle -->
            <path d="M47 28c3 0 7 2 6 5.5-1 3.5-6 4.5-6 4.5s4-.8 5-3.5c.8-1.8-.8-3.5-4.5-3.5v-3z" fill="#5382A1" />
            <!-- Red Bottom Accent Swoosh -->
            <path d="M11 50c0 0 10 5.5 25 5.5 17 0 23-4.5 23-4.5s-6 2-15 2c-11 0-21-2-33-3z" fill="#E76F00" />
            <!-- Saucer Base -->
            <path d="M13 55c11 3 30 3 41 0 4-1 4-2 4-2s-7 2.5-24 2.5c-15 0-24-1.8-24-1.8s0 .8 3 1.3z" fill="#5382A1" />
          </svg>
        </div>

        <!-- Text Always Displayed -->
        <div class="mt-3 text-center">
          <span class="text-xs font-mono font-bold text-neutral-900 tracking-tight block group-hover:text-[#E76F00] transition-colors">
            Java
          </span>
          <span class="text-[10px] font-mono text-neutral-500 block">
            Spring Boot
          </span>
        </div>

        <!-- Floating Tooltip on Hover -->
        <div class="absolute -top-10 opacity-0 group-hover:opacity-100 transition-all duration-150 pointer-events-none z-20 hidden md:block">
          <div class="bg-neutral-950 text-white text-[11px] font-mono px-2.5 py-1 rounded shadow-lg whitespace-nowrap">
            Java · Spring Boot & Kafka Streams
          </div>
        </div>
      </div>

      <!-- 3. Apache Kafka -->
      <div
        class="group relative bg-white rounded-2xl border-2 border-neutral-200/80 hover:border-neutral-900 hover:shadow-[0_4px_20px_rgba(0,0,0,0.14)] hover:-translate-y-1 transition-all duration-200 p-4 sm:p-5 flex flex-col items-center justify-center min-h-[145px] sm:min-h-[160px] cursor-pointer"
        @click="openModal"
      >
        <div class="transition-transform duration-200 group-hover:scale-105">
          <svg viewBox="0 0 64 64" class="w-14 h-14" fill="none">
            <!-- Connecting lines -->
            <path d="M18 32h14" stroke="#231F20" stroke-width="3.5" stroke-linecap="round" />
            <path d="M32 32l13-14" stroke="#231F20" stroke-width="3.5" stroke-linecap="round" />
            <path d="M32 32l13 14" stroke="#231F20" stroke-width="3.5" stroke-linecap="round" />
            <!-- Outer nodes -->
            <circle cx="18" cy="32" r="7.5" fill="#231F20" />
            <circle cx="45" cy="18" r="7.5" fill="#231F20" />
            <circle cx="45" cy="46" r="7.5" fill="#231F20" />
            <!-- Center hub -->
            <circle cx="32" cy="32" r="5" fill="#231F20" />
            <!-- Inner white dots -->
            <circle cx="18" cy="32" r="3" fill="#ffffff" />
            <circle cx="45" cy="18" r="3" fill="#ffffff" />
            <circle cx="45" cy="46" r="3" fill="#ffffff" />
          </svg>
        </div>

        <!-- Text Always Displayed -->
        <div class="mt-3 text-center">
          <span class="text-xs font-mono font-bold text-neutral-900 tracking-tight block group-hover:text-neutral-950 transition-colors">
            Apache Kafka
          </span>
          <span class="text-[10px] font-mono text-neutral-500 block">
            Event Streaming
          </span>
        </div>

        <!-- Floating Tooltip on Hover -->
        <div class="absolute -top-10 opacity-0 group-hover:opacity-100 transition-all duration-150 pointer-events-none z-20 hidden md:block">
          <div class="bg-neutral-950 text-white text-[11px] font-mono px-2.5 py-1 rounded shadow-lg whitespace-nowrap">
            Apache Kafka & Redpanda Streaming
          </div>
        </div>
      </div>

      <!-- 4. AWS -->
      <div
        class="group relative bg-white rounded-2xl border-2 border-neutral-200/80 hover:border-[#FF9900] hover:shadow-[0_4px_20px_rgba(255,153,0,0.18)] hover:-translate-y-1 transition-all duration-200 p-4 sm:p-5 flex flex-col items-center justify-center min-h-[145px] sm:min-h-[160px] cursor-pointer"
        @click="openModal"
      >
        <div class="transition-transform duration-200 group-hover:scale-105">
          <svg viewBox="0 0 64 64" class="w-14 h-14" fill="none">
            <!-- AWS Text -->
            <text x="32" y="32" font-family="'Open Sans', system-ui, sans-serif" font-weight="900" font-size="21" fill="#232F3E" text-anchor="middle" letter-spacing="-0.5">aws</text>
            <!-- Orange smile curved arrow -->
            <path d="M14 39c10 7 26 7 35 0" stroke="#FF9900" stroke-width="3" stroke-linecap="round" />
            <path d="M45 34l5 5-6 3" fill="#FF9900" />
          </svg>
        </div>

        <!-- Text Always Displayed -->
        <div class="mt-3 text-center">
          <span class="text-xs font-mono font-bold text-neutral-900 tracking-tight block group-hover:text-[#FF9900] transition-colors">
            AWS
          </span>
          <span class="text-[10px] font-mono text-neutral-500 block">
            Cloud Infra
          </span>
        </div>

        <!-- Floating Tooltip on Hover -->
        <div class="absolute -top-10 opacity-0 group-hover:opacity-100 transition-all duration-150 pointer-events-none z-20 hidden md:block">
          <div class="bg-neutral-950 text-white text-[11px] font-mono px-2.5 py-1 rounded shadow-lg whitespace-nowrap">
            AWS · EC2, RDS, IAM & Cloud
          </div>
        </div>
      </div>

      <!-- 5. Machine Learning -->
      <div
        class="group relative bg-white rounded-2xl border-2 border-neutral-200/80 hover:border-[#6366F1] hover:shadow-[0_4px_20px_rgba(99,102,241,0.18)] hover:-translate-y-1 transition-all duration-200 p-4 sm:p-5 flex flex-col items-center justify-center min-h-[145px] sm:min-h-[160px] cursor-pointer"
        @click="openModal"
      >
        <div class="transition-transform duration-200 group-hover:scale-105">
          <svg viewBox="0 0 64 64" class="w-14 h-14" fill="none">
            <!-- Antenna with glowing transmitter tip -->
            <path d="M32 4v6" stroke="#6366F1" stroke-width="2.5" stroke-linecap="round" />
            <circle cx="32" cy="4" r="2.5" fill="#8B5CF6" />

            <!-- Upper Glass Dome Cranium -->
            <path d="M16 26c0-9.5 7.2-16 16-16s16 6.5 16 16" stroke="#6366F1" stroke-width="2.5" stroke-linecap="round" fill="#F5F3FF" fill-opacity="0.75" />

            <!-- Brain Hemispheres inside Glass Dome -->
            <!-- Left Brain -->
            <path d="M31 16c-3.2 0-6 1.8-6 4.8 0 1.2.5 2.2 1.3 3-.8.6-1.3 1.5-1.3 2.5 0 2 2.2 3.2 5 3.2h1V16z" fill="#C4B5FD" stroke="#6366F1" stroke-width="1.5" />
            <!-- Right Brain -->
            <path d="M33 16c3.2 0 6 1.8 6 4.8 0 1.2-.5 2.2-1.3 3 .8.6 1.3 1.5 1.3 2.5 0 2-2.2 3.2-5 3.2h-1V16z" fill="#C4B5FD" stroke="#6366F1" stroke-width="1.5" />
            <!-- Neural Folds -->
            <path d="M28 20c1.5 1 1.5 2.8 0 3.8" stroke="#4F46E5" stroke-width="1.3" stroke-linecap="round" />
            <path d="M36 20c-1.5 1-1.5 2.8 0 3.8" stroke="#4F46E5" stroke-width="1.3" stroke-linecap="round" />
            <!-- Synaptic Pulsing Spark -->
            <circle cx="32" cy="21" r="1.6" fill="#FBBF24" />

            <!-- Lower Robot Head Shell -->
            <path d="M16 26v18c0 4.4 3.6 8 8 8h16c4.4 0 8-3.6 8-8V26H16z" fill="#EEF2FF" stroke="#6366F1" stroke-width="2.5" stroke-linejoin="round" />

            <!-- Ear Sensor Bolts -->
            <rect x="11" y="28" width="5" height="10" rx="2" fill="#8B5CF6" />
            <rect x="48" y="28" width="5" height="10" rx="2" fill="#8B5CF6" />

            <!-- Cybernetic Glowing LED Eyes -->
            <rect x="21" y="33" width="7" height="5" rx="2" fill="#06B6D4" />
            <rect x="36" y="33" width="7" height="5" rx="2" fill="#06B6D4" />

            <!-- Digital Speaker / Grill Mouth -->
            <path d="M25 43h14" stroke="#6366F1" stroke-width="2" stroke-linecap="round" />
            <path d="M27 46.5h10" stroke="#6366F1" stroke-width="1.5" stroke-linecap="round" stroke-dasharray="2 2" />
          </svg>
        </div>

        <!-- Text Always Displayed -->
        <div class="mt-3 text-center">
          <span class="text-xs font-mono font-bold text-neutral-900 tracking-tight block group-hover:text-[#6366F1] transition-colors">
            Machine Learning
          </span>
          <span class="text-[10px] font-mono text-neutral-500 block">
            PyTorch & RAG
          </span>
        </div>

        <!-- Floating Tooltip on Hover -->
        <div class="absolute -top-10 opacity-0 group-hover:opacity-100 transition-all duration-150 pointer-events-none z-20 hidden md:block">
          <div class="bg-neutral-950 text-white text-[11px] font-mono px-2.5 py-1 rounded shadow-lg whitespace-nowrap">
            Machine Learning · PyTorch & Scikit-Learn
          </div>
        </div>
      </div>

      <!-- 6. Secure System -->
      <div
        class="group relative bg-white rounded-2xl border-2 border-neutral-200/80 hover:border-[#059669] hover:shadow-[0_4px_20px_rgba(5,150,105,0.18)] hover:-translate-y-1 transition-all duration-200 p-4 sm:p-5 flex flex-col items-center justify-center min-h-[145px] sm:min-h-[160px] cursor-pointer"
        @click="openModal"
      >
        <div class="transition-transform duration-200 group-hover:scale-105">
          <svg viewBox="0 0 64 64" class="w-14 h-14" fill="none">
            <!-- Cyber Shield -->
            <path d="M32 9l17 7v15c0 13-8 22-17 26C23 53 15 44 15 31V16l17-7z" fill="#ECFDF5" stroke="#059669" stroke-width="2.5" stroke-linejoin="round" />
            <!-- Lock -->
            <rect x="25" y="28" width="14" height="11" rx="2" fill="#059669" />
            <path d="M28 28v-4a4 4 0 018 0v4" stroke="#059669" stroke-width="2.2" stroke-linecap="round" />
            <circle cx="32" cy="33.5" r="1.5" fill="#ffffff" />
          </svg>
        </div>

        <!-- Text Always Displayed -->
        <div class="mt-3 text-center">
          <span class="text-xs font-mono font-bold text-neutral-900 tracking-tight block group-hover:text-[#059669] transition-colors">
            Secure System
          </span>
          <span class="text-[10px] font-mono text-neutral-500 block">
            Cybersecurity
          </span>
        </div>

        <!-- Floating Tooltip on Hover -->
        <div class="absolute -top-10 opacity-0 group-hover:opacity-100 transition-all duration-150 pointer-events-none z-20 hidden md:block">
          <div class="bg-neutral-950 text-white text-[11px] font-mono px-2.5 py-1 rounded shadow-lg whitespace-nowrap">
            Secure System · DevSecOps & Security
          </div>
        </div>
      </div>
    </div>

    <!-- Modal for Detailed Technical Skills (Attached Image Style) -->
    <Teleport to="body">
      <div
        v-if="showDetailModal"
        class="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-150"
        @click.self="closeModal"
      >
        <div
          class="relative w-full max-w-2xl bg-white rounded-2xl border border-neutral-200 shadow-2xl p-6 sm:p-8 max-h-[85vh] overflow-y-auto space-y-6"
        >
          <!-- Modal Header -->
          <div class="flex items-start justify-between gap-4 pb-3 border-b border-neutral-100">
            <div>
              <div class="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200/60 font-semibold mb-1">
                <Layers class="w-3 h-3 text-emerald-600" />
                <span>{{ skillsConfig.modal.badge }}</span>
              </div>
              <h3 class="text-lg sm:text-xl font-bold text-neutral-950">
                {{ skillsConfig.modal.title }}
              </h3>
              <p class="text-xs text-neutral-500 font-mono mt-0.5">
                {{ skillsConfig.modal.subtitle }}
              </p>
            </div>

            <button
              @click="closeModal"
              class="p-1.5 text-neutral-400 hover:text-neutral-950 hover:bg-neutral-100 rounded-md transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X class="w-4 h-4" />
            </button>
          </div>

          <!-- Modal Body: Categorized Skills from Reference Image -->
          <div class="space-y-4 pt-1">
            <div
              v-for="(cat, idx) in resumeSkills"
              :key="idx"
              class="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4 p-2.5 rounded-lg hover:bg-neutral-50 transition-colors"
            >
              <span class="w-48 shrink-0 text-xs font-mono font-bold text-neutral-900 uppercase tracking-wider">
                {{ cat.category }}
              </span>

              <div class="flex flex-wrap gap-1.5">
                <span
                  v-for="s in cat.skills"
                  :key="s"
                  class="text-xs font-mono px-2.5 py-1 rounded bg-neutral-100 text-neutral-800 border border-neutral-200/70 hover:bg-neutral-200 transition-colors cursor-default"
                >
                  {{ s }}
                </span>
              </div>
            </div>
          </div>

          <!-- Outside of Work / Homelab from Resume -->
          <div class="pt-4 border-t border-neutral-100 space-y-2">
            <h4 class="text-xs uppercase tracking-widest font-mono font-semibold text-neutral-400">
              {{ skillsConfig.modal.interestsTitle }}
            </h4>
            <div class="flex flex-wrap gap-2 pt-1">
              <span
                v-for="interest in outsideInterests"
                :key="interest"
                class="inline-flex items-center gap-1.5 text-xs text-neutral-700 bg-neutral-50 border border-neutral-200/70 px-3 py-1.5 rounded-lg font-mono"
              >
                <span class="w-1.5 h-1.5 rounded-full bg-neutral-400"></span>
                {{ interest }}
              </span>
            </div>
          </div>

          <!-- Modal Footer -->
          <div class="pt-4 border-t border-neutral-100 flex items-center justify-end">
            <button
              @click="closeModal"
              class="px-5 py-2 text-xs font-medium bg-neutral-900 text-white rounded-full hover:bg-neutral-800 transition-colors cursor-pointer shadow-2xs"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </Teleport>
  </section>
</template>
