<script setup lang="ts">
const memes = [
  {
    title: 'Thanks for JS - meme',
    src: 'https://res.cloudinary.com/practicaldev/image/fetch/s--ZDtqrBOj--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://github.com/damiancipolat/js_vs_memes/blob/master/doc/js_thanks.png%3Fraw%3Dtrue',
    tasks: [
      {
        name: 'typeof NaN = "number"',
        description: "Это правда, в JS NaN является числом и его нельзя сравнивать ни с каким другим NaN."
      },
      {
        name: '9999999999999999 -> 10000000000000000"',
        description: "В Javascript нет целых чисел, есть только 64-битные числа с плавающей запятой, и у вас закончилась точность чисел с плавающей запятой, представленная с помощью\n" +
            "постоянный Number.MAX_SAFE_INTEGER constant."
      },
    ],
  },
  {
    title: 'Patricio - meme',
    src: 'https://res.cloudinary.com/practicaldev/image/fetch/s--bRpncc0A--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://github.com/damiancipolat/js_vs_memes/blob/master/doc/fav_meme.jpg%3Fraw%3Dtrue',
    tasks: [
      {
        name: '"11"+1 = "111"',
        description: "Объединение строки и числа 1, последнее преобразуется в строку, легко."
      },
      {
        name: '"11"-1 = 10',
        description: "Хорошо, в этом случае есть строка и число с оператором минус, строка преобразуется в число, а затем выполняется обычная арифметическая операция между двумя числами."
      },
    ],
  },
  {
    title: 'Fav language JS - meme',
    src: 'https://res.cloudinary.com/practicaldev/image/fetch/s--pANodlV7--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://github.com/damiancipolat/js_vs_memes/blob/master/doc/patricio.png%3Fraw%3Dtrue',
    tasks: [
      {
        name: '0 == "0" - true',
        description: "Преобразует значения переменных в один и тот же тип перед выполнением сравнения, по этой причине «0» преобразуется из строки в число, а затем сравнение 0 == 0 является тем же самым."
      },
      {
        name: '"0" == [] - false',
        description: "Верно, потому что [] преобразуется в строку, String([])=\"\" поэтому \"0\" == \"\" является ложным."
      },
    ],
  },
];
</script>

<template>
  <div class="memes-wrapper">
    <h1>Javascript vs memes</h1>
    <h2>Я собираюсь проанализировать несколько интернет-мемов, высмеивающих JavaScript. Это хорошая возможность объяснить каждый из них и понять, что полученные результаты не являются языковыми ошибками, а имеют вполне конкретные и серьезные объяснения. Мне кажется что именно мемы помгут вам понять работу JavaScript. Давайте порешаем вместе!</h2>
    <div class="memes">
      <div class="memes__content" v-for="meme in memes" :key="meme.title">
        <h3>{{ meme.title }}</h3>
        <img class="memes__content__image" :src="meme.src" alt="meme" />
        <div class="tasks">
          <div class="memes__tasks" v-for="(task, index) in meme.tasks" :key="task.name">
            <span>{{index + 1}}. {{ task.name }}</span>
            <span class="memes__tasks__description">{{ task.description }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.memes-wrapper {
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: auto;
}
.memes__content__image {
  width: 350px;
  height: 350px;
  object-fit: contain;
}

.tasks {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.memes__tasks {
  display: flex;
  flex-direction: column;
}

.memes__tasks__description {
  color: rgba(26, 16, 3, 0.50);;
}
</style>
