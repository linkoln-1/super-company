import React, { FC } from "react";
import { GradientButton } from "@/components/GradientButton/GradientButton";

interface InputFieldProps {
  placeholder: string;
}

const InputField: FC<InputFieldProps> = ({ placeholder }) => (
  <input
    className="w-full p-4 mb-4 border rounded-md"
    placeholder={placeholder}
  />
);
export const ContactForm: FC = () => {
  const containerStyle =
    "bg-gray-100 max-w-6xl m-auto p-6 sm:p-10 lg:p-14 flex flex-col sm:flex-row justify-between items-center";
  const headerStyle = "text-3xl sm:text-4xl lg:text-5xl font-bold";
  const subtextStyle = "text-gray-600 mt-4";
  const inputContainerStyle = "mt-6 sm:mt-8 lg:mt-0 max-w-md";

  return (
    <section className="questions py-8 sm:py-12">
      <div className={containerStyle}>
        <div className="w-full sm:w-96 mx-auto text-center sm:text-left mb-8 sm:mb-0">
          <h2 className={headerStyle}>HAVE QUESTIONS</h2>
          <p className={subtextStyle}>
            Leave your contacts and our managers will contact you shortly.
          </p>
        </div>
        <form className={inputContainerStyle}>
          <InputField placeholder="Name" />
          <InputField placeholder="Mob/Tg/Whts" />
          <GradientButton
            classNameButton="button-gradient text-white rounded px-4 py-2 mt-4 w-full sm:w-auto"
            width="125px"
            alignment="center"
          >
            Send
          </GradientButton>
        </form>
      </div>
    </section>
  );
};
