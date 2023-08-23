<script setup lang="ts">
import { RouterView } from "vue-router";
import { Header } from "@/widgets/Header";
import { ViewContainer } from "@/widgets/ViewContainer";
import { Navigation } from "@/features/Navigation";
import { Contacts } from "@/widgets/Contacts";

</script>

<template>
  <ViewContainer>
    <Header />
    <main class="main">
      <Contacts />
      <div class="content">
        <Navigation />
        <div class="content__page">
          <RouterView />
        </div>
      </div>
    </main>
  </ViewContainer>
</template>

<style>
.main {
  width: 100%;
  height: 100%;
  display: flex;
  gap: 15px;
}

.content {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.content__page {
  flex: 1;
  padding: 30px;
  border-radius: 20px;
  background: #FFF;
  box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.25);
}
</style>
