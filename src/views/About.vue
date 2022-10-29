<template>
	<Cover :path="require('@/assets/img/avatar_hand.png')" />

	<div class="info">
		<Headline> Команда Аватароведы </Headline>

		<span>
			Каждый из нас вложил свою душу в этот проект. Сквозь слезы, пот и дедлайны
			мы вместе прорвались через это препятствие и готовы также вместе дойти до
			конца. Наша команда даст вам новые ощущения от известного фильма Аватар,
			новые эмоции и новые мысли по поводу его смысла.
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
					name: 'Агуреев\nДмитрий',
					photo:
						'https://2017.kikk.be/files/library/Kikk-Talk/Vignettes/Jifei-Ou(1).jpg',
					description: 'Неизвестный. Занимался презентацией',
					link: 'https://vk.com/id323230208',
				},
				{
					name: 'Быковская\nАрина',
					photo:
						'https://2017.kikk.be/files/library/Kikk-Talk/Vignettes/Jifei-Ou(1).jpg',
					description:
						'Контент мейкер, любитель чипсов и кислого мармелада. Занималась презентацией',
					link: 'https://vk.com/ton_soleil2304',
				},
				{
					name: 'Григорова\nСофия',
					photo:
						'https://2017.kikk.be/files/library/Kikk-Talk/Vignettes/Jifei-Ou(1).jpg',
					description:
						'Менеджер, монтажер, фанат группы "КИШ". Занималась трейлером',
					link: 'https://vk.com/sgrigorova16',
				},
				{
					name: 'Дайкович\nЛада',
					photo:
						'https://2017.kikk.be/files/library/Kikk-Talk/Vignettes/Jifei-Ou(1).jpg',
					description:
						'Бизнесмен, менеджер, любитель капибар. Занималась презентацией',
					link: 'https://vk.com/ladadaikovich',
				},
				{
					name: 'Зайцев\nИлья',
					photo:
						'https://2017.kikk.be/files/library/Kikk-Talk/Vignettes/Jifei-Ou(1).jpg',
					description:
						'Диджей, музыкант, басист группы "Nirvana". Занимался озвучкой',
					link: 'vk.com/ilyazed1',
				},
				{
					name: 'Ивченко\nВиктор',
					photo:
						'https://2017.kikk.be/files/library/Kikk-Talk/Vignettes/Jifei-Ou(1).jpg',
					description: 'Наркоторговец, плейбой, филантроп. Занимался сайтом',
					link: 'https://vk.com/lentryd',
				},
				{
					name: 'Кондратович\nЭвелина',
					photo:
						'https://2017.kikk.be/files/library/Kikk-Talk/Vignettes/Jifei-Ou(1).jpg',
					description:
						'Любит рыбку и царапать диван, кошка. Занималась презентацией, озвучкой и руководством процесса в Миро',
					link: 'https://vk.com/velwell_ev',
				},
				{
					name: 'Корита\nАндрей',
					photo:
						'https://2017.kikk.be/files/library/Kikk-Talk/Vignettes/Jifei-Ou(1).jpg',
					description: 'Тони Старк. Занимался сайтом',
					link: 'https://vk.com/carropite4ka',
				},
				{
					name: 'Коротких\nЕвгений',
					photo:
						'https://2017.kikk.be/files/library/Kikk-Talk/Vignettes/Jifei-Ou(1).jpg',
					description:
						'Садовод, фермер, фасольных дел мастер. Занимался выгрузкой информации в Миро',
					link: 'https://vk.com/evgeniq_korotkih',
				},
				{
					name: 'Косых\nИлья',
					photo:
						'https://2017.kikk.be/files/library/Kikk-Talk/Vignettes/Jifei-Ou(1).jpg',
					description:
						'Дизайнер, нищеброд, студент. Занимался выгрузкой информации в Миро',
					link: 'https://vk.com/impartialki',
				},
				{
					name: 'Кучер\nАнтон',
					photo:
						'https://2017.kikk.be/files/library/Kikk-Talk/Vignettes/Jifei-Ou(1).jpg',
					description:
						'Гений, артист, главбух компании "Витамин". Занимался сайтом',
					link: 'https://vk.com/anton_kucher',
				},
				{
					name: 'Потягина\nАлина',
					photo:
						'https://2017.kikk.be/files/library/Kikk-Talk/Vignettes/Jifei-Ou(1).jpg',
					description:
						'Любитель чипсов. Занималась выгрузкой информации в Миро',
					link: 'vk.com/murmuralinaa',
				},
				{
					name: 'Стасюк\nЕгор',
					photo:
						'https://2017.kikk.be/files/library/Kikk-Talk/Vignettes/Jifei-Ou(1).jpg',
					description: 'Жунгарик. Занимался озвучкой',
					link: 'https://vk.com/egash1337',
				},
				{
					name: 'Стаценко\nДарья',
					photo:
						'https://2017.kikk.be/files/library/Kikk-Talk/Vignettes/Jifei-Ou(1).jpg',
					description:
						'Танцор, еще кто-то там хз. Занималась трейлером и озвучкой',
					link: 'https://vk.com/dstat',
				},
				{
					name: 'Хаишбашян\nОльга',
					photo:
						'https://2017.kikk.be/files/library/Kikk-Talk/Vignettes/Jifei-Ou(1).jpg',
					description:
						'Ландшафтный дизайнер, разработчик медиа контента, любитель плюшевых единорогов. Занималась презентацией',
					link: 'https://vk.com/id381851217',
				},
				{
					name: 'Черников\nАлександр',
					photo:
						'https://2017.kikk.be/files/library/Kikk-Talk/Vignettes/Jifei-Ou(1).jpg',
					description:
						'Саша, любитель зеленого липтона. Занимался выгрузкой информации в Миро',
					link: 'https://vk.com/fikussanya',
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
