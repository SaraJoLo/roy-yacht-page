<template>
    <div class="yacht-card">
      <img :src="yacht.coverImage?.url" :alt="yacht.name" class="yacht-image" />
  
      <div class="yacht-info">
        <p class="yacht-price">Price: €{{ yacht.buyPrice.EUR.toLocaleString() }}</p>
        <div class="yacht-details">
          <span>Length: {{ yacht.length?.meters }} m</span>
          <span class="separator">|</span>
          <span>Guests: {{ yacht.guestsNumber }}</span>
          <span class="separator">|</span>
          <span>Cabins: {{ yacht.cabinsNumber }}</span>
        </div>
        <h2 class="yacht-name">{{ yacht.name }}</h2>
      </div>
  
     
      <button class="enquiry-button">Enquiry</button>
    </div>
  </template>
  
  <script setup lang="ts">
  import { defineProps } from "vue";
  import type { Yacht } from "@/types/yacht";
  
  const props = defineProps({
    yacht: {
      type: Object as () => Yacht,
      required: true,
    },
  });
  </script>
  
  <style scoped>
  
  .yacht-card {
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    transition: transform 0.2s;
    border: 1px solid #e0e0e0;
    padding: 15px;
  }
  
  .yacht-card:hover {
    transform: scale(1.03);
  }
  

  .yacht-image {
    width: 100%;
    height: auto;
    object-fit: cover;
    margin-bottom: 10px;
  }
  
  .yacht-info {
    text-align: left;
    font-size: 0.9em;
  }
  
  .yacht-price {
    font-size: 1em;
    font-weight: bold;
    color: #333;
    margin-bottom: 5px;
  }
  
  .yacht-details {
    display: flex;
    gap: 5px;
    font-size: 0.85em;
    color: #555;
    margin-bottom: 10px;
  }
  
  .separator {
    vertical-align: middle;
  }
  
  .yacht-name {
    font-size: 1em;
    color: #333;
    font-weight: bold;
    margin-bottom: 0;
  }
  
  .enquiry-button {
    display: none;
    padding: 8px 16px;
    background-color: #333;
    color: white;
    border: none;
    cursor: pointer;
    font-size: 0.9em;
    position: absolute;
    bottom: 15px;
    right: 15px;
    transition: background-color 0.3s;
    border-radius: 4px;
  }
  
  .yacht-card:hover .enquiry-button {
    display: inline-block;
  }
  
  .enquiry-button:hover {
    background-color: #555;
  }
  </style>