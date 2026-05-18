
import { ref, computed } from 'vue';
import { movements, type Movement, type Phase } from './TimelineOvaView.data';

export function useTimelineOva() {
  // [S] STATE
  const isDetailOpen = ref(false);
  const selectedMovement = ref<Movement | null>(null);
  const currentPhase = ref<Phase>('EXPLORE');
  const selectedMovementsIds = ref<string[]>([]);
  const reflectionData = ref({
    selectedMovement: "",
    contemporaryExample: "",
    content: "",
  });
  const scrollContainer = ref<HTMLElement | null>(null);

  // [P] PROCESSING
  const isSelected = (name: string) => selectedMovementsIds.value.includes(name);

  const toggleSelection = (name: string) => {
    const index = selectedMovementsIds.value.indexOf(name);
    if (index === -1) {
      selectedMovementsIds.value.push(name);
    } else {
      selectedMovementsIds.value.splice(index, 1);
    }
  };

  const scrollToReflection = () => {
    document
      .querySelector(".reflection-module")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const openDetail = (movement: Movement) => {
    selectedMovement.value = movement;
    isDetailOpen.value = true;
  };

  const closeDetail = () => {
    isDetailOpen.value = false;
  };

  const publishDesign = () => {
    if (selectedMovementsIds.value.length < 7) {
      alert(`Selecciona al menos 7 movimientos para publicar (llevas ${selectedMovementsIds.value.length}).`);
      return;
    }
    currentPhase.value = 'PUBLISH';
  };

  const handleHorizontalScroll = (e: WheelEvent) => {
    if (!scrollContainer.value) return;
    e.preventDefault();
    scrollContainer.value.scrollLeft += e.deltaY;
  };

  const exportFullProject = () => {
    window.print();
  };

  // [R] COMPUTED — must be declared before functions that use them
  const wordCount = computed(() => {
    if (!reflectionData.value.content) return 0;
    return reflectionData.value.content.trim().split(/\s+/).length;
  });

  const selectedMovementsObjects = computed(() => {
    return movements.filter(m => selectedMovementsIds.value.includes(m.name));
  });

  const getMovementColor = (movement: Movement) => {
    const period = movement.historicalPeriod.toLowerCase();
    if (period.includes('prehistórico')) return 'zinc';
    if (period.includes('renacimiento')) return 'indigo';
    if (period.includes('barroco')) return 'danger';
    if (period.includes('ilustración') || period.includes('neoclasicismo')) return 'info';
    if (period.includes('revolución industrial') || period.includes('impresionismo')) return 'warning';
    if (period.includes('modernidad') || period.includes('bauhaus')) return 'success';
    if (period.includes('contemporánea') || period.includes('pop art')) return 'primary';
    return 'primary';
  };

  const generateDeliverable = () => {
    if (selectedMovementsIds.value.length < 7) {
      alert("Debes seleccionar al menos 7 movimientos para generar el entregable.");
      return;
    }
    if (wordCount.value > 200) {
      alert("La reflexión excede las 200 palabras permitidas por la guía.");
      return;
    }
    if (!reflectionData.value.selectedMovement || !reflectionData.value.content) {
      alert("Por favor completa los campos de reflexión.");
      return;
    }
    window.print();
  };

  const exportToHtml = async () => {
    const title = document.querySelector(".canvas-title")?.textContent || "Mi Línea de Tiempo";
    
    const toBase64 = (url: string): Promise<string> => {
      return new Promise((resolve) => {
        const img = new Image();
        img.crossOrigin = 'Anonymous';
        img.onload = () => {
          const canvas = document.createElement('canvas');
          canvas.width = img.width;
          canvas.height = img.height;
          const ctx = canvas.getContext('2d');
          ctx?.drawImage(img, 0, 0);
          resolve(canvas.toDataURL('image/png'));
        };
        img.onerror = () => resolve(url);
        img.src = url;
      });
    };

    const movementsWithBase64 = await Promise.all(
      selectedMovementsObjects.value.map(async (m: Movement) => ({
        ...m,
        base64Thumb: await toBase64(m.thumbnail)
      }))
    );

    const exportData = {
      title,
      movements: movementsWithBase64.map((m: Movement & { base64Thumb: string }) => ({
        name: m.name,
        year: m.year,
        shortSummary: m.shortSummary,
        thumbnail: m.base64Thumb,
        color: getMovementColor(m),
        characteristics: m.characteristics.map(c => c.title),
        artists: m.referents.map(r => r.name)
      }))
    };

    const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'timeline-data.json';
    a.click();
  };


  // [R] RESPONSE (computed moved above to fix declaration order)

  return {
    // State
    isDetailOpen,
    selectedMovement,
    currentPhase,
    selectedMovementsIds,
    reflectionData,
    scrollContainer,
    // Processing
    isSelected,
    toggleSelection,
    scrollToReflection,
    openDetail,
    closeDetail,
    publishDesign,
    handleHorizontalScroll,
    exportFullProject,
    generateDeliverable,
    exportToHtml,
    getMovementColor,
    // Response
    wordCount,
    selectedMovementsObjects,
    movements
  };
}

// getMovementColor moved inside the composable for proper scoping

