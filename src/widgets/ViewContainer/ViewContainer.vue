<template>
  <div class="wrapper container">
    <slot></slot>
  </div>
</template>


<style scoped>
.wrapper {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.container {
  padding: 0 15px;
}

@media (min-width: 575.98px){
  .container {
    max-width: 540px;
    margin: auto;
    padding: 0;
  }
}

@media (min-width: 767.98px){
  .container {
    max-width: 720px;
  }
}

@media (min-width: 991.98px) {
  .container {
    max-width: 960px;
  }
}

@media (min-width: 1199.98px){
  .container {
    max-width: 1440px;
  }
}
</style>
