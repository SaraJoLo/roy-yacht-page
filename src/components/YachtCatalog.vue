<template>
  <div class="yacht-catalog">
    <header class="navbar">
      <div class="titleBox">YACHTS FOR SALE · {{ yachts.length }}</div>
      <div class="yacht-grid-selector">
        <YachtGrid :gridView="gridView" @updateGridView="updateGridView" class="gridClass" />
      </div>
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
/* Navbar styling */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  background-color: white; /* Set to a plain white background */
  position: sticky;
  top: 0;
  z-index: 10;
}

.titleBox {
  font-size: 1.2rem;
  color: #333;
}


.yacht-grid-selector {
  display: flex;
  align-items: center;
  gap: 10px;
}
.yacht-grid {
  display: grid;
  gap: 20px;
  list-style-type: none;
  padding: 0;
}

.yacht-grid.grid-four {
  grid-template-columns: repeat(4, 1fr);
}

.yacht-grid.grid-two {
  grid-template-columns: repeat(2, 1fr);
}
</style>