<template>
	<Cover :path="require('@/assets/img/wood_sprite.jpg')" />

	<Headline> "Аватар"<span>что же это такое?</span> </Headline>

	<SwipeBlock>
		<Player :path="require('@/assets/video/movie_trailer.mp4')" />
	</SwipeBlock>

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
	import { defineComponent } from 'vue';

	export default defineComponent({
		name: 'Home',
	});
</script>
