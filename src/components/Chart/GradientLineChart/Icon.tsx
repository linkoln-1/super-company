import React from 'react';
import Image from "next/image";

export const Icon = ({ icon }: any) => {

    return (
        <>
            <Image src={icon.src} alt={""} width={19} height={20}/>
        </>
    );
}