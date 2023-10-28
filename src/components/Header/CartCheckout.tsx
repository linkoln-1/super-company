import React, {FC} from "react";
import Link from "next/link";

import {useCart} from "@/context/CartContext";


export const CartCheckout:FC = () => {
    const { cart } = useCart();

    return(
        <div className="relative mb-4 sm:mb-0">
            <Link
                href="/cart"
                className="text-xl sm:text-2xl font-bold hover:text-blue-300 no-underline"
            >
                <span className="material-icons">Cart</span>
            </Link>
            <span className="absolute top-0 right-[-15px] sm:right-[-17px] text-xs bg-red-500 text-white rounded p-1">
              {cart.length}
            </span>
        </div>
    )
}