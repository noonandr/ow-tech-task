<script>
export default {
  props: {
    active: {
      type: Boolean,
      default: true
    },
    size: {
      type: String,
      default: "medium"
    },
    type: {
      type: String,
      default: "primary"
    }
  }
}
</script>

<template>
  <button class="app-button" :class="[{ deactive: !active }, size, type]">
    <slot />
  </button>
</template>

<style scoped lang="scss">
.app-button {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: auto;
  margin: 0;
  padding: 0 size(1);
  color: $color-white;
  text-align: center;
  text-decoration: none;
  vertical-align: middle;
  border: none;
  border-radius: 3px;
  outline: none;
  cursor: pointer;
  white-space: nowrap;
}

.deactive {
  cursor: default !important;
}

.primary {
  background: $primary-button;
  
  &:hover {
    background: desaturate($primary-button, 20%);
  }
}

.secondary {
  background: $secondary-button;

  &:hover {
    background: desaturate($secondary-button, 20%);
  }
}

.small {
  padding: size(0) size(1);
  font-size: $font-size-small;
}

.medium {
  padding: size(0.5) size(2);
  font-size: $font-size-medium;
}

.large {
  padding: size(1) size(3);
  font-size: $font-size-large;
}
</style>
