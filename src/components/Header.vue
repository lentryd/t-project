<template>
  <header :class="{ 'is-sick': isSick, 'is-hidden': isHidden }">
    <span class="title" v-text="title" />

    <nav>
      <router-link v-for="l in links" :to="l.path" active-class="active">{{
        l.title
      }}</router-link>
    </nav>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Header",

  data: () => ({
    title: "Т22ЦГ-16",
    links: [
      {
        title: "Основная",
        path: "/",
      },
      {
        title: "Авторы",
        path: "/about",
      },
      {
        title: "Словарик",
        path: "/dictionary",
      },
    ],

    hide: false,
    position: 0,
  }),

  computed: {
    isSick() {
      return this.position > 152 - 84;
    },
    isHidden() {
      return this.hide && this.position > 152;
    },
  },

  watch: {
    position(val, oldVal) {
      if (Math.abs(val - oldVal) < 10) return;

      if (val > oldVal) this.hide = true;
      else this.hide = false;
    },
  },

  methods: {
    handleScroll() {
      this.position = window.scrollY;
    },
  },

  mounted() {
    this.handleScroll();
    window.addEventListener("scroll", this.handleScroll);
  },
});
</script>

<style lang="scss">
header {
  $header-height: 152px;
  $header-padding-top: 20px;
  $header-padding-left: 16px;
  $header-padding-right: 16px;
  $header-padding-bottom: 28px;

  top: 0;
  left: 0;
  width: calc(100% - ($header-padding-left + $header-padding-right));
  height: calc($header-height - ($header-padding-top + $header-padding-bottom));
  z-index: 100;
  display: flex;
  padding: $header-padding-top $header-padding-right $header-padding-bottom
    $header-padding-left !important;
  position: absolute;
  align-items: flex-end;
  flex-direction: row;
  justify-content: space-between;
  transition: transform 0.5s ease-in-out, backdrop-filter 0.3s ease-in-out,
    background-color 0.3s ease-in-out;

  &.is-sick {
    height: 84px - ($header-padding-top + $header-padding-bottom);
    position: fixed;
    backdrop-filter: blur(10px);
    background-color: #4b3d6d99;
  }

  &.is-hidden {
    transform: translateY(-100%);
  }

  > .title {
    color: #d5e2f3;
    font-size: 28px;
    font-weight: 400;
    line-height: 36px;
    font-family: "Radikal", Helvetica, Arial, sans-serif;
  }

  > nav {
    gap: 16px;
    display: flex;
    flex-direction: row;

    > a {
      color: #fff;
      z-index: 1;
      position: relative;
      font-size: 15px;
      transition: color 0.2s cubic-bezier(0.165, 0.84, 0.44, 1);
      font-weight: 900;
      padding-bottom: 6px;
      letter-spacing: 2.5px;
      text-transform: uppercase;
      text-decoration: none;

      &::after {
        left: 0;
        width: 100%;
        bottom: 0;
        height: 2px;
        content: "";
        z-index: -1;
        position: absolute;
        transform: scaleX(0);
        background: #fff;
        transition: transform 0.2s cubic-bezier(0.165, 0.84, 0.44, 1);
        transform-origin: right center;
      }

      &:hover::after,
      &.active::after {
        transform: scaleX(1);
        transform-origin: left center;
      }
    }
  }
}
</style>
