"use client";
import React, { FC } from "react";
import Link from "next/link";

import { SuperCompanyBlock } from "@/components/Header/SuperCompanyBlock";
import { NavMenu } from "@/components/Header/NavMenu";
import { ContactIcons } from "@/components/Header/ContactIcons";
import { usePathname } from "next/navigation";
import { CartCheckout } from "@/components/Header/CartCheckout";

const Header: FC = () => {
  const router = usePathname();

  return (
      <>
        <header className="p-4 bg-[#151E2F] text-white md:p-6 xl:p-8">
          <div className="container mx-auto max-w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-6xl flex flex-col md:flex-row justify-between items-center">
            <Link
                href="/"
                className="text-xl md:text-2xl font-bold hover:text-blue-300 no-underline mb-4 md:mb-0"
            >
              SUPERCOMPANY
            </Link>
            <NavMenu />
            <CartCheckout />
            <div className="flex space-x-2 md:space-x-4">
              <ContactIcons />
            </div>
          </div>
        </header>
        {router === "/" ? <SuperCompanyBlock /> : null}
      </>
  );
};


export default React.memo(Header);
