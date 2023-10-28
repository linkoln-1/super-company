import React, { FC } from "react";
import Image, { StaticImageData } from "next/image";
import { CONTACTS, MAP_LINKS } from "@/mock/data";

type ContactData = {
  icon: StaticImageData;
  title: string;
  value: string;
};

type MapLink = {
  text: string;
  href: string;
};

type ContactItemProps = ContactData;

const ContactItem: FC<ContactItemProps> = ({ icon, title, value }) => (
  <div className="flex items-center mb-4">
    <Image src={icon} alt={`${title} Icon`} className="mr-4" />
    <div>
      <p className="font-bold">{title}</p>
      <p>{value}</p>
    </div>
  </div>
);

export const ContactsSection: FC = () => {
  return (
    <div className="p-4 sm:p-8 lg:p-24">
      <div className="max-w-7xl mx-auto px-2 sm:px-4">
        <h2 className="text-3xl sm:text-4xl lg:text-4xl font-bold">CONTACTS</h2>

        <div className="mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-between">
          {CONTACTS.map((contact) => (
            <ContactItem
              key={contact.title}
              icon={contact.icon}
              title={contact.title}
              value={contact.value}
            />
          ))}
        </div>

        <div className="mt-8 relative overflow-hidden">
          {MAP_LINKS.map((link: MapLink) => (
            <a
              key={link.text}
              href={link.href}
              className="text-gray-300 text-xs absolute"
            >
              {link.text}
            </a>
          ))}
          <iframe
            src="https://yandex.ru/map-widget/v1/?ll=45.703487%2C43.311198&mode=poi&poi%5Bpoint%5D=45.693941%2C43.317671&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D1308618694"
            width="100%"
            height="400"
            frameBorder="1"
            allowFullScreen={true}
          ></iframe>
        </div>
      </div>
    </div>
  );
};
