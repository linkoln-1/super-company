"use client";
import React from "react";

import { Catalog } from "@/components/Homepage/HomePage";
import { ContactForm } from "@/components/ContactForm/ContactForm";
import { ContactsSection } from "@/components/ContactForm/ContactSection";

const Home: React.FC = () => {
  return (
    <>
      <Catalog />
      <ContactForm />
      <ContactsSection />
    </>
  );
};

export default Home;
