
<template>
  <header class="navbar">
    <div class="royBox">
      <img src="public/Roy.png" alt="Logo" />
    </div>
    <div class="titleBox">YACHTS FOR SALE · 340</div>
  </header>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
.navbar {
  display: flex;
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
