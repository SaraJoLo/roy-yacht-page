<template>
    <li class="yacht-card">
      <div class="yacht-image-container">
        <img :src="yacht.coverImage.url" :alt="yacht.name" class="yacht-image" />
        <font-awesome-icon
          icon="fas fa-bookmark"
          class="bookmark-icon"
          :class="{ active: selectedBookmarks.has(yacht.id) }"
          @click.stop="toggleBookmark(yacht.id)"
        />
      </div>
      <div class="yacht-info">
        <p v-if="!yacht.hidePrice" class="price-info">Price€: {{ yacht.buyPrice.EUR }}</p>
        <div class="charter-info">
          <p v-if="yacht.length">Length: {{ yacht.length.meters }} mts</p>
          <p v-if="yacht.guestsNumber">Guests: {{ yacht.guestsNumber }}</p>
          <p v-if="yacht.cabinsNumber">Cabins: {{ yacht.cabinsNumber }}</p>
        </div>
        <div class="name-enquiry">
          <h3 class="yacht-name">{{ yacht.name }}</h3>
          <button class="enquiry-button">Enquiry</button>
        </div>
      </div>
    </li>
  </template>
  
  <script setup lang="ts">
  import { ref } from "vue";
  import type { Yacht } from "@/types/yacht";
  import { defineProps } from "vue";
  
  const props = defineProps<{ yacht: Yacht }>();
  const selectedBookmarks = ref<Set<string>>(new Set());
  
  const toggleBookmark = (id: string) => {
    if (selectedBookmarks.value.has(id)) {
      selectedBookmarks.value.delete(id);
    } else {
      selectedBookmarks.value.add(id);
    }
  };
  </script>
  
  <style lang="scss" scoped>
  .yacht-card {
    background-color: #ffffff;
    margin: 0px;
    border-radius: 1px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    position: relative;
    transition: transform 0.2s ease;
  
    &:hover {
      transform: translateY(-5px);
    }
    
    
    .enquiry-button {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 2px 8px;
          width: 70px;
          height: 40px;
          color: #fff;
          border: none;
          background-color: #0B2020;
          opacity: 0;
          border-radius: 1px;
          font-size: 12px;
          cursor: pointer;
          transition: opacity 0.3s ease;
          position: absolute;
          bottom: 10px;
          right: 10px; 
        }
        
        &:hover .enquiry-button {
         opacity:1;
        }
  
    }
  
    .yacht-image-container {
      position: relative;
      padding-top: 66.67%;
      overflow: hidden;
      margin:0px;
  
      .yacht-image {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
  
      .bookmark-icon {
        position: absolute;
        top: 10px;
        right: 10px;
        font-size: 20px;
        color: rgba(255, 255, 255, 0.5);
        opacity: 0;
        transition: opacity 0.3s ease, color 0.3s ease;
        cursor: pointer;
      }
  
      &:hover .bookmark-icon,
      .bookmark-icon.active {
        opacity: 1;
        color: rgba(255, 255, 255, 0.8);
      }
    }
  
    .yacht-info {
      padding: 10px;
      margin: 0px;
      flex-grow: 1;
      display: flex;
      flex-direction: column;
  
      .price-info {
        font-size: 16px;
        color: #333;
        margin: 0px;
      }
  
      .charter-info {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        font-size: 14px;
        color: #666;
  
        p {
          margin: 0;
        }
      }
  
      .name-enquiry {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 25px;
  
        .yacht-name {
          font-size: 16px;
          color: #333;
          margin: 0;
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
  
        .yacht-name {
          font-size: 15px;
        }
  
        .enquiry-button {
          padding: 8px 12px;
          font-size: 14px;
        }
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
  
        .yacht-name {
          font-size: 14px;
        }
  
        .enquiry-button {
          padding: 8px 10px;
          font-size: 13px;
        }
      }
  }
}
  </style>