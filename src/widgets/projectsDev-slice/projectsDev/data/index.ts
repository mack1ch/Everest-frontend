interface IProjectDevItem {
  id: number;
  text_first: string;
  boldText: string;
  text_second?: string;
}

export const ProjectDevData: IProjectDevItem[] = [
  {
    id: 0,
    text_first: "Разработан",
    boldText: "новый вид электроаппарата",
  },
  {
    id: 1,
    text_first: "Получено заключение",
    boldText: "ИСЭМСО РАН",
    text_second: ", с рекомендацией к реализации в рамках пилотного проекта",
  },
  {
    id: 2,
    text_first: "Разработаны типовые решения, а именно",
    boldText: "схема и компоновка, для произвольного числа присоединений",
  },
  {
    id: 3,
    text_first: "Выполнена",
    boldText:
      "проработка и верификация результатов с отечественными заводами-изготовителями",
    text_second:
      "высоковольтной аппаратуры, определена стоимость опытного образца выключателя",
  },
];
