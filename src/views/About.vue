<template>
	<Cover :path="require('@/assets/img/avatar_hand.png')" />

	<div class="info">
		<Headline> Название команды </Headline>

		<span>
			Каждый из нас вложил свою душу в этот проект, через слезы, пот и дедлайны
			мы вместе преодолели это препятствие и тоже готовы дойти до конца. Наша
			команда подарит вам новые ощущения от знаменитого фильма "Аватар", новые
			эмоции и новые мысли о его значении.
		</span>
	</div>

	<div class="teammates">
		<SwipeBlock v-for="t in teammates">
			<Teammate v-bind="t" />
		</SwipeBlock>
	</div>
</template>

<script lang="ts">
	import { defineComponent } from 'vue';

	type Teammate = {
		name: string;
		link?: string;
		photo: string;
		description: string;
	};

	export default defineComponent({
		name: 'About',

		data: () => ({
			teammates: [
				{
					name: 'Иванов\nИван',
					photo:
						'https://2017.kikk.be/files/library/Kikk-Talk/Vignettes/Jifei-Ou(1).jpg',
					description: 'Наркоторговец, плейбой и филантроп',
				},
			] as Teammate[],
		}),
	});
</script>

<style lang="scss" scoped>
	.info {
		gap: 40px;
		display: flex;
		padding: 0 16px;
		margin-top: -20vw;
		flex-direction: row;

		@media screen and (max-width: 800px) {
			margin-top: -20px;
			flex-direction: column;
		}

		.headline {
			margin-top: 0px;
			margin-left: 40px - 16px;
			margin-bottom: 0;
			flex-shrink: 0;

			@media screen and (max-width: 800px) {
				margin-top: 0;
			}
		}

		span {
			z-index: 1;
			line-height: 1.6;
		}
	}

	.teammates {
		gap: 40px;
		margin: 40px 0;
		display: flex;
		padding: 8px 16px;
		flex-wrap: wrap;
		flex-direction: row;
		justify-content: center;

		> * {
			width: 100%;

			@media screen and (min-width: 600px) and (max-width: 900px) {
				width: 45%;
			}
			@media screen and (min-width: 900px) {
				width: 30%;
			}

			.teammate-container {
				width: 100%;
			}
		}
	}
</style>
