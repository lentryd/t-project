<template>
  <div ref="el" class="swipe-wrapper" :class="{ 'in-view': inView }">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SwipeBlock",

  data: () => ({
    inView: false,
  }),

  methods: {
    scrollHandler() {
      const el = this.$refs.el as HTMLElement;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const val =
        rect.top <=
        (window.innerHeight || document.documentElement.clientHeight);
      if (!val) return;

      this.inView = true;
      window.removeEventListener("scroll", this.scrollHandler);
    },
  },

  mounted() {
    this.scrollHandler();
    window.addEventListener("scroll", this.scrollHandler);
  },

  beforeUnmount() {
    window.removeEventListener("scroll", this.scrollHandler);
  },
});
</script>

<style lang="scss" scoped>
.swipe-wrapper {
  transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
  &.in-view {
    opacity: 1;
    transform: translateY(0);
  }
  &:not(.in-view) {
    opacity: 0;
    transform: translateY(40px);
  }
}
</style>
