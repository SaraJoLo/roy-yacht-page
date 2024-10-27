<template>
    <li class="yacht-card">
      <div class="yacht-image-container">
        <img :src="yacht.coverImage.url" :alt="yacht.name" class="yacht-image" />
      </div>
      <div class="yacht-info">
        <p v-if="!yacht.hidePrice" class="price-info"> Price€: {{ yacht.buyPrice.EUR }}</p>
        <div class="charter-info">
          <p v-if="yacht.length">Length: {{ yacht.length.meters }} mts</p>
          <p v-if="yacht.guestsNumber">Guests: {{ yacht.guestsNumber }}</p>
          <p v-if="yacht.cabinsNumber">Cabins: {{ yacht.cabinsNumber }}</p>
        </div>
        <h3>{{ yacht.name }}</h3>
      </div>
      <button class="enquiry-button">Enquiry</button>
    </li>
  </template>
  
  <script setup lang="ts">
  import type { Yacht } from "@/types/yacht";
  defineProps<{ yacht: Yacht }>();
  </script>
  
  <style lang="scss" scoped>
  .yacht-card {
    background-color: #ffffff;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    transition: transform 0.3s ease;
  
    &:hover {
      transform: translateY(-5px);
    }
  
    .yacht-image-container {
      position: relative;
      padding-top: 66.67%;
      overflow: hidden;
  
      .yacht-image {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  
    .yacht-info {
      padding: 16px;
      flex-grow: 1;
      display: flex;
      flex-direction: column;
  
      .price-info {
        font-size: 18px;
        font-weight: bold;
        color: #333;
        margin-bottom: 8px;
      }
  
      .charter-info {
        display: flex;
        justify-content: space-between;
        font-size: 14px;
        color: #666;
        margin-bottom: 8px;
  
        p {
          margin: 0;
        }
      }
  
      h3 {
        font-size: 16px;
        color: #333;
        margin: 0;
        margin-top: auto;
      }
    }
  
    .enquiry-button {
      width: 100%;
      padding: 12px;
      background-color: #000000;
      color: white;
      border: none;
      font-size: 16px;
      cursor: pointer;
      transition: background-color 0.3s ease;
  
      &:hover {
        background-color: #405757;
      }
    }
  }
  
  
  @media (max-width: 1200px) {
    .yacht-card {
      .yacht-info {
        .charter-info {
          flex-direction: column;
          
          p {
            margin-bottom: 4px;
          }
        }
      }
    }
  }
  
  @media (max-width: 992px) {
    .yacht-card {
      .yacht-info {
        padding: 14px;
  
        .price-info {
          font-size: 16px;
        }
  
        .charter-info {
          font-size: 13px;
        }
  
        h3 {
          font-size: 15px;
        }
      }
  
      .enquiry-button {
        padding: 11px;
        font-size: 15px;
      }
    }
  }
  
  @media (max-width: 768px) {
    .yacht-card {
      .yacht-info {
        padding: 12px;
  
        .price-info {
          font-size: 15px;
        }
  
        .charter-info {
          font-size: 12px;
        }
  
        h3 {
          font-size: 14px;
        }
      }
  
      .enquiry-button {
        padding: 10px;
        font-size: 14px;
      }
    }
  }
  </style>