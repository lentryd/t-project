<template>
  <Cover :path="require('@/assets/img/wood_sprite.jpg')" />

  <Headline> What’s New <span>this year?</span> </Headline>

  <SwipeBlock>
    <Post
      image="https://2017.kikk.be/files/templates/kikk2017/public/assets//images/portals/kikk-pro.jpg"
      title="Название"
      subtitle="Подпись"
      text="The Pro Village is the best way to network and make new business
        connections at the KIKK Festival."
    />
  </SwipeBlock>

  <SwipeBlock>
    <Post
      image="https://2017.kikk.be/files/templates/kikk2017/public/assets//images/portals/kikk-pro.jpg"
      title="Название"
      reverse
      subtitle="Подпись"
      text="The Pro Village is the best way to network and make new business
        connections at the KIKK Festival."
    />
  </SwipeBlock>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Home",
});
</script>
