<template>
  <div class="video">
    <video :src="path" loop preload="metadata" controls></video>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Player",

  props: {
    path: {
      type: String,
      required: true,
    },
  },
});
</script>

<style lang="scss" scoped>
.video {
  width: 90%;
  margin: 0 auto;
  display: flex;
  overflow: hidden;
  position: relative;
  max-width: 900px;
  box-shadow: 0px 1px 3px 1px rgba(0, 0, 0, 0.15),
    0px 1px 2px rgba(0, 0, 0, 0.3);
  border-radius: 16px;
  margin-bottom: 130px;

  video {
    width: 100%;
    margin: 0;
    object-fit: cover;
  }
}
</style>
