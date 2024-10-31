<template>
  <div class="yacht-catalog">
    <header class="navbar">
      <div class="titleBox">{{ yachts.length }}</div>
      <div class="yacht-grid-selector">
        <YachtGrid :gridView="gridView" @updateGridView="updateGridView" class="gridClass" />
      </div>
    </header>

    <div v-if="error">
      <p>Error.</p>
    </div>
    <ul v-else-if="yachts.length > 0" :class="['yacht-grid', gridClass]">
      <YachtCard v-for="yacht in yachts" :key="yacht.id" :yacht="yacht" />
    </ul>
    <p v-else>No available yachts.</p>
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
  justify-content: space-between;
  align-items: center;
  padding: 0;
  background-color: white;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: space-between;
    padding-top: 14px;
    padding-left: 12px;
    gap: 0.625rem;
    
  }
}

.titleBox {
  font-size: 1.2rem;
  font-weight: 400;
  color: rgba(50, 51, 73, 1);

  &::before {
    content: "YACHTS FOR SALE · ";
  }
 
  @media (max-width: 768px) {
    &::before {
      content: "BUY ";
    }
    &::after {
    content: " · " attr(data-count) " Yachts";
  }
  }
}

.yacht-grid-selector {
  display: flex;
  align-items: center;
  gap: 0.625rem;

  @media (max-width: 768px) {
    display: none;
  }
}

.yacht-grid {
  display: grid;
  gap: 0.1rem;
  list-style-type: none;
  padding: 0;
  
}

.yacht-grid.grid-four {
  grid-template-columns: repeat(4, 1fr);
}

.yacht-grid.grid-two {
  grid-template-columns: repeat(2, 1fr);
}

@media (max-width: 768px) {
  .yacht-grid.grid-four,
  .yacht-grid.grid-two {
    grid-template-columns: 1fr;
  }
}

</style>
