<template>
  <div class="time-line-wrapper">
    <!-- Main interactive canvas -->
    <main class="canvas-content">
      <header class="timeline-header">
        <span class="header-tag">EXPOSICIÓN VIRTUAL</span>
        <h1 class="canvas-title" contenteditable="true">
          Crónica de la Evolución Creativa
        </h1>
        <p class="header-desc" contenteditable="true">
          Un recorrido a través de los hitos que definieron la estética moderna.
        </p>
      </header>

      <div class="timeline-container-horizontal">
        <NxRichTimeline
          mode="horizontal"
          :line-width="5"
          line-style="solid"
          line-color="indigo"
          draggable
          class="cinematic-rich-timeline"
        >
          <NxRichTimelineItem
            v-for="(movement, index) in selectedMovementsObjects"
            :key="movement.name"
            :title="movement.name"
            :time="movement.year"
            :description="movement.shortSummary"
            :modal-content="movement.analysis"
            :image="movement.thumbnail"
            :item-index="index"
            :active="true"
            :color="getMovementColor(movement)"
            :time-color="getMovementColor(movement)"
            time-position="top"
            valign="center"
            image-size="lg"
            card-size="sm"
            @modal-click="openDetail(movement)"
          />
        </NxRichTimeline>
      </div>
    </main>
  </div>
</template>

<script lang="ts" setup>
import { NxRichTimeline, NxRichTimelineItem } from "@nexus/ui";
import { useTimelineOva } from "./useTimelineOva";

const { selectedMovementsObjects, getMovementColor, openDetail } =
  useTimelineOva();
</script>

<style scoped>
.time-line-wrapper {
  width: 100%;
  min-height: 100vh;
  background: #050507;
  color: #ffffff;
  padding: 40px 20px;
}

.timeline-header {
  text-align: center;
  margin-bottom: 50px;
}

.header-tag {
  background: rgba(99, 102, 241, 0.15);
  border: 1px solid rgba(99, 102, 241, 0.3);
  color: #818cf8;
  padding: 4px 12px;
  border-radius: 100px;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.canvas-title {
  font-size: 2.2rem;
  font-weight: 800;
  margin-top: 10px;
  margin-bottom: 6px;
  background: linear-gradient(135deg, #ffffff 30%, #a1a1aa 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.header-desc {
  color: #a1a1aa;
  font-size: 0.95rem;
}

.timeline-container-horizontal {
  width: 100%;
  overflow: hidden;
  position: relative;
  padding: 20px 0;
}
</style>
