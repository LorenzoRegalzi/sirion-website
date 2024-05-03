import React from "react";
import imageUrl from "./../../../img/default/bg-qualita.jpg"
import Image from "next/image";
import Button from "./button";
import Link from "next/link";
const EndPage = (props: any) => {
  return (
    <div className="relative w-full h-[20rem] flex items-center justify-center">
    {/* Immagine */}
    <Image
        src={imageUrl}
        alt="Banner Image"
        layout="fill" // Imposta il layout su 'fill' per adattare l'immagine al contenitore
        objectFit="cover" // Imposta objectFit su 'cover' per coprire completamente il contenitore
        quality={100} // Imposta la qualità dell'immagine
    />
    
    {/* Overlay scuro */}
    <div className="absolute inset-0 bg-black opacity-60 bg-customBlack"></div>
    
    <div className="absolute inset-0 flex items-center justify-center p-20">
        <div className="w-[70%] flex flex-col">
            <h1 className="text-5xl text-left font-extrabold">Ricerca e Innovazione</h1>
            <p className="text-left mt-4">Scopri come Sirion si impegna nella ricerca continua per innovare e soddisfare le esigenze dei clienti nel settore automobilistico.</p>
        </div>
        <div className="md:w-[30%] flex items-center justify-center">
            <Link href="/contact"> <Button text="Contattaci" /></Link>
           
        </div>
    </div>
</div>
  );
};

export default EndPage;