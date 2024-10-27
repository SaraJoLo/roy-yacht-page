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
  .view{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: end;
    position: sticky;
  }
  .view-controls {
      button {
        background: none;
        border: none;
        cursor: pointer;
        padding: 3px;
        margin: 0 1px;
        opacity: 0.5;
        transition: opacity 0.3s ease;

        &.active {
          opacity: 1;
        }

        img {
          width: 24px;
          height: 24px;
        }
      }
    }
  </style>
  