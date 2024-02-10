import { StaticImageData } from "next/image";
import Flash from "../../../../../public/icons/flash-2d.png";
import Bezier from "../../../../../public/icons/bezier-2d.png";
import Clock from "../../../../../public/icons/clock-2d.png";

interface IAboutProject {
  id: number;
  title: string;
  description: string;
  icon: StaticImageData;
}

export const AboutProjectBlackBlockItems: IAboutProject[] = [
  {
    id: 0,
    title: "Подключение присоединений",
    description: "С помощью развилок из разъединителей",
    icon: Flash,
  },
  {
    id: 0,
    title: "Ремонт без простоя присоединений",
    description: "Отключением трех разъединителей",
    icon: Clock,
  },
  {
    id: 0,
    title: "В каждой вершине 3D-выключатель",
    description: "Они установлены для коммутации токов",
    icon: Bezier,
  },
];
