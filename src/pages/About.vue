<script setup lang="ts">
import { ref, watch, onMounted, onUnmounted } from 'vue';
import {
  Target,
  X,
  Linkedin,
  Github,
  ShieldCheck,
  Zap,
  Layers
} from 'lucide-vue-next';
import { personalInfo, aboutConfig, valueFit } from '../constants/consts';

const showValueModal = ref(false);

const containerRef = ref<HTMLElement | null>(null);
const kafkaRef = ref<HTMLElement | null>(null);
const goRef = ref<HTMLElement | null>(null);
const securityRef = ref<HTMLElement | null>(null);

const path1 = ref('M 80 24 H 190 Q 200 24 200 34 V 62 Q 200 72 190 72 H 165');
const path2 = ref('M 65 72 H 18 Q 8 72 8 82 V 110 Q 8 120 18 120 H 40');

const updateSideArrowPaths = () => {
  if (!containerRef.value || !kafkaRef.value || !goRef.value || !securityRef.value) return;
  const cRect = containerRef.value.getBoundingClientRect();
  const kRect = kafkaRef.value.getBoundingClientRect();
  const gRect = goRef.value.getBoundingClientRect();
  const sRect = securityRef.value.getBoundingClientRect();

  if (cRect.width === 0) return;

  // Kafka right edge center
  const kRightX = Math.round(kRect.right - cRect.left);
  const kCenterY = Math.round(kRect.top - cRect.top + kRect.height / 2);

  // Go / Spring right edge & left edge center
  const gRightX = Math.round(gRect.right - cRect.left);
  const gLeftX = Math.round(gRect.left - cRect.left);
  const gCenterY = Math.round(gRect.top - cRect.top + gRect.height / 2);

  // Security left edge center
  const sLeftX = Math.round(sRect.left - cRect.left);
  const sCenterY = Math.round(sRect.top - cRect.top + sRect.height / 2);

  // Right turnaround point (clamped within container)
  const rightMargin = 6;
  const maxRightContent = Math.max(kRightX, gRightX);
  const rightTurnX = Math.max(
    maxRightContent + 8,
    Math.min(Math.round(cRect.width - rightMargin), maxRightContent + 22)
  );
  const cornerR1 = Math.max(2, Math.min(8, (rightTurnX - maxRightContent) / 2, Math.abs(gCenterY - kCenterY) / 2));

  // Path 1: From right side of Kafka to right side of Go/Spring
  path1.value = `M ${kRightX + 2} ${kCenterY} H ${rightTurnX - cornerR1} Q ${rightTurnX} ${kCenterY} ${rightTurnX} ${kCenterY + cornerR1} V ${gCenterY - cornerR1} Q ${rightTurnX} ${gCenterY} ${rightTurnX - cornerR1} ${gCenterY} H ${gRightX + 5}`;

  // Left turnaround point (clamped within container)
  const leftMargin = 6;
  const minLeftContent = Math.min(gLeftX, sLeftX);
  const leftTurnX = Math.min(
    minLeftContent - 8,
    Math.max(leftMargin, minLeftContent - 22)
  );
  const cornerR2 = Math.max(2, Math.min(8, (minLeftContent - leftTurnX) / 2, Math.abs(sCenterY - gCenterY) / 2));

  // Path 2: From left side of Go/Spring to left side of Security
  path2.value = `M ${gLeftX - 2} ${gCenterY} H ${leftTurnX + cornerR2} Q ${leftTurnX} ${gCenterY} ${leftTurnX} ${gCenterY + cornerR2} V ${sCenterY - cornerR2} Q ${leftTurnX} ${sCenterY} ${leftTurnX + cornerR2} ${sCenterY} H ${sLeftX - 5}`;
};

const closeModal = () => {
  showValueModal.value = false;
};

// Handle Escape key & body scroll lock
const handleKeyDown = (e: KeyboardEvent) => {
  if (e.key === 'Escape' && showValueModal.value) {
    closeModal();
  }
};

watch(showValueModal, (isOpen) => {
  if (isOpen) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
});

let resizeObs: ResizeObserver | null = null;

