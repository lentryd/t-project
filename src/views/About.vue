<template>
  <Cover :path="require('@/assets/img/avatar_hand.png')" />

  <div class="info">
    <Headline>
      Команда<br />
      "Реальные пацаны"
    </Headline>

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
import { defineComponent } from "vue";

type Teammate = {
  name: string;
  link?: string;
  photo: string;
  description: string;
};

export default defineComponent({
  name: "About",

  data: () => ({
    teammates: [
      {
        name: "Агуреев\nДмитрий",
        photo: require("@/assets/img/dima.jpg"),
        description: "Неизвестный. Занимался презентацией",
        link: "https://vk.com/id323230208",
      },
      {
        name: "Быковская\nАрина",
        photo: require("@/assets/img/arina.jpg"),
        description:
          "Контент мейкер, любитель чипсов и кислого мармелада. Занималась презентацией",
        link: "https://vk.com/ton_soleil2304",
      },
      {
        name: "Григорова\nСофия",
        photo: require("@/assets/img/sofia.jpg"),
        description:
          'Менеджер, монтажер, фанат группы "КИШ". Занималась трейлером',
        link: "https://vk.com/sgrigorova16",
      },
      {
        name: "Дайкович\nЛада",
        photo: require("@/assets/img/lada.jpg"),
        description:
          "Бизнесмен, менеджер, любитель капибар. Занималась презентацией",
        link: "https://vk.com/ladadaikovich",
      },
      {
        name: "Зайцев\nИлья",
        photo: require("@/assets/img/ilya_z.jpg"),
        description:
          'Диджей, музыкант, басист группы "Nirvana". Занимался сайтом',
        link: "vk.com/ilyazed1",
      },
      {
        name: "Ивченко\nВиктор",
        photo: require("@/assets/img/victor.jpg"),
        description: "Сайтдиллер, плейбой, филантроп. Занимался сайтом",
        link: "https://vk.com/lentryd",
      },
      {
        name: "Кондратович\nЭвелина",
        photo: require("@/assets/img/evelina.jpg"),
        description:
          "Любит рыбку и царапать диван, кошка. И швец, и жнец и на дуде игрец. Руководитель проекта",
        link: "https://vk.com/velwell_ev",
      },
      {
        name: "Корита\nАндрей",
        photo: require("@/assets/img/andrey.jpg"),
        description: "Тони Старк. Занимался выгрузкой информации в Миро",
        link: "https://vk.com/carropite4ka",
      },
      {
        name: "Коротких\nЕвгений",
        photo: require("@/assets/img/jenya.jpg"),
        description:
          "Садовод, фермер, фасольных дел мастер. Занимался выгрузкой информации в Миро",
        link: "https://vk.com/evgeniq_korotkih",
      },
      {
        name: "Косых\nИлья",
        photo: require("@/assets/img/ilya_k.jpg"),
        description:
          "Дизайнер, нищеброд, студент. Занимался выгрузкой информации в Миро",
        link: "https://vk.com/impartialki",
      },
      {
        name: "Кучер\nАнтон",
        photo: require("@/assets/img/anton.jpg"),
        description:
          'Гений, артист, главбух компании "Витамин". Занимался сайтом',
        link: "https://vk.com/anton_kucher",
      },
      {
        name: "Потягина\nАлина",
        photo: require("@/assets/img/alina.jpg"),
        description: "Любитель чипсов. Занималась выгрузкой информации в Миро",
        link: "vk.com/murmuralinaa",
      },
      {
        name: "Стасюк\nЕгор",
        photo: require("@/assets/img/egor.png"),
        description: "Жунгарик. Занимался озвучкой",
        link: "https://vk.com/egash1337",
      },
      {
        name: "Стаценко\nДарья",
        photo: require("@/assets/img/dasha.jpg"),
        description:
          "Танцор, держит в страхе уличных музыкантов. Занималась трейлером",
        link: "https://vk.com/dstat",
      },
      {
        name: "Хаишбашян\nОльга",
        photo: require("@/assets/img/olya.jpg"),
        description:
          "Ландшафтный дизайнер, разработчик медиа контента, любитель плюшевых единорогов. Занималась презентацией",
        link: "https://vk.com/id381851217",
      },
      {
        name: "Черников\nАлександр",
        photo: require("@/assets/img/sanya.jpg"),
        description:
          "Саша, любитель зеленого липтона. Занимался выгрузкой информации в Миро",
        link: "https://vk.com/fikussanya",
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
