<template>
  <div class="headline">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Headline",
});
</script>

<style lang="scss" scoped>
.headline {
  color: #b1b3c5;
  display: flex;
  font-size: 70px;
  transform: skewY(-8deg);
  margin-top: -20vw;
  line-height: 1.05;
  margin-left: 40px;
  text-shadow: 0 0 42px #af83ca;
  font-family: "Sprite Graffiti", Helvetica, Arial, sans-serif;
  margin-bottom: 10vw;
  flex-direction: column;
  transform-origin: left top;

  @media screen and (max-width: 800px) {
    font-size: 60px;
    margin-top: 20px;
    margin-left: 16px;
    margin-bottom: 70px;
  }

  span {
    margin-left: 130px;
  }
}
</style>
