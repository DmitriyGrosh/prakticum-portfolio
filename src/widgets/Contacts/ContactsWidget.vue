<script setup lang="ts">
const socialMedias = [
  {
    url: 'https://t.me/rebenokFrameworka',
    src: 'https://api.iconify.design/ic:baseline-telegram.svg',
    name: 'telegram',
  },
  {
    url: 'https://github.com/DmitriyGrosh',
    src: 'https://api.iconify.design/mdi:github.svg',
    name: 'github',
  },
  {
    url: 'https://www.instagram.com/html_grosh/',
    src: 'https://api.iconify.design/mdi:instagram.svg',
    name: 'instagram',
  },
  {
    url: 'https://vk.com/id428345830',
    src: 'https://api.iconify.design/mdi:vk.svg',
    name: 'vk',
  }
];

const content = [
  {
    title: 'Телефон',
    description: '89653277455',
    src: 'https://api.iconify.design/material-symbols:add-call.svg',
  },
  {
    title: 'Email',
    description: 'dima.grosh@gmail.com',
    src: 'https://api.iconify.design/material-symbols:mark-email-unread.svg',
  },
  {
    title: 'Location',
    description: 'Ростов-на-дону',
    src: 'https://api.iconify.design/material-symbols:home-pin.svg',
  }
];

function handleRedirect(url: string) {
  window.open(url , '_blank');
}

</script>

<template>
  <div class="contacts">
    <div class="avatar-container">
      <img class="contacts__avatar" src="@/assets/images/static/avatar1.jpg">
      <img class="contacts__avatar" src="@/assets/images/static/avatar2.jpg">
    </div>
    <h4>Dima Grosh</h4>
    <span>Frontend developer</span>
    <div class="social-media">
      <div
          class="social-media__item"
          v-for="social in socialMedias"
          :key="social.name"
          @click="handleRedirect(social.url)"
      >
        <img :src="social.src" :alt="social.name" />
      </div>
    </div>
    <div class="contacts__content">
      <div class="contacts__content__card" v-for="contact in content" :key="contact.title">
        <img :src="contact.src" alt="image" />
        <div class="card">
          <span class="card__title">{{ contact.title }}:</span>
          <span class="card__description">{{ contact.description }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.contacts {
  width: 100%;
  max-width: 400px;
  border-radius: 20px;
  background: #FFF;
  box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.25);
  padding: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
}

.avatar-container {
  display: flex;
  gap: 10px;
}

.contacts__avatar {
  width: 200px;
  height: 200px;
  border-radius: 20px;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.25);
  object-fit: contain;
}

.social-media {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}

.social-media__item {
  display: flex;
  padding: 24px;
  justify-content: center;
  align-items: center;
  background: #F2F7FC;
  border-radius: 9px;
}

.social-media__item > img {
  width: 30px;
  height: 30px;
  object-fit: contain;
}

.contacts__content {
  width: 100%;
  border-radius: 20px;
  background: #F2F5F9;
  padding: 30px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.contacts__content__card {
  display: flex;
  gap: 40px;
  align-items: center;
}

.card {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.card__title {
  color: rgba(26, 16, 3, 0.50);
}

.card__description {
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
}
</style>
