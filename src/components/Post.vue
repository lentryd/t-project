<template>
	<div class="post" :class="{ reverse }">
		<a :href="link" target="_blank">
			<img :src="image" class="post__image" />
		</a>
		<div class="content">
			<span class="title" v-text="title" />
			<span v-if="subtitle" class="subtitle" v-text="subtitle" />
			<span class="text" v-text="text" />
		</div>
	</div>
</template>

<script lang="ts">
	import { defineComponent } from 'vue';

	export default defineComponent({
		name: 'Post',

		props: {
			text: { type: String, required: true },
			image: { type: String, required: true },
			title: { type: String, required: true },
			link: { type: String, required: false },
			reverse: { type: Boolean, default: false },
			subtitle: { type: String, required: false },
		},
	});
</script>

<style lang="scss" scoped>
	.post {
		gap: 60px;
		margin: 0 auto;
		display: flex;
		padding: 0 16px;
		max-width: 900px;
		transition: opacity 0.5s ease-in-out 0.5s, transform 0.5s ease-in-out 0.5s;
		margin-bottom: 130px;
		flex-direction: row;

		&.reverse {
			flex-direction: row-reverse;
		}

		@media screen and (max-width: 800px) {
			gap: 30px !important;
			max-width: 100% !important;
			align-items: center !important;
			margin-bottom: 60px !important;
			flex-direction: column !important;

			img {
				width: 100% !important;
			}
		}

		img {
			user-select: none;
			border-radius: 16px;
		}

		.content {
			display: flex;
			flex-direction: column;

			.title {
				font-size: 54px;
				line-height: 1.05;
				font-family: 'RubikDistressed', Helvetica, Arial, sans-serif;
			}

			.subtitle {
				font-size: 24px;
			}

			.text {
				font-size: 24px;
				margin-top: 10px;
				line-height: 1.6;
			}
		}
	}

	.post__image {
		width: 380px;
		height: 500px;
		border-radius: 16px;
		user-select: none;
	}
</style>
