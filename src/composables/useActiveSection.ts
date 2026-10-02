import { ref } from 'vue';

export type SectionId = 'overview' | 'timeline' | 'skills' | 'contact';

const activeSection = ref<SectionId>('overview');
const scrolled = ref(false);
const showFixedIdentity = ref(false);

export function useActiveSection() {
  const updateScroll = () => {
    const currentY = window.scrollY;
    scrolled.value = currentY > 20;
    showFixedIdentity.value = currentY > 160;

    // Track active section between overview, timeline, skills, contact
    const sectionIds: SectionId[] = ['overview', 'timeline', 'skills', 'contact'];
    const scrollPos = currentY + 220;

    for (let i = sectionIds.length - 1; i >= 0; i--) {
      const id = sectionIds[i];
      const el = document.getElementById(id);
      if (el && scrollPos >= el.offsetTop) {
        activeSection.value = id;
        break;
      }
    }
  };

  return {
    activeSection,
    scrolled,
    showFixedIdentity,
    updateScroll
  };
}