onMounted(() => {
  window.addEventListener('keydown', handleKeyDown);
  window.addEventListener('resize', updateSideArrowPaths);
  if (containerRef.value) {
    resizeObs = new ResizeObserver(updateSideArrowPaths);
    resizeObs.observe(containerRef.value);
  }
  setTimeout(updateSideArrowPaths, 50);
  setTimeout(updateSideArrowPaths, 250);
  if (document.fonts) {
    document.fonts.ready.then(updateSideArrowPaths);
  }
});

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeyDown);
  window.removeEventListener('resize', updateSideArrowPaths);
  if (resizeObs) resizeObs.disconnect();
  document.body.style.overflow = '';
});
</script>

<template>
  <section class="space-y-10 sm:space-y-12">
    <!-- Main Cozydiadora-Style Hero Canvas -->
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
      <!-- Left Column: Headline, Bio & Primary CTA -->
      <div class="lg:col-span-6 space-y-6 text-left scroll-reveal">
        <!-- Status Pill: "● AVAILABLE FOR WORK" -->
        <div>
          <span
            class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 border border-cyan-200/70 text-cyan-800 font-mono text-[11px] font-semibold uppercase tracking-wider shadow-2xs"
          >
            <span class="w-2 h-2 rounded-full bg-cyan-500 animate-pulse"></span>
            AVAILABLE FOR WORK
          </span>
        </div>

        <!-- Big Punchy Headline -->
        <h1
          class="font-sans font-extrabold tracking-tight text-5xl sm:text-6xl md:text-7xl lg:text-[76px] leading-[1.04] text-neutral-950"
        >
          Hi, I’m a<br />
          software<br />
          engineer
        </h1>

        <!-- Subtitle Paragraph -->
        <p class="text-sm sm:text-base text-neutral-600 leading-relaxed max-w-lg">
          {{ aboutConfig.summary }}
        </p>

        <!-- Call to Action Buttons -->
        <div class="flex flex-wrap items-center gap-3 pt-2">
          <a
            href="#contact"
            class="inline-flex items-center gap-2 bg-neutral-950 text-white px-6 py-3 rounded-full text-xs sm:text-sm font-semibold hover:bg-neutral-800 transition-all shadow-md hover:shadow-lg cursor-pointer"
          >
            <span>{{ aboutConfig.contactCta }}</span>
          </a>

          <button
            @click="showValueModal = true"
            class="inline-flex items-center gap-1.5 px-5 py-3 rounded-full border border-neutral-300 text-neutral-800 hover:text-neutral-950 hover:border-neutral-400 hover:bg-neutral-50 text-xs sm:text-sm font-semibold transition-all cursor-pointer"
          >
            <Target class="w-3.5 h-3.5 text-neutral-500" />
            <span>{{ aboutConfig.valueCta }}</span>
          </button>
        </div>
      </div>

      <!-- Right Column: 2x2 Bento Cluster -->
      <div class="lg:col-span-6 grid grid-cols-2 gap-3 sm:gap-4 scroll-reveal scroll-delay-2">
        <!-- Bento 1: Specialty & Architecture Card -->
        <div
          class="col-span-1 bg-white rounded-2xl p-3 sm:p-5 border border-neutral-200/80 shadow-[0_2px_10px_rgba(0,0,0,0.03)] flex flex-col justify-between h-[220px] sm:h-[250px] group hover:border-neutral-300 transition-all"
        >
          <!-- Micro Architecture preview with side serpentine flow -->
          <div
            ref="containerRef"
            class="relative bg-neutral-50 rounded-xl p-2 sm:p-3.5 border border-neutral-100 flex flex-col justify-between items-center h-[142px] sm:h-[158px] overflow-hidden select-none"
          >
            <!-- SVG Circuit Tracks & Side Flow Arrows -->
            <svg class="absolute inset-0 w-full h-full pointer-events-none z-0">
              <defs>
                <marker
                  id="side-arrow-head-1"
                  viewBox="0 0 6 6"
                  refX="5"
                  refY="3"
                  markerWidth="6"
                  markerHeight="6"
                  orient="auto"
                >
                  <path
                    d="M 1 1 L 5 3 L 1 5"
                    fill="none"
                    stroke="#2563eb"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="marker-head-1"
                  />
                </marker>
                <marker
                  id="side-arrow-head-2"
                  viewBox="0 0 6 6"
                  refX="5"
                  refY="3"
                  markerWidth="6"
                  markerHeight="6"
                  orient="auto"
                >
                  <path
                    d="M 1 1 L 5 3 L 1 5"
                    fill="none"
                    stroke="#059669"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="marker-head-2"
                  />
                </marker>
              </defs>

              <!-- Base circuit lines (faint) -->
              <path :d="path1" fill="none" stroke="#e2e8f0" stroke-width="1.5" />
              <path :d="path2" fill="none" stroke="#e2e8f0" stroke-width="1.5" />

              <!-- Animated Flow Arrows with markers -->
              <path
                :d="path1"
                fill="none"
                stroke-width="1.75"
                stroke-linecap="round"
                class="side-arrow-track-1"
                marker-end="url(#side-arrow-head-1)"
              />
              <path
                :d="path2"
                fill="none"
                stroke-width="1.75"
                stroke-linecap="round"
                class="side-arrow-track-2"
                marker-end="url(#side-arrow-head-2)"
              />
            </svg>

            <!-- Step 1: Kafka (Right port connects to Go/Spring) -->
            <div
              ref="kafkaRef"
              class="relative z-10 flex items-center gap-1 sm:gap-1.5 px-1.5 sm:px-2.5 py-0.5 sm:py-1 rounded bg-white/90 border border-neutral-200/70 shadow-2xs font-mono text-[10px] sm:text-xs text-neutral-800"
            >
              <Zap class="w-3 h-3 sm:w-3.5 sm:h-3.5 text-amber-500 shrink-0" />
              <span class="font-medium text-neutral-900">{{ aboutConfig.architectureCard.pipeline[0].name }}</span>
            </div>

            <!-- Step 2: Go / Spring (Receives on right, sends on left) -->
            <div
              ref="goRef"
              class="relative z-10 flex items-center gap-1 sm:gap-1.5 px-1.5 sm:px-2.5 py-0.5 sm:py-1 rounded bg-white/90 border border-neutral-200/70 shadow-2xs font-mono text-[10px] sm:text-xs text-neutral-800"
            >
              <Layers class="w-3 h-3 sm:w-3.5 sm:h-3.5 text-blue-500 shrink-0" />
              <span class="font-medium text-neutral-900">{{ aboutConfig.architectureCard.pipeline[1].name }}</span>
            </div>

            <!-- Step 3: Security (Receives on left) -->
            <div
              ref="securityRef"
              class="relative z-10 flex items-center gap-1 sm:gap-1.5 px-1.5 sm:px-2.5 py-0.5 sm:py-1 rounded bg-white/90 border border-neutral-200/70 shadow-2xs font-mono text-[10px] sm:text-xs text-neutral-800"
            >
              <ShieldCheck class="w-3 h-3 sm:w-3.5 sm:h-3.5 text-emerald-500 shrink-0" />
              <span class="font-medium text-neutral-900">{{ aboutConfig.architectureCard.pipeline[2].name }}</span>
            </div>
          </div>

          <!-- Bottom Pill Badge (Matching original preferred design) -->
          <div>
            <div class="inline-flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-0.5 sm:py-1.5 rounded-full bg-neutral-100 text-neutral-800 font-mono text-[9px] sm:text-xs font-medium max-w-full">
              <span class="w-1.5 h-1.5 rounded-full bg-neutral-900 shrink-0"></span>
              <span class="truncate">{{ aboutConfig.architectureCard.tag }}</span>
            </div>
          </div>
        </div>

        <!-- Bento 2: Portrait Card -->
        <div
          class="col-span-1 rounded-2xl overflow-hidden border border-neutral-200/80 shadow-[0_2px_10px_rgba(0,0,0,0.03)] bg-gradient-to-b from-neutral-100 to-neutral-200/70 h-[220px] sm:h-[250px] relative group"
        >
          <img
            :src="personalInfo.profilePic"
            :alt="personalInfo.name"
            class="w-full h-full object-cover object-[center_35%] transition-transform duration-300 group-hover:scale-105"
          />
          <!-- Location Badge at Top Right -->
          <div class="absolute top-2 right-2 bg-black/50 backdrop-blur-sm px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full text-[10px] sm:text-[11px] font-mono font-medium text-white border border-white/10 shadow-xs flex items-center gap-1 sm:gap-1.5">
            <span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            <span>{{ personalInfo.location }}</span>
          </div>
        </div>

        <!-- Bento 3: Recent Brands / Teams Card -->
        <div
          class="col-span-2 sm:col-span-1 rounded-2xl p-4 sm:p-5 shadow-sm bg-gradient-to-br from-indigo-500 via-indigo-600 to-blue-600 text-white flex flex-col justify-between h-[140px] sm:h-[160px]"
        >
          <p class="text-xs font-medium text-indigo-100 leading-snug">
            {{ aboutConfig.teamsCard.title }}
          </p>

          <div class="flex flex-wrap items-center gap-2 sm:gap-3 pt-2 text-xs font-bold tracking-wider font-mono uppercase text-white/90">
            <span
              v-for="team in aboutConfig.teamsCard.teams"
              :key="team"
              class="bg-white/15 px-2 py-0.5 rounded"
            >
              {{ team }}
            </span>
          </div>
        </div>

        <!-- Bento 4: Profile & Social Circles (LinkedIn, GitHub, LeetCode) -->
        <div
          class="col-span-2 sm:col-span-1 rounded-2xl p-4 sm:p-5 border border-neutral-200/80 bg-neutral-50/70 flex items-center justify-center h-[110px] sm:h-[160px]"
        >
          <div class="flex items-center justify-center gap-4 sm:gap-5">
            <!-- LinkedIn -->
            <a
              :href="personalInfo.linkedin"
              target="_blank"
              rel="noopener noreferrer"
              class="w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-white border border-neutral-200/80 shadow-2xs hover:shadow-md hover:scale-105 transition-all flex items-center justify-center text-[#0A66C2] group cursor-pointer"
              title="LinkedIn"
            >
              <Linkedin class="w-5 h-5 group-hover:scale-110 transition-transform" />
            </a>

            <!-- GitHub -->
            <a
              :href="personalInfo.github"
              target="_blank"
              rel="noopener noreferrer"
              class="w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-white border border-neutral-200/80 shadow-2xs hover:shadow-md hover:scale-105 transition-all flex items-center justify-center text-neutral-900 group cursor-pointer"
              title="GitHub"
            >
              <Github class="w-5 h-5 group-hover:scale-110 transition-transform" />
            </a>

            <!-- LeetCode -->
            <a
              :href="personalInfo.leetcode"
              target="_blank"
              rel="noopener noreferrer"
              class="w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-white border border-neutral-200/80 shadow-2xs hover:shadow-md hover:scale-105 transition-all flex items-center justify-center group cursor-pointer"
              title="LeetCode (spsaroj)"
            >
              <svg viewBox="0 0 24 24" class="w-5 h-5 group-hover:scale-110 transition-transform">
                <path fill="#B3B1B0" d="M22 14.355c0-.742-.564-1.346-1.26-1.346H10.676c-.696 0-1.26.604-1.26 1.346s.563 1.346 1.26 1.346H20.74c.696.001 1.26-.603 1.26-1.346z"/>
                <path fill="#FFA116" d="m13.82 9.176 3.195-3.033c.534-.508.563-1.353.065-1.898a1.36 1.36 0 0 0-1.95-.065L9.08 10.02c-1.383 1.312-2.12 3.092-2.073 5.011.047 1.919.866 3.66 2.308 4.903l4.634 3.99c.563.484 1.408.435 1.892-.128a1.317 1.317 0 0 0-.128-1.893L11.08 17.91c-1.002-.864-1.57-2.074-1.603-3.41-.033-1.334.48-2.57 1.442-3.482l2.899-2.753z"/>
                <path fill="#262626" d="m18.067 19.349-5.188-4.912a1.332 1.332 0 0 1-.033-1.895 1.365 1.365 0 0 1 1.914-.033l5.187 4.912c.535.507.564 1.352.065 1.897a1.36 1.36 0 0 1-1.945.031z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Cozydiadora-Style Mission Banner (Bottom colored strip) -->
    <div
      class="rounded-3xl p-6 sm:p-8 lg:p-10 bg-[#327a86] text-white shadow-md space-y-4 scroll-reveal"
    >
      <div class="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-cyan-200">
        <span class="w-2 h-2 rounded-full bg-cyan-300"></span>
        {{ aboutConfig.mission.badge }}
      </div>

      <h2 class="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-white leading-snug max-w-3xl">
        {{ aboutConfig.mission.headline }}
      </h2>

      <p class="text-xs sm:text-sm text-cyan-100/90 leading-relaxed max-w-3xl pt-1">
        {{ aboutConfig.mission.description }}
      </p>

      <div class="pt-2 flex items-center gap-2 text-xs font-mono text-cyan-100">
        <span
          v-for="tag in aboutConfig.mission.tags"
          :key="tag"
          class="bg-white/15 px-3 py-1 rounded-full"
        >
          {{ tag }}
        </span>
      </div>
    </div>

    <!-- Modal for "Where I Add Value · Engineering Focus" -->
    <Teleport to="body">
      <div
        v-if="showValueModal"
        class="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-150"
        @click.self="closeModal"
      >
        <div
          class="relative w-full max-w-lg bg-white rounded-xl border border-neutral-200 shadow-2xl p-5 sm:p-7 max-h-[85vh] overflow-y-auto space-y-6"
        >
          <!-- Modal Header -->
          <div class="flex items-start justify-between gap-4 pb-3 border-b border-neutral-100">
            <div>
              <h2 class="text-base sm:text-lg font-bold text-neutral-950">
                {{ aboutConfig.valueModal.title }}
              </h2>
              <p class="text-xs font-mono text-neutral-500 mt-0.5">
                {{ aboutConfig.valueModal.subtitle }}
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

          <!-- Modal Body -->
          <div class="space-y-5 text-xs sm:text-sm">
            <div class="space-y-1.5">
              <h3 class="font-semibold text-neutral-950 flex items-center gap-2">
                <span class="w-1.5 h-1.5 rounded-full bg-neutral-900"></span>
                {{ valueFit[0].title }}
              </h3>
              <p class="text-neutral-600 leading-relaxed pl-3.5 border-l border-neutral-200">
                {{ valueFit[0].description }}
              </p>
            </div>

            <div class="space-y-1.5">
              <h3 class="font-semibold text-neutral-950 flex items-center gap-2">
                <span class="w-1.5 h-1.5 rounded-full bg-neutral-900"></span>
                {{ valueFit[1].title }}
              </h3>
              <p class="text-neutral-600 leading-relaxed pl-3.5 border-l border-neutral-200">
                {{ valueFit[1].description }}
              </p>
            </div>

            <div class="space-y-2 pt-1">
              <h3 class="font-semibold text-neutral-950 flex items-center gap-2">
                <span class="w-1.5 h-1.5 rounded-full bg-neutral-900"></span>
                {{ valueFit[2].title }}
              </h3>
              <div class="flex flex-wrap gap-1.5 pl-3.5">
                <span
                  v-for="role in valueFit[2].roles"
                  :key="role"
                  class="text-xs font-mono px-2.5 py-1 rounded bg-neutral-100 text-neutral-800 border border-neutral-200"
                >
                  {{ role }}
                </span>
              </div>
            </div>
          </div>

          <!-- Modal Footer -->
          <div class="pt-4 border-t border-neutral-100 flex items-center justify-end">
            <button
              @click="closeModal"
              class="px-4 py-1.5 text-xs font-medium bg-neutral-900 text-white rounded hover:bg-neutral-800 transition-colors cursor-pointer"
            >
              {{ aboutConfig.valueModal.closeText }}
            </button>
          </div>
        </div>
      </div>
    </Teleport>
  </section>
</template>

<style scoped>
@keyframes dashFlow {
  from {
    stroke-dashoffset: 0;
  }
  to {
    stroke-dashoffset: -16;
  }
}

.side-arrow-track-1 {
  stroke: #2563eb;
  stroke-dasharray: 5 3;
  animation: dashFlow 1.2s linear infinite;
}

.side-arrow-track-2 {
  stroke: #059669;
  stroke-dasharray: 5 3;
  animation: dashFlow 1.2s linear infinite;
}

.marker-head-1 {
  stroke: #2563eb;
}

.marker-head-2 {
  stroke: #059669;
}
</style>
