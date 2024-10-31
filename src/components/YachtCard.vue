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
        <p v-if="!yacht.hidePrice" class="price-info">Price € {{ yacht.buyPrice.EUR }}</p>
        <div class="charter-info">
          <p v-if="yacht.length">Length: {{ yacht.length.meters }} mts</p>
          <p v-if="yacht.guestsNumber">| Guests: {{ yacht.guestsNumber }}</p>
          <p v-if="yacht.cabinsNumber">| Cabins: {{ yacht.cabinsNumber }}</p>
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
    margin: 0;
    border-radius: 0.0625rem;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    position: relative;
    transition: transform 0.2s ease;
  
    &:hover {
      transform: translateY(-0.3125rem);
    }
    
    .enquiry-button {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0.5rem 1rem 0.5rem 1rem;
      width: 5.5rem;
      height: 2.75rem;
      color: #fff;
      border: none;
      background-color: #0B2020;
      opacity: 0;
      border-radius: 0.0625rem;
      font-size: 1rem;
      cursor: pointer;
      transition: opacity 0.3s ease;
      position: absolute;
      bottom: 0.625rem;
      right: 0.625rem;
    }
    
    &:hover .enquiry-button {
      opacity: 1;
      @media screen and (max-width: 768px) {
        opacity: 1;
        background-color: rgba(64, 87, 87, 1);
        
      }
    }
    
    
}
  
.yacht-image-container {
    position: relative;
    padding-top: 66.67%;
    overflow: hidden;
    margin: 0;
  
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
      top: 0.625rem;
      right: 0.625rem;
      font-size: 1.25rem;
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
    padding: 0.625rem;
    margin: 0;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
  
    .price-info {
      font-size: 1rem;
      color: rgba(133, 133, 133, 1);
      font-weight: 400;
      margin: 0;
    }
  
    .charter-info {
      display: flex;
      flex-wrap: wrap;
      gap: 0.625rem;
      font-size: 0.875rem;
      color: #4E4E4E;
      font-weight: 400;
  
      p {
        margin: 0;
      }
    }
  
    .name-enquiry {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 1.5625rem;
  
      .yacht-name {
        font-size: 1.25rem;
        color: rgba(9, 25, 25, 1);
        line-height: 30px;
        font-weight: 300;
        margin: 0;
      }
    }
  }
  
@media (max-width: 1200px) {
    .yacht-card {
      .yacht-info {
        .charter-info {
          flex-direction: row;
  
          p {
            margin-bottom: 0.25rem;
          }
        }
      }
    }
}
  
@media (max-width: 992px) {
    .yacht-card {
      .yacht-info {
        padding: 0.875rem;
  
        .price-info {
          font-size: 1rem;
          line-height: 1.75rem;
        }
  
        .charter-info {
          font-size: 1rem;
        }
  
        .yacht-name {
          font-size: 1.25rem;
          line-height: 1.88rem;
        }
  
        .enquiry-button {
          width: 5.5rem;
          height: 2.75rem;
          font-size: 1rem;
        }
      }
    }
}

@media (max-width: 768px) {
    .yacht-card {
      .yacht-info {
        padding: 0.75rem;
  
        .price-info {
          font-size: 0.9375rem;
        }
  
        .charter-info {
          font-size: 0.75rem;
        }
  
        .yacht-name {
          font-size: 0.875rem;
        }
  
        .enquiry-button {
          padding: 0.5rem 0.625rem;
          font-size: 0.8125rem;
        }
      }
    }
}
</style>
  