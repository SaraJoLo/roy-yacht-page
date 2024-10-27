
<template>
  <header class="titleBox">
    <div class="royBox">
      <img src="public/Roy.png" alt="Logo" />
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useFetch } from 'nuxt/app';
const yachts = ref([]);
</script>

<style lang="scss" scoped>
.titleBox {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 10;
  background-color: #fff;
  padding: 10px 20px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
}

.royBox {
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 70px;
  }
}

.titleBox {
  font-size: 1.2rem;
}
</style>
