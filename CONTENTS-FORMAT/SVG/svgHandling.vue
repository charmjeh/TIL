<template>
  <div>
    <!-- #1 SVG와 기본 도형들 -->
    <svg
      version="1.1"
      baseProfile="full"
      width="200"
      height="200"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
    >
      <rect width="100%" height="100%" fill="red" />

      <circle cx="50" cy="50" r="30" fill="green" />

      <text x="50" y="55" font-size="15" text-anchor="middle" fill="white">
        SVG
      </text>
    </svg>

    <!-- #2-1 Path -->
    <svg width="100" height="200" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 10 h 80 v 80 h -80 Z" fill="transparent" stroke="black" />
      <!-- 사각형 테두리선 그리기 -->
      <path d="M10 100 h 80 v 80 h -80" />
      <!-- path 채워진 사각형 -->

      <!-- 점 -->
      <circle cx="10" cy="10" r="2" fill="red" />
      <circle cx="90" cy="90" r="2" fill="red" />
      <circle cx="90" cy="10" r="2" fill="red" />
      <circle cx="10" cy="90" r="2" fill="red" />
    </svg>


    <!-- #2-2 곡선(베지어곡선(C, Q), 호) -->
    <!--
        1-1) 3차 베지어 곡선(C)
        (M: 70, 60으로 이동. C: 70, 80으로 곡선 방향 기술(부드럽게 휘도록). 110 80: 시작점, 110 60: 끝점)
    -->
    <svg width="50" height="50" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M10 10 C 20 20, 40 20, 50 10"
        stroke="black"
        fill="transparent"
      />
    </svg>

    <!-- 1-2) 3차 베지어 곡선 - S (베지어 곡선을 연결할 때 완만한 경사를 만드는애) -->
    <svg width="190" height="160" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M10 80 C 40 10, 65 10, 95 80 S 150 150, 180 80"
        stroke="black"
        fill="transparent"
      />
    </svg>
    <!-- 2-1) 2차 베지어 곡선(Q) -->
    <svg width="190" height="160" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 80 Q 95 10 180 80" stroke="black" fill="transparent" />
    </svg>
    <!-- 2-2) T (2차 베지어 곡선을 연결) -->
    <svg width="190" height="160" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M10 80 Q 52.5 10, 95 80 T 180 80"
        stroke="black"
        fill="transparent"
      />
    </svg>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
</style>
