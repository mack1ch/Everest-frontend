interface IPublishItems {
  id: number;
  title: string;
  description: string;
}

export const PublishData: IPublishItems[] = [
  {
    id: 0,
    title: "Верификация",
    description: "Концепции 3D-выключателя с ООО «Эльмаш (УЭТМ)»",
  },
  {
    id: 1,
    title: "Патент",
    description: "Устройство коммутации в электроустановках №2020127412",
  },
  {
    id: 2,
    title: "Апробация",
    description: "На научных конференциях и семинарах",
  },
  {
    id: 3,
    title: "Публикации",
    description: "В журналах по списку ВАК, Web of Science",
  },
];
