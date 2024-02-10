import { StaticImageData } from "next/image";
import Clock from "../../../../../public/icons/clock-3d.svg";
import Box from "../../../../../public/icons/box-3d.svg";
import Flash from "../../../../../public/icons/flash-3d.svg";
import Smile from "../../../../../public/icons/smile-3d.svg";
import Warning from "../../../../../public/icons/warning-3d.svg";
interface IAdvantagesItems {
  id: number;
  title: string;
  description: string;
  icon: StaticImageData;
  isActive?: boolean;
}

export const AdvantagesItemsData: IAdvantagesItems[] = [
  {
    id: 0,
    title: "Сроки строительства сокращаются в 2 раза",
    description: "За счет применения блочно-комплектного метода строительства",
    icon: Clock,
  },
  {
    id: 1,
    title: "Ежегодные потери электроэнергии сокращаются на 0,5%",
    description: "Благодаря новым схемным подходам",
    icon: Flash,
  },
  {
    id: 2,
    title: "Надежность электроснабжения повышается в 3-7 раз",
    description: "Развитие логики, самых надежных, полуторных схем",
    icon: Warning,
    isActive: true,
  },
  {
    id: 3,
    title:
      "Снижаются собственные нужды, углеродный след (в 3 раза) и повышается экологичность решения",
    description:
      "Из практики: 22 % расхода э/э на СН ПС тратитсяна обогрев ЭА ОРУ, т.е. общая экономия составит по подстанции около 15%",
    icon: Smile,
  },
  {
    id: 4,
    title: "Габариты уменьшаются на 10%",
    description:
      "Число ячеек равно числу присоединений – при заходах с одной стороны. С разных еще меньше",
    icon: Box,
  },
];
