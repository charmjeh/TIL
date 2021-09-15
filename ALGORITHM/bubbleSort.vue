<template>
  <div id="app">
    <div class="container">
      <div class="box" v-for="(i, key) in sortArray" :key="key">{{ i }}</div>
    </div>

    <button class="startButton" @click.prevent="bubbleSort">
      오름차순 버블 정렬 시작
    </button>

    <p>Swaps: {{ swaps }}</p>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      sortArray: [6, 5, 4, 3, 2, 1],
      swaps: 0,
    };
  },
  methods: {
    // https://www.youtube.com/watch?v=RCnyz-Bfkmc
    bubbleSort() {
      const numbers = [...this.sortArray];

      // 이너 루프 (배열의 0 ~ 4번 자리까지, 마지막 자리는 제외)
      for (let i = 0; i < numbers.length - 1; i++) {
        // 아우터 루프 (이미 정렬된 부분은 제외)
        for (let j = 0; j < numbers.length - i - 1; j++) {
          // 뒷자리 숫자가 앞자리 숫자보다 크면
          if (numbers[j] > numbers[j + 1]) {
            // swap
            let temp = numbers[j];
            numbers[j] = numbers[j + 1];
            numbers[j + 1] = temp;

            this.swaps += 1;
          }
        }
      }

      this.sortArray = numbers;
    },
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.container {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.box {
  border: 1px solid #000;
  padding: 10px;
  margin: 10px;
  width: 100px;
}

.startButton {
  background-color: #ffeb34;
  color: #555;
  font-weight: bold;
  border: 3px solid #555;
  padding: 8px 20px;
}
</style>
