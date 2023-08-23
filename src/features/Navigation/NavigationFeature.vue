<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";

import { HomeIcon } from "@/assets/images/HomeIcon";
import { ContactIcon } from "@/assets/images/ContactIcon";
import { MemeIcon } from "@/assets/images/MemeIcon";

type TActiveButton = 'home' | 'video' | 'meme';

const router = useRouter();
const activeButton = ref<TActiveButton>('home');

function handleNavigate(page: TActiveButton) {
  activeButton.value = page;

  router.push(page);
}

</script>

<template>
  <nav class="navigation">
    <div
        class="navigation__item"
        :class="{ 'navigation__item__active': activeButton === 'home' }"
        @click="handleNavigate('home')"
    >
      <HomeIcon class="navigation__item__image" />
      <span>Home</span>
    </div>

    <div
        class="navigation__item"
        :class="{ 'navigation__item__active': activeButton === 'video' }"
        @click="handleNavigate('video')"
    >
      <ContactIcon class="navigation__item__image" />
      <span>Video</span>
    </div>

    <div
        class="navigation__item"
        :class="{ 'navigation__item__active': activeButton === 'meme' }"
        @click="handleNavigate('meme')"
    >
      <MemeIcon class="navigation__item__image" />
      <span>Memes</span>
    </div>
  </nav>
</template>

<style scoped>
.navigation {
  border-radius: 20px;
  background: #F2F7FC;
  padding: 22px 10px;
  display: flex;
  justify-content: flex-end;
  gap: 30px;
}

.navigation__item {
  padding: 22px;
  border-radius: 20px;
  background: #E1E8EF;
  color: #000000;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 5px;
  justify-content: center;
  align-items: center;
}

.navigation__item__active {
  background: linear-gradient(127deg, #FF9C1A 0%, #E80505 100%);
  color: #FFFFFF;
}
.navigation__item__image {
  width: 24px;
  height: 24px;
}
</style>
