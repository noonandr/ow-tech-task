<template>
  <svg
    class="svg"
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    viewBox="0 0 32 32"
    :aria-labelledby="iconName"
    :style="'transform: ' + transform"
    role="presentation"
  >
    <g :fill="iconColor">
      <slot />
    </g>
  </svg>
</template>

<script>
export default {
  props: {
    iconName: {
      type: String,
      default: "box",
    },
    width: {
      type: [Number, String],
    },
    height: {
      type: [Number, String],
    },
    iconColor: {
      type: String,
      default: "currentColor",
    },
    transform: {
      type: String,
      default: "rotate(0deg)",
    },
  },
};
</script>

<style scoped>
.svg {
  display: inline-block;
  height: auto;
  vertical-align: baseline;
}
</style>
