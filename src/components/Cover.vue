<template>
  <div class="cover-wrapper">
    <img class="cover" :src="path" />
    <div class="gradient"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Cover",

  props: {
    path: { type: String, required: true },
  },
});
</script>

<style lang="scss" scoped>
.cover-wrapper {
  z-index: -1;
  display: flex;
  overflow: hidden;
  position: relative;

  .cover {
    width: 100%;
    filter: brightness(0.8);
    opacity: 0.9988;
  }

  .gradient {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    background: linear-gradient(to top, #0b0e25 10%, rgba(0, 0, 0, 0) 70%);
  }
}
</style>
