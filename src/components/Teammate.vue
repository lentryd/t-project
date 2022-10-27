<template>
  <div class="teammate-container" @click="openLink">
    <img :src="photo" />

    <div class="info">
      <span class="name" v-text="name" />
      <span class="description" v-text="description" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "User",

  props: {
    name: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      default: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    },
    photo: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },

  methods: {
    openLink() {
      window.open(this.link, "_blank");
    },
  },
});
</script>

<style lang="scss" scoped>
.teammate-container {
  width: 350px;
  cursor: pointer;
  display: flex;
  user-select: none;
  flex-direction: column;

  img {
    border-radius: 16px;
  }

  .info {
    gap: 45px;
    display: flex;
    margin-top: -110px;
    padding-left: 16px;
    flex-direction: column;

    .name {
      color: #b1b3c5;
      font-size: 34px;
      transform: skewY(-8deg);
      white-space: pre;
      line-height: 1.05;
      font-family: "RubikDistressed", Helvetica, Arial, sans-serif;
    }

    .description {
      font-size: 16px;
      line-height: 1.4;
      padding-left: 40px;
    }
  }
}
</style>
