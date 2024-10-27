<template>
    <div class="load-more-container">
      <button @click="handleClick" class="load-more-button">
        Load more
      </button>
      <Transition name="fade">
        <div v-if="showAlert" class="alert">
          Coming soon!
        </div>
      </Transition>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
  
  const showAlert = ref(false)
  
  const handleClick = () => {
    showAlert.value = true
    setTimeout(() => {
      showAlert.value = false
    }, 3000)
  }
  </script>
  
  <style lang="scss" scoped>
  .load-more-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
  
  .load-more-button {
    padding: 0.5rem 1rem;
    font-size: 1rem;
    font-weight: 500;
    color: #666;
    background-color: #fff;
    border: 2px solid #ccc;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.3s ease;
  
    &:hover {
      border-color: #999;
    }
  
    &:focus {
      outline: none;
    }
  }
  
  .alert {
    padding: 0.5rem 1rem;
    margin-top: 1.25rem;    
  border: 0.0625rem solid;     
  border-radius: 0.25rem;   
    color: #666;
    font-size: 0.9rem;
  }
  
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s ease;
  }
  
  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
  </style>