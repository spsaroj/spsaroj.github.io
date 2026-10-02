<script setup lang="ts">
import { ref, watch, onMounted, onUnmounted } from 'vue';
import { X, ExternalLink, GraduationCap, Briefcase } from 'lucide-vue-next';
import { timelineColumns, timelineConfig } from '../constants/consts';

type TimelineItem = (typeof timelineColumns)[number]['items'][number];

const selectedItem = ref<TimelineItem | null>(null);

const openDetail = (item: TimelineItem) => {
  selectedItem.value = item;
};

const closeDetail = () => {
  selectedItem.value = null;
};

// Handle Escape key & body scroll lock
const handleKeyDown = (e: KeyboardEvent) => {
  if (e.key === 'Escape' && selectedItem.value) {
    closeDetail();
  }
};

watch(selectedItem, (item) => {
  if (item) {
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
  <section class="space-y-12">
    <!-- Header matching reference design -->
    <div class="text-center space-y-3 scroll-reveal">
      <h2 class="text-3xl sm:text-4xl md:text-5xl font-sans font-bold text-neutral-900 tracking-tight">
        {{ timelineConfig.title }}
      </h2>

      <!-- Subtle Color Legend -->
      <div class="flex items-center justify-center gap-5 text-xs font-mono">
        <span
          v-for="leg in timelineConfig.legend"
          :key="leg.label"
          :class="[
            'inline-flex items-center gap-1.5 font-medium',
            leg.type === 'education' ? 'text-emerald-700' : 'text-neutral-900'
          ]"
        >
          <span
            :class="[
              'w-2 h-2 rounded-full',
              leg.type === 'education' ? 'bg-emerald-600' : 'bg-neutral-950'
            ]"
          ></span>
          {{ leg.label }}
        </span>
      </div>
      <p class="text-xs text-neutral-400 font-mono">
        {{ timelineConfig.hint }}
      </p>
    </div>

    <!-- 3-Column Timeline Layout -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 pt-4">
      <div
        v-for="(col, idx) in timelineColumns"
        :key="col.period"
        :class="['space-y-8 scroll-reveal', `scroll-delay-${idx + 1}`]"
      >
        <!-- Column Date Header -->
        <div>
          <span class="text-xs sm:text-sm text-neutral-400 tracking-wider block font-medium">
            {{ col.period }}
          </span>
        </div>

        <!-- Column Items -->
        <div class="space-y-7 sm:space-y-9">
          <div
            v-for="item in col.items"
            :key="item.id"
            class="group text-left"
          >
            <!-- Title with color-coded distinction and click to open modal -->
            <button
              @click="openDetail(item)"
              :class="[
                'text-lg sm:text-xl font-medium tracking-tight text-left block transition-colors cursor-pointer group-hover:underline underline-offset-4',
                item.type === 'education'
                  ? 'text-emerald-700 hover:text-emerald-900'
                  : 'text-neutral-950 hover:text-neutral-600'
              ]"
              :title="`Click to view details for ${item.title}`"
            >
              {{ item.title }}
            </button>

            <!-- Institution / Company / Location Subtitle -->
            <p class="text-xs sm:text-sm text-neutral-500 font-normal mt-1">
              {{ item.institution }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Detailed Modal for Degree or Job Role -->
    <Teleport to="body">
      <div
        v-if="selectedItem"
        class="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-150"
        @click.self="closeDetail"
      >
        <div
          class="relative w-full max-w-xl bg-white rounded-xl border border-neutral-200 shadow-2xl p-5 sm:p-7 max-h-[85vh] overflow-y-auto space-y-6"
        >
          <!-- Modal Header -->
          <div class="flex items-start justify-between gap-4 pb-3 border-b border-neutral-100">
            <div>
              <!-- Type Badge -->
              <span
                :class="[
                  'inline-flex items-center gap-1 text-[11px] font-mono px-2 py-0.5 rounded-full font-medium mb-1.5',
                  selectedItem.type === 'education'
                    ? 'bg-emerald-50 text-emerald-800 border border-emerald-200/60'
                    : 'bg-neutral-100 text-neutral-800 border border-neutral-200'
                ]"
              >
                <GraduationCap v-if="selectedItem.type === 'education'" class="w-3 h-3" />
                <Briefcase v-else class="w-3 h-3" />
                <span>{{ selectedItem.type === 'education' ? 'Academic Degree' : 'Work Experience' }}</span>
              </span>

              <h3 class="text-lg sm:text-xl font-bold text-neutral-950">
                {{ selectedItem.title }}
              </h3>

              <div class="flex items-center gap-2 mt-0.5">
                <span class="text-sm font-semibold text-neutral-700">
                  {{ selectedItem.institution }}
                </span>
                <a
                  v-if="'website' in selectedItem && selectedItem.website"
                  :href="selectedItem.website"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-neutral-400 hover:text-neutral-900 transition-colors"
                  aria-label="Visit website"
                >
                  <ExternalLink class="w-3.5 h-3.5" />
                </a>
              </div>

              <p class="text-xs font-mono text-neutral-400 mt-1">
                {{ selectedItem.location }} · {{ selectedItem.period }}
              </p>
            </div>

            <button
              @click="closeDetail"
              class="p-1.5 text-neutral-400 hover:text-neutral-950 hover:bg-neutral-100 rounded-md transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X class="w-4 h-4" />
            </button>
          </div>

          <!-- Modal Body for Experience -->
          <div v-if="selectedItem.type === 'experience'" class="space-y-4 text-xs sm:text-sm">
            <div>
              <h4 class="text-xs uppercase tracking-widest font-mono font-semibold text-neutral-400 mb-1.5">
                Overview
              </h4>
              <p class="text-neutral-700 leading-relaxed">
                {{ 'summary' in selectedItem ? selectedItem.summary : '' }}
              </p>
            </div>

            <div v-if="'highlights' in selectedItem && selectedItem.highlights">
              <h4 class="text-xs uppercase tracking-widest font-mono font-semibold text-neutral-400 mb-2">
                Key Contributions & Achievements
              </h4>
              <ul class="space-y-2 list-disc list-outside ml-4 text-neutral-700">
                <li
                  v-for="(highlight, i) in selectedItem.highlights"
                  :key="i"
                  class="leading-relaxed"
                >
                  {{ highlight }}
                </li>
              </ul>
            </div>

            <div v-if="'tech' in selectedItem && selectedItem.tech" class="pt-2">
              <h4 class="text-xs uppercase tracking-widest font-mono font-semibold text-neutral-400 mb-2">
                Technologies & Tools
              </h4>
              <div class="flex flex-wrap gap-1.5">
                <span
                  v-for="t in selectedItem.tech"
                  :key="t"
                  class="text-xs font-mono px-2 py-0.5 rounded bg-neutral-100 text-neutral-800 border border-neutral-200"
                >
                  {{ t }}
                </span>
              </div>
            </div>
          </div>

          <!-- Modal Body for Education -->
          <div v-else class="space-y-4 text-xs sm:text-sm">
            <div>
              <h4 class="text-xs uppercase tracking-widest font-mono font-semibold text-neutral-400 mb-1.5">
                Program & Relevance
              </h4>
              <p class="text-neutral-700 leading-relaxed">
                {{ 'details' in selectedItem ? selectedItem.details : '' }}
              </p>
            </div>

            <div v-if="'focus' in selectedItem && selectedItem.focus" class="pt-2">
              <h4 class="text-xs uppercase tracking-widest font-mono font-semibold text-neutral-400 mb-2">
                Core Focus Areas
              </h4>
              <div class="flex flex-wrap gap-1.5">
                <span
                  v-for="item in selectedItem.focus"
                  :key="item"
                  class="text-xs font-mono px-2 py-1 rounded bg-emerald-50 text-emerald-900 border border-emerald-200/80"
                >
                  {{ item }}
                </span>
              </div>
            </div>
          </div>

          <!-- Modal Footer -->
          <div class="pt-4 border-t border-neutral-100 flex items-center justify-end">
            <button
              @click="closeDetail"
              class="px-4 py-1.5 text-xs font-medium bg-neutral-900 text-white rounded hover:bg-neutral-800 transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </Teleport>
  </section>
</template>
