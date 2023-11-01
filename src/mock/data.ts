import phone from "../../public/assets/Icon/contact-tel.svg";
import telegram from "../../public/assets/Icon/contact-tlg.svg";
import mail from "../../public/assets/Icon/contact-mail.svg";

import icon_1 from "../../public/assets/Icon/graph_icon_1.svg"
import icon_2 from "../../public/assets/Icon/graph_icon_2.svg"
import icon_3 from "../../public/assets/Icon/graph_icon_3.svg"

export const CONTACTS = [
    { icon: phone, title: "Call Us", value: "+7 999 56 78 987" },
    { icon: telegram, title: "Text Us", value: "@Testtelegram" },
    { icon: mail, title: "Email", value: "Testtest@Gmail.Com" },
];

export const MAP_LINKS = [
    {
        text: "Центральная мечеть Сердце Чечни имени Ахмата Кадырова",
        href: "https://yandex.ru/maps/org/tsentralnaya_mechet_serdtse_chechni_imeni_akhmata_kadyrova/1308618694/?utm_medium=mapframe&utm_source=maps"
    },
    {
        text: "Мечеть в Грозном",
        href: "https://yandex.ru/maps/1106/grozniy/category/mosque/184106298/?utm_medium=mapframe&utm_source=maps"
    }
];


export const icons = [
    {
        icon: icon_1
    },
    {
        icon: icon_2
    },
    {
        icon: icon_3
    },
]