import React from "react";
import imageUrl from "./../../../img/default/business.png"
import Image from "next/image";
const Title = (props: any) => {
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
    <div className="absolute inset-0 bg-black opacity-40 bg-customBlack"></div>
    
    <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center w-[70rem]">
            <h1 className="text-5xl font-extrabold text-white">{props.title}</h1>
        </div>
    </div>
</div>
  );
};

export default Title;