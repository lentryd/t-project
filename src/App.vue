<template>
  <Header />

  <router-view v-slot="{ Component, route }">
    <Transition mode="out-in" name="show-route">
      <main :key="route.name ?? ''">
        <Component :is="Component" />
      </main>
    </Transition>
  </router-view>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
});
</script>

<style lang="scss">
@font-face {
  font-family: "NordBold";
  src: url("./assets/fonts/NordBold.woff") format("woff");
}
@font-face {
  font-family: "Sprite Graffiti";
  src: url("./assets/fonts/SpriteGraffiti.woff") format("woff");
}
@font-face {
  font-family: "RubikDistressed";
  src: url("./assets/fonts/RubikDistressed.woff") format("woff");
}

html {
  margin: 0;
  font-size: 100%;
  -ms-text-size-adjust: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;
}

body {
  width: 100%;
  color: rgba(185, 215, 255, 0.5);
  margin: 0;
  height: auto;
  font-size: 1rem;
  font-style: normal;
  line-height: 2;
  font-weight: 300;
  font-family: "NordBold", Helvetica, Arial, sans-serif;
  background-color: #0b0e26;
}

*,
:after,
:before {
  box-sizing: inherit;
}

.show-route-enter-active,
.show-route-leave-active {
  transition: opacity 0.35s ease-in-out, transform 0.35s ease-in-out;
}
.show-route-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
.show-route-enter-from {
  opacity: 0;
  transform: translateY(10px);
}
</style>
