<script setup lang="ts">
import { SkilCard } from './ui/SkillCard';

const cards = [
  {
    id: 1,
    title: 'Творчество и Реализация Идей',
    description: 'В мире программирования я могу воплотить свои идеи в реальность. Создание программ и приложений подобно искусству, где каждая строка кода - это кисть, а компьютер - пустой холст. Эта способность к творчеству дарит мне удовлетворение и чувство достижения.',
    src: 'https://api.iconify.design/material-symbols:dynamic-feed.svg',
    color: 'orange'
  },
  {
    id: 2,
    title: 'Решение Реальных Проблем',
    description: 'Программирование позволяет создавать решения для реальных проблем. Благодаря технологиям, которые мы разрабатываем, можно улучшать жизни людей, оптимизировать бизнес-процессы и вносить вклад в развитие общества. Это придает смысл моей работе и делает ее важной.',
    src: 'https://api.iconify.design/material-symbols:dynamic-feed.svg',
    color: 'gray'
  },
  {
    id: 3,
    title: 'Динамичность и Инновации',
    description: 'Мир программирования непрерывно развивается. Новые языки программирования, фреймворки и технологии появляются каждый день. Эта динамичность поддерживает интерес и мотивацию, так как всегда есть что-то новое для изучения и освоения.',
    src: 'https://api.iconify.design/material-symbols:dynamic-feed.svg',
    color: 'gray'
  },
  {
    id: 4,
    title: 'Глубокое Понимание Технологии',
    description: 'Программирование позволяет мне глубоко понимать, как работают технологии, которые окружают нас ежедневно. Это понимание делает меня более осведомленным потребителем и дает возможность лучше адаптироваться к изменениям в технологическом мире.',
    src: 'https://api.iconify.design/material-symbols:dynamic-feed.svg',
    color: 'orange'
  }
];
</script>

<template>
  <section class="home-page">
    <div class="home-page__about-me">
      <h2 class="home-page__about-me__title">обо мне</h2>
      <span class="home-page__about-me__description">
        Программирование для меня - это постоянный интеллектуальный вызов. Решение сложных задач и разработка эффективных алгоритмов требуют креативного мышления и аналитических способностей. Этот постоянный стимул к развитию моих умственных способностей делает программирование захватывающим. Так же frontend объединяет огромное сообщество разработчиков по всему миру. Обмен опытом, сотрудничество над проектами и поддержка друг друга делают этот мир дружелюбным и вдохновляющим. Я могу всегда найти ответы на вопросы и поддержку в этом сообществе.
      </span>
    </div>
    <div class="home-page__skils">
      <SkilCard v-for="card in cards" :key="card.id" :title="card.title" :color="card.color" :src="card.src" :description="card.description" />
    </div>
  </section>
</template>

<style>
.home-page {
  display: flex;
  flex-direction: column;
  gap: 25px;
}

.home-page__about-me__title {
  text-transform: uppercase;
  font-size: 40px;
  font-style: normal;
  font-weight: 500;
  line-height: 40px;
  letter-spacing: 1px;
}

.home-page__about-me__description {
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 30px;
}

.home-page__skils {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}
</style>
