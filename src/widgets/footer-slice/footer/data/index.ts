import { IHeaderItems } from "@/shared/interface/header";
import Call from "../../../../../public/icons/call.svg";
import Message from "../../../../../public/icons/message.svg";
import { StaticImageData } from "next/image";
export const headerData: IHeaderItems[] = [
  {
    id: 0,
    name: "О проекте",
    href: "#about",
  },
  {
    id: 1,
    name: "Преимущества",
    href: "#advantages",
  },
  {
    id: 2,
    name: "Команда",
    href: "#team",
  },
];

interface IContact {
  id: number;
  value: string;
  icon: StaticImageData;
}

export const ContactData: IContact[] = [
  {
    id: 0,
    value: "+7 905 807-87-28",
    icon: Call,
  },
  {
    id: 1,
    value: "+7 922 224-60-51",
    icon: Call,
  },
  {
    id: 2,
    value: "grinevn@yandex.ru",
    icon: Message,
  },
  {
    id: 3,
    value: "info@smetaeverest.ru",
    icon: Message,
  },
];
