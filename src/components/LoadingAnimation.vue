<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 26 6"
    width="26"
    height="6"
    aria-labelledby="loading"
    role="presentation"
  >
    <g>
      <rect
        class="square1"
        x="0"
        y="0"
        width="6"
        height="6"
        ref="square3"
        fill="currentColor"
      ></rect>
      <rect
        class="square2"
        x="10"
        y="0"
        width="6"
        height="6"
        ref="square3"
        fill="currentColor"
      ></rect>
      <rect
        class="square3"
        x="20"
        y="0"
        width="6"
        height="6"
        ref="square3"
        fill="currentColor"
      ></rect>
    </g>
  </svg>
</template>

<style scoped lang="scss">
@keyframes square1 {
  0% {
    opacity: 1;
  }
  25% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  75% {
    opacity: 1;
  }
  100% {
    opacity: 1;
  }
}

@keyframes square2 {
  0% {
    opacity: 1;
  }
  25% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  75% {
    opacity: 1;
  }
  100% {
    opacity: 1;
  }
}

@keyframes square3 {
  0% {
    opacity: 1;
  }
  25% {
    opacity: 1;
  }
  50% {
    opacity: 1;
  }
  75% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.square1 {
  animation: square1 2s infinite;
}

.square2 {
  animation: square2 2s infinite;
}

.square3 {
  animation: square3 2s infinite;
}
</style>
