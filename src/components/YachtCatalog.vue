<template>
    <div class="yacht-catalog">
  
      <div v-if="error">
        <p>Error al cargar los yates.</p>
      </div>
      <ul v-else-if="yachts.length > 0" :class="['yacht-grid', gridClass]">
        <YachtCard v-for="yacht in yachts" :key="yacht.id" :yacht="yacht" />
      </ul>
      <p v-else>No hay yates disponibles.</p>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, computed } from "vue";
  import { useFetch } from "nuxt/app";
  import YachtCard from "@/components/YachtCard.vue";
  import type { Yacht } from "@/types/yacht";
  
  const { data, error } = await useFetch("/api/proxy/yacht");
  const yachts = ref<Yacht[]>(data?.value?.data ?? []);
  const gridView = ref(true);
  
  const toggleGridView = () => {
    gridView.value = !gridView.value;
  };
  
  const gridClass = computed(() => {
    return {
      'grid-four': gridView.value,
      'grid-two': !gridView.value
    };
  });
  </script>
  

  <style lang="scss" scoped>
  .yacht-catalog {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
  
    .error-message,
    .no-yachts-message {
      text-align: center;
      font-size: 18px;
      color: #333;
      margin-top: 40px;
    }
  
    .yacht-grid {
      display: grid;
      gap: 20px;
      list-style-type: none;
      padding: 0;
  
      &.grid-four {
        grid-template-columns: repeat(4, 1fr);
      }
  
      &.grid-two {
        grid-template-columns: repeat(2, 1fr);
      }
    }
  }
  
  // Responsive design
  @media (max-width: 1200px) {
    .yacht-catalog {
      .yacht-grid {
        &.grid-four {
          grid-template-columns: repeat(3, 1fr);
        }
      }
    }
  }
  
  @media (max-width: 992px) {
    .yacht-catalog {
      .yacht-grid {
        &.grid-four,
        &.grid-two {
          grid-template-columns: repeat(2, 1fr);
        }
      }
    }
  }
  
  @media (max-width: 768px) {
    .yacht-catalog {
      .yacht-grid {
        &.grid-four,
        &.grid-two {
          grid-template-columns: 1fr;
        }
      }
    }
  }
  </style>
  