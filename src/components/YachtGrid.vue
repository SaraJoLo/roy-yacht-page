<template>
    <div class="view">
        <p>| View</p>
    </div>
        <div class="view-controls">
        
      <button @click="toggleGridView(true)" :class="{ active: gridView === true }">
        <img src="/GridForFour.png" alt="4 column grid" />
      </button>
      <button @click="toggleGridView(false)" :class="{ active: gridView === false }">
        <img src="/GridForTwo.png" alt="2 column grid" />
      </button>
    </div>
  </template>
  
  <script setup lang="ts">
  import { defineProps, defineEmits } from "vue";
  
  const props = defineProps<{
    gridView: boolean;
  }>();
  
  const emit = defineEmits<{
    (e: 'updateGridView', view: boolean): void;
  }>();
  
  const toggleGridView = (view: boolean) => {
    emit('updateGridView', view);
  };
  </script>
  
<style scoped>
*{
  color:#676778;
}
.view-controls {
    button {
      background: none;
      border: none;
      cursor: pointer;
      padding: 0.1875rem;
      margin: 0 0.0625rem;
      opacity: 0.5;
      transition: opacity 0.3s ease;
  
      &.active {
        opacity: 1;
      }
  
      img {
        width: 1.5rem;
        height: 1.5rem;
      }
    }
}
</style>
  