import React, { useState } from "react";
import Link from "next/link";

export const NavMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="sm:flex sm:space-x-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="sm:hidden px-2 py-1 text-white rounded"
      >
        Menu
      </button>
      <div
        className={`absolute w-54 bg-white text-black mt-2 rounded border transform ${
          isOpen ? "scale-100" : "scale-0"
        } sm:static sm:bg-transparent sm:border-none sm:text-white sm:transform-none sm:scale-100 sm:flex space-x-4`}
      >
        <Link
          href="/about-us"
          className="block px-2 py-1 hover:text-blue-300 sm:no-underline"
        >
          About Us
        </Link>
        <Link
          href="/catalog"
          className="block px-2 py-1 hover:text-blue-300 sm:no-underline"
        >
          Catalog
        </Link>
        <Link
          href="/contacts"
          className="block px-2 py-1 hover:text-blue-300 sm:no-underline"
        >
          Contacts
        </Link>
      </div>
    </div>
  );
};
