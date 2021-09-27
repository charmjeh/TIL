<template>
  <div id="app">
    <div class="container">
      <div class="box" v-for="(i, key) in sortArray" :key="key">{{ i }}</div>
    </div>

    <!-- 오름차순 -->
    <div class="button-container">
      <button class="button start" @click.prevent="bubbleSort">
        버블 정렬 시작
      </button>
      <button class="button start" @click.prevent="insertionSort">
        삽입 정렬 시작
      </button>
    </div>

    <p>Swaps: {{ swaps }}</p>
    <p>forStatement: {{ forStatement }}</p>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      sortArray: [7, 5, 9, 0, 3, 1, 6, 2, 4, 8],
      swaps: 0,
      forStatement: 0,
    };
  },
  methods: {
    reset() {
      this.sortArray = [7, 5, 9, 0, 3, 1, 6, 2, 4, 8];
      this.swaps = 0;
      this.forStatement = 0;
    },
    getNumbers() {
      this.reset();
      return [...this.sortArray];
    },
    // https://www.youtube.com/watch?v=RCnyz-Bfkmc
    bubbleSort() {
      const numbers = this.getNumbers();

      // 이너 루프 (배열의 0 ~ 4번 자리까지, 마지막 자리는 제외)
      for (let i = 0; i < numbers.length - 1; i++) {
        // 아우터 루프 (이미 정렬된 부분은 제외)
        for (let j = 0; j < numbers.length - i - 1; j++) {
          this.forStatement += 1;
          // 뒷자리 숫자가 앞자리 숫자보다 크면
          if (numbers[j] > numbers[j + 1]) {
            // swap
            let temp = numbers[j];
            numbers[j] = numbers[j + 1];
            numbers[j + 1] = temp;

            console.log("bubble");

            this.swaps += 1;
          }
        }
      }

      this.sortArray = numbers;
    },
    // https://www.youtube.com/watch?v=SZVugP81J1A
    insertionSort() {
      const numbers = this.getNumbers();

      /* 0번째 인덱스는 이미 정렬이 되어있으니까 제외하고, 1번쨰부터 반복 */
      for (let i = 1; i < numbers.length; i++) {
        /* 인덱스 i부터 1까지 감소하며 반복 */
        for (let j = i; j > 0; j--) {
          this.forStatement += 1;
          if (numbers[j] < numbers[j - 1]) {
            let temp = numbers[j];
            numbers[j] = numbers[j - 1];
            numbers[j - 1] = temp;

            this.swaps += 1;
          } else {
            break;
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

.button-container {
  display: flex;
  align-items: center;
  flex-direction: column;
}

.button.start {
  background-color: #ffeb34;
  color: #555;
  font-weight: bold;
  border: 3px solid #555;
  padding: 8px 20px;
  margin-bottom: 10px;
  width: 200px;
}
</style>
