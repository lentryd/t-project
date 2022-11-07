<template>
	<Cover :path="require('@/assets/img/wood_sprite.jpg')" />

	<Headline> "Аватар"<span>что же это такое?</span> </Headline>

	<SwipeBlock>
		<Post
			:image="require('@/assets/img/avatar.png')"
			title="Трейлер"
			subtitle="К фильму 'Аватар'"
			text="Трейлер –— часть фильма, 
			которая предоставляет зрителю возможность просмотреть его краткое содержание, 
			не пересказывая важные части сюжета (т.е. без спойлеров).
			Это эффективный способ заинтересовать зрителя и расположить его к дальнейшому просмотру.
			(Трейлер представлен ниже)"
		/>
	</SwipeBlock>

	<SwipeBlock>
		<Player :path="require('@/assets/video/movie_trailer.mp4')" />
	</SwipeBlock>

	<SwipeBlock>
		<Post
			reverse
			link="https://miro.com/app/board/uXjVPQlcsVc=/"
			:image="require('@/assets/img/miro.png')"
			title="Miro"
			subtitle="Помощник в координации"
			text="Miro –— удобная среда для планирования процесса работы.
			Он идеально подходит для больших проектов (с большими командами),
			для грамотного планирования дальнейших действий всей команды и позволяет избегать недопонимания среди сокомандников.
			(Для просмотра нажмите на фото)"
		/>
	</SwipeBlock>

	<SwipeBlock>
		<Post
			link="https://drive.google.com/drive/folders/1DEJo5qr-KtAbvK9lk-eeLunKPqfbj1uB?usp=share_link"
			:image="require('@/assets/img/pp.png')"
			title="Презентация"
			subtitle="Краткая экскурсия по проекту"
			text="Презентация —– незаменимый помощник каждого из нас.
			Это самый удобный способ рассказать о своем проекте лично, 
			интересно, красиво, без воды, без огромного количества информации, лишь слайды и ваша речь.
			(Для просмотра нажмите на фото)"
		/>
	</SwipeBlock>
</template>

<script lang="ts">
	import { defineComponent } from 'vue';

	export default defineComponent({
		name: 'Home',
	});
</script>
