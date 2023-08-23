<script setup lang="ts">
import { type TSkillCard } from "../../types";

const {
  title,
  description,
  src,
  color,
} = defineProps<TSkillCard>();

</script>

<template>
  <div class="skill-card" :class="{ [`skill-card__${color}`]: color }">
    <div class="skill-card__header">
      <img :src="src" alt="image" class="skill-card__header__image">
      <h3 class="skill-card__header__title">{{ title }}</h3>
    </div>
    <span class="skill-card__description">
      {{ description }}
    </span>
  </div>
</template>

<style>
.skill-card {
  border-radius: 20px;
  width: 100%;
  max-width: 500px;
  padding: 10px;
  box-sizing: border-box;
}

.skill-card__header {
  display: flex;
  align-items: center;
  gap: 10px;
}

.skill-card__header__title {
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
}

.skill-card__header__image {
  width: 24px;
  height: 24px;
}

.skill-card__orange {
  background: #FFEBD1;
}

.skill-card__gray {
  background: #F2F7FC;
}

.skill-card__description {
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.35px;
}
</style>
