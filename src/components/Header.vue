
<template>
  <header >
    <div class="royBox">
      <img src="public/Roy.png" alt="Logo" />
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const yachts = ref([]);
</script>

<style lang="scss" scoped>

.royBox {
  display: flex;
  justify-content: center;
  align-items: center;

    img {
     width: 70px;
    }
  

  .titleBox {
  font-size: 1.2rem;
  }
}
</style>
