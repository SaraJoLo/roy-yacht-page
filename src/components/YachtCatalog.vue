<template>
    <div class="yacht-catalog">
      <header class="navbar">
        <div class="titleBox">YACHTS FOR SALE · {{ yachts.length }}</div>
        <YachtGrid :gridView="gridView" @updateGridView="updateGridView" />
      </header>
  
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
  import YachtGrid from "@/components/YachtGrid.vue";
  import type { Yacht } from "@/types/yacht";
  
  const { data, error } = await useFetch("/api/proxy/yacht");
  const yachts = ref<Yacht[]>(data?.value?.data ?? []);
  
  const gridView = ref(true);
  
  const updateGridView = (view: boolean) => {
    gridView.value = view;
  };
  
  const gridClass = computed(() => {
    return {
      "grid-four": gridView.value,
      "grid-two": !gridView.value,
    };
  });
  </script>
  
  <style scoped>
 
  .navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: sticky;
    top: 0;
    padding: 1rem 0;
    background-color: #fff;
    z-index: 10;
    font-size: 1rem;
  }
  
  .yacht-grid {
    display: grid;
    gap: 20px;
    list-style-type: none;
    padding: 0;
    margin-top: 20px;
  }
  
  .yacht-grid.grid-four {
    grid-template-columns: repeat(4, 1fr);
  }
  
  .yacht-grid.grid-two {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 1024px) {
    .yacht-grid.grid-four,
    .yacht-grid.grid-two {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  
  @media (max-width: 768px) {
    .yacht-grid.grid-four,
    .yacht-grid.grid-two {
      grid-template-columns: 1fr;
    }
  }
  
  .titleBox {
    font-size: 1.2em;
    font-weight: 600;
  }
  
  @media (max-width: 480px) {
    .yacht-grid {
    grid-template-columns: 1fr;
  }
  }
</style>