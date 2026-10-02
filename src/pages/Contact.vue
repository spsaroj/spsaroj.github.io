<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { Mail, Check, Copy, Clock } from 'lucide-vue-next';
import { personalInfo, contactConfig } from '../constants/consts';

const copied = ref(false);
const nzTime = ref('');
let timer: ReturnType<typeof setInterval> | null = null;

const updateTime = () => {
  try {
    nzTime.value = new Intl.DateTimeFormat('en-NZ', {
      timeZone: 'Pacific/Auckland',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    }).format(new Date());
  } catch (e) {
    nzTime.value = '';
  }
};

onMounted(() => {
  updateTime();
  timer = setInterval(updateTime, 1000);
});

onUnmounted(() => {
  if (timer) clearInterval(timer);
});

const handleCopyEmail = () => {
  navigator.clipboard.writeText(personalInfo.email);
  copied.value = true;
  setTimeout(() => {
    copied.value = false;
  }, 2000);
};
</script>

<template>
  <section
    class="rounded-3xl bg-neutral-950 text-white p-8 sm:p-12 md:p-16 border border-neutral-900 shadow-2xl relative overflow-hidden text-center space-y-6 sm:space-y-8 scroll-reveal"
  >
    <!-- Subtle ambient dark glow in background -->
    <div
      class="absolute inset-0 pointer-events-none select-none opacity-25"
      style="background: radial-gradient(ellipse at 50% 15%, rgba(16, 185, 129, 0.35) 0%, rgba(6, 182, 212, 0.15) 50%, transparent 75%);"
    ></div>

    <div class="relative z-10 max-w-3xl mx-auto space-y-5 sm:space-y-6">
      <!-- Big Central Headline -->
      <h2
        class="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-extrabold tracking-tight text-white leading-tight font-sans max-w-2xl mx-auto"
      >
        {{ contactConfig.headlinePrefix }}
        <span
          class="inline-block bg-white text-neutral-950 px-2 sm:px-3 py-0.5 sm:py-1 rounded-xs sm:rounded-sm mx-1 align-baseline whitespace-nowrap shadow-sm"
        >
          {{ contactConfig.highlightLocation }}
        </span>
        {{ contactConfig.headlineSuffix }}
      </h2>

      <!-- Auckland Time directly under headline -->
      <div v-if="nzTime" class="flex justify-center pt-1">
        <div
          class="inline-flex items-center gap-2 text-xs sm:text-sm font-mono text-neutral-300 bg-neutral-900/90 px-4 py-1.5 rounded-full border border-neutral-800 shadow-inner"
        >
          <Clock class="w-3.5 h-3.5 text-emerald-400" />
          <span>{{ contactConfig.locationLabel }}: {{ nzTime }}</span>
        </div>
      </div>

      <!-- Contact Action Buttons -->
      <div class="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
        <!-- "Contact Me" button: opens default email app with email ready to send -->
        <a
          :href="`mailto:${personalInfo.email}?subject=${encodeURIComponent(contactConfig.emailSubject)}`"
          class="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-white text-neutral-950 font-bold text-sm sm:text-base hover:bg-neutral-100 hover:scale-105 active:scale-95 transition-all shadow-lg hover:shadow-xl cursor-pointer"
        >
          <Mail class="w-4 h-4 text-neutral-950" />
          <span>{{ contactConfig.buttonText }}</span>
        </a>

        <!-- Quick Copy Email Button -->
        <button
          @click="handleCopyEmail"
          class="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-neutral-900 hover:bg-neutral-800 text-neutral-300 hover:text-white border border-neutral-800 hover:border-neutral-700 text-xs sm:text-sm font-mono transition-all cursor-pointer"
          :title="copied ? contactConfig.copiedTitle : contactConfig.copyTitle"
        >
          <Check v-if="copied" class="w-4 h-4 text-emerald-400" />
          <Copy v-else class="w-4 h-4 text-neutral-400" />
          <span>{{ copied ? contactConfig.copiedText : personalInfo.email }}</span>
        </button>
      </div>
    </div>
  </section>
</template>
