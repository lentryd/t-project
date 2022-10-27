<template>
  <Cover :path="require('@/assets/img/avatar_hand.png')" />

  <Headline>Словарь На'Ви</Headline>

  <SwipeBlock v-for="l in dictionary" class="letter">
    <span v-text="l.text" />
    <ul>
      <li v-for="w in l.words" v-text="w" />
    </ul>
  </SwipeBlock>
</template>

<script lang="ts">
import { defineComponent } from "vue";

type Letter = {
  text: string;
  words: string[];
};

export default defineComponent({
  name: "Dictionary",

  data: () => ({
    dictionary: [
      {
        text: "А",
        words: [
          "аватар (тело) — uniltìrantokx (сложное слово: unilt`ıranyu — ходящий во сне, tokx — тело), «тело сноходца»",
          "аватар (личность) — unilt`ıranyu (сложное слово: unil — сон, t`ıranyu — гуляющий), «сноходец»",
          "ага, я понял — tslolam",
          "активный — walak",
          "акцент, произношение — l`ı’upam (сложное слово: l`ı’u — слово, pam — звук)",
          "аллерген — fnetxum (сложное слово, от txum — яд)",
          "алфавит — snapamrelvi (сложное слово, от pamrelvi — буква)",
          "английский язык — ’ìnglìsì",
          "анекдот — hangvur (сложное слово: hangham — смех, vur — история)",
          "аппетитный, свежий — pxasul",
          "арбалет — tskalep",
          "аргумент, спор — t`ıwäte (сложное слово, от wäte — спорить)",
          "аромат, вкус — sur",
          "ароматный — onlor (сложное слово: ontu — нос, lor — приятный)",
          "атака — ’eko",
        ],
      },
      {
        text: "Б",
        words: [
          "бабах (звукоподражание) — kxangangang",
          "бежать, бегать — tul",
          "безопасно — n`ızawnong (сложное слово: awn — инфикс образования причастия, zong — безопасный)",
          "безумный, сумасшедший — lekye’ung (сложное слово, от keye’ung — безумный)",
          "белый — teyrpin как существительное, teyr как прилагательное.",
          "беспокойство — sngum",
          "бессилие — t`ıngong’ (сложное слово, от ngong — бессильный, ленивый)",
          "благодарю — irayo si (сложное слово, от irayo — спасибо)",
          "благополучие, мир — fpom",
          "блестеть — nrr",
          "болван, придурок — skxawng",
          "боль — t`ısraw (сложное слово, от sraw — болезненный)",
          "брак, замужество — t`ımuntxa (сложное слово, от muntxa — спаренные, в паре)",
          "брат — tsmukan (сложное слово, от tsmuk — брат/сестра)",
          "брать, хватать — niä",
          "бросаться в атаку, нападать — kxll",
          "будущее, в будущем — zusawkrr (сложное слово: z«us»a’u — идущий, krr — время)",
          "буква (фонетический символ) — pamrelvi (сложное слово, от pamrel — письмо)",
          "быстро — nìwin (сложное слово, от win — быстрый)",
          "быть в порядке — vezo (сложное слово: ve’o — порядок, zo — быть «как следует»)",
        ],
      },
      {
        text: "В",
        words: [
          "важный, значительный — letsranten (сложное слово, от tsranten — иметь значение)",
          "верный (в смысле «правдивый, преданный») — ngay",
          "верёвка, шнур — telem",
          "весело — n`ı’o’ (сложное слово, от ’o’ — волнующий)",
          "вести беседу, разговаривать (ни с кем конкретно) — pängkxo",
          "весьма, очень сильно — n`ıtxan (сложное слово, от txan — сильный, обильный)",
          "ветер — hufwe",
          "вместе — 'awsiteng",
          "внешность — wrrpa",
          "вождь — eyktan",
          "возможно — kxawm",
          "воин — tsamsiyu",
          "война — tsam",
          "вопрос — txele",
          "воспоминание — 'ok",
          "время — krr",
          "выбирать — fxtey",
        ],
      },
      {
        text: "Г",
        words: [
          "глаз — nari",
          "глаза (два) — menari",
          "говорить — plltxe",
          "год — zìzìt",
          "голос — mokri",
          "голубой — ean",
          "готовый — alaksì",
          "группа людей, собрание — pongu",
        ],
      },
      {
        text: "Д",
        words: [
          "да — srane",
          "давать, дарить — tìng",
          "двигаться, перемещаться — rikx",
          "делать — si",
          "делить — mun’i",
          "демон — vrrtep",
          "день — trr",
          "дерзость — seyri",
          "дерево — utral",
          "дитя, ребёнок — 'evi",
          "доверчивый — ftue",
          "дождь — tompa",
          "дом — kelku",
          "до свидания, скоро увидимся — kìyevame",
          "достойный — pxan",
          "дочь — 'ite",
          "друг — lertu",
          "духовный путь — tireafya’o",
        ],
      },
      {
        text: "Е",
        words: [
          "еда — yomtìng",
          "единственный — fko",
          "если — txo",
          "если не, или иначе — txokefyaw",
          "есть (пищу) — yom",
        ],
      },
      {
        text: "Ж",
        words: [
          "жаркий — som",
          "ждать — pey",
          "жёлтый — rim",
          "женщина — tutee",
          "женщина, глава рода — Tshahìk",
          "животное, зверь — ioang",
          "жизнь — tìrey, rey",
          "жители Пандоры (как они себя называют) — Na’vi",
          "жить, обитать — kelku si",
        ],
      },
      {
        text: "З",
        words: [
          "закрывать, захлопывать — sutx",
          "занятие — kìte’en",
          "запах, вонь — faheu",
          "запретный — kxanì",
          "захват — spe’e",
          "защита — tìhawnu",
          "звезда — tanhì",
          "звук — pam",
          "земля (почва) — kllte",
          "знак, знамение — aungia",
          "знать — omun",
          "зов — syaw",
        ],
      },
      {
        text: "И",
        words: [
          "идти — käì",
          "извинение — tsap’alute",
          "изучать — steftxaw",
          "изучение, учёба — ftia",
          "или — fu",
          "имеет значение, является важным — tsranten",
          "искать — kllkulat",
          "искусная (вещь) — sìlronsem",
          "итак (или «в таком случае») — ha",
        ],
      },
      {
        text: "К",
        words: [
          "каждый — frapo",
          "как — na",
          "камень, скала — tskxe",
          "клан — olo'",
          "когда — krrpe, pehrr",
          "колено — kinamtil",
          "копье — tukru",
          "который — a",
          "крыло — tsyal",
          "кто — pesu, tupe",
        ],
      },
      {
        text: "Л",
        words: [
          "легко — nìftue",
          "лес — na’rìng",
          "лететь — tswayon",
          "лидерство — eyk",
          "личность — tute",
          "ложный, ненастоящий — tsleng",
          "локоть — pxuntil",
          "лук — tsko",
          "лук и стрелы — tsko swizaw",
          "лунатик (аватар) — uniltìranyu",
        ],
      },
      {
        text: "М",
        words: [
          "маленький — hì'i",
          "мама — sa’nu",
          "мастерство — tseo",
          "мертвый — kerusey",
          "мир, благосостояние — fpom",
          "много (кол-во) — txan",
          "могучий, сильный — fkeu",
          "момент — swaw",
          "мудрый — txantslusam",
          "мужчина — tutean",
          "музыка — pamtseo",
          "мы — ayoeng",
          "мыть — yur",
        ],
      },
      {
        text: "Н",
        words: [
          "надежный, обоснованный — kangay",
          "начало, старт — sngä'i",
          "небо — taw",
          "непрерывно — nìtut",
          "несчастье — tìkawng",
          "нет — kehe",
          "неудачник — tawng",
          "никогда — kawkrr",
          "нить — kìng",
          "новости — fmawm",
          "нога — kinam",
          "нос — ontu",
          "ночь — txon",
          "нужда, потребность — kin",
        ],
      },
      {
        text: "О",
        words: [
          "обед — wutso",
          "обещать — pänutìng",
          "обучение — sänume",
          "овощ — kxener",
          "огонь — txep",
          "он — poan",
          "она — poe",
          "опасность — hrrap",
          "оскорбление — zoplo",
          "остановка, перерыв — ftang",
          "отец — sempul",
          "охота — taron",
          "очищать — fkarut",
        ],
      },
      {
        text: "П",
        words: [
          "палец — zekwä",
          "память, воспоминание — ronsem",
          "папа — sempu",
          "песня — tìrol, way",
          "плохой, зло — kawng",
          "подарок — teswotìng",
          "пожалуйста — rutxe",
          "помощь — srung",
          "попытка — fmi",
          "почему — lumpe, pelun",
          "правда — tìngay",
          "предок — pizayu",
          "привет — kaltxì",
          "привлекательный, милый — sevin",
          "прогулка — tìran",
          "прощение — txoa",
          "пуля — eyk",
          "путь, дорога — fya’o",
        ],
      },
      {
        text: "Р",
        words: [
          "равнина — 'engeng",
          "разрешать — tung",
          "разрушать — ska’a",
          "разум — eltu",
          "рассказ — kxetse",
          "растение — Eyaye",
          "расцветать — 'ong",
          "ребёнок — 'eveng",
          "ритм — kato",
          "рука — pxun",
        ],
      },
      {
        text: "С",
        words: [
          "свет — atan",
          "связать — yìm",
          "священный — swok",
          "сделать, закончить - hasey",
          "сейчас — set",
          "семя — rina'",
          "сердце — txe’lan",
          "сестра — tsmuke",
          "скорость — tirea",
          "слабый — meyp",
          "слово — lì'u",
          "слушать — eltu si",
          "слышать — tìng mikyun",
          "смешной, забавный — hiyìk",
          "смотреть — tìng nari",
          "смысл, значение — ral",
          "солнце — tsawke",
          "сон, мечта — unil",
          "спасибо — irayo",
          "страх — txopu",
          "сын — 'itan",
        ],
      },
      {
        text: "Т",
        words: [
          "танец — sreu",
          "тело — tokxn",
          "территория — kllpxìltu, lok",
          "тест — fmetok, tìfmetok",
          "ткать, плести — täftxu",
          "тоже, также — nìhawng",
          "только — nì'aw",
          "тратить время — krrnekx",
          "тренировка, упражнение — tskxekeng",
          "ты — aynga, nga",
        ],
      },
      {
        text: "У",
        words: [
          "убежище — zongteng",
          "убивать — tspang",
          "удар — takuk",
          "узел, петля — til",
          "улыбка — lrrtok",
          "умелый, быть умелым — tsun",
          "умирать — terkup",
          "ухо — mikyun",
          "учитель — karyu",
          "учить, учиться — nume",
        ],
      },
      { text: "Ф", words: ["флаги — u'imi", "фрукт — ki’ong"] },
      {
        text: "Х",
        words: [
          "хор — waytelem",
          "хорошая работа — zamuncko",
          "хороший — sìltsan",
          "хорошо — nìltsan",
          "хотеть — neu",
          "храбрый — tsteu",
          "худший — 'e’al",
        ],
      },
      {
        text: "Ц",
        words: ["цель — txìm", "центр (место в середине) — kxamtseng"],
      },
      {
        text: "Ч",
        words: [
          "часть — hapxì",
          "чем — to",
          "честь — meuia",
          "червь — ngawng",
          "через — ka",
          "четкий, точный — law",
          "чужак — faketuan",
          "чужестранец — ketuwong, kewong",
        ],
      },
      { text: "Ш", words: ["штопор (в полете) — kim"] },
      {
        text: "Э",
        words: [
          "это (вещь) — fi’u",
          "это (действие) — fikem",
          "это здесь, в этом месте — fitseng(e)",
          "этот путь — fifya",
          "этот (человек или вещь) — fipo",
        ],
      },
      { text: "Я", words: ["я — oe", "яд — txum"] },
    ] as Letter[],
  }),
});
</script>

<style lang="scss" scoped>
.letter {
  margin: 0 auto;
  padding: 8px 24px;
  max-width: 640px;
  margin-bottom: 30px;

  span {
    font-size: 34px;
    font-family: "RubikDistressed", Helvetica, Arial, sans-serif;
  }

  ul {
    margin: 0;
    font-size: 18px;
  }
}
</style>
