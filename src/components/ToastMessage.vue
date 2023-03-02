<template>
  <div class="toast-message success" :style="messageBackground">
    <div class="message" :style="textColor">
      <span class="message-title" v-text="title" />
      <span class="message-copy" v-html="message" />
    </div>
  </div>
</template>

<script>
export default {
  name: "ToastMessage",
  props: {
    type: String,
    message: String,
  },
  computed: {
    messageBackground() {
      let backgroundColor;
      switch (this.type) {
        case "success":
          backgroundColor = "#4F7D24";
          break;
        case "error":
          backgroundColor = "#ff3400";
          break;
        case "warning":
          backgroundColor = "#ff6c50";
          break;
        default:
          backgroundColor = "#c2c2c2";
      }
      return {
        background: backgroundColor,
      };
    },
    title() {
      let titleCopy;
      switch (this.type) {
        case "success":
          titleCopy = "Success";
          break;
        case "error":
          titleCopy = "Error";
          break;
        case "warning":
          titleCopy = "Warning";
          break;
        default:
          titleCopy = "Message";
      }
      return titleCopy;
    },
    textColor() {
      let textColor;
      switch (this.type) {
        case "success":
          textColor = "#fff";
          break;
        case "error":
          textColor = "#fff";
          break;
        case "warning":
          textColor = "#fff";
          break;
        default:
          textColor = "#545454";
      }
      return {
        color: textColor,
      };
    },
  },
};
</script>

<style scoped lang="scss">
.toast-message {
  display: flex;
  flex: 1 0 100%;
  color: $text;
  border-radius: $border-radius;
  margin-bottom: size(3);
}

.message {
  display: flex;
  align-items: center;
  margin: 0;
}

.message-title {
  padding: 0 size(1) 0 size(2);
}

.message-copy {
  padding: size(1.5) size(1) size(1.5) 0;
}
</style>
