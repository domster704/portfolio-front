export type Contact = {
  value: string;
  href: string;
};

export type ContactKey = "email" | "telegram" | "phone" | "github" | "linkedin";

export const contacts: Record<ContactKey, Contact> = {
  email: {
    value: "domster704@mail.ru",
    href: "mailto:domster704@mail.ru",
  },
  telegram: {
    value: "@domster704",
    href: "https://t.me/domster704",
  },
  phone: {
    value: "+7 912 745-89-00",
    href: "tel:+79127458900",
  },
  github: {
    value: "github.com/domster704",
    href: "https://github.com/domster704",
  },
  linkedin: {
    value: "linkedin.com/in/domster704",
    href: "https://www.linkedin.com/in/domster704",
  },
};
