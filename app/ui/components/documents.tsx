import React from "react";
import imageUrl from "./../../../img/default/bg-qualita.jpg"
import Image from "next/image";
import Link from "next/link";

const Documents = (props: any) => {
    return (
      <div className="relative w-full h-[20rem] flex items-center justify-center">
        {/* Immagine */}
        <Image
          src={imageUrl}
          alt="Banner Image"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
  
        {/* Overlay scuro */}
        <div className="absolute inset-0 bg-black opacity-60 bg-customBlack"></div>
        
        {/* Contenitore principale */}
        <div className="absolute inset-0 flex flex-col items-center justify-center p-10">
          {/* Titolo */}
          <h1 className="text-white text-4xl font-bold text-center mb-14">Documenti</h1>
          
          {/* Contenitore del testo */}
          <div className="w-full md:w-[70%] flex flex-col md:flex-row items-center">
            <div className="text-center md:text-left">
                <Link href={'/IATF-16949-2016.pdf'}>
                    <p className="text-white mb-4 text-2xl">&#8226; IATF</p>
                </Link>
                <Link href={'/ISO-9001-2015-IT.pdf'}>
                    <p className="text-white mb-4 text-2xl">&#8226; ISO9001</p>
                </Link>
                
            </div>
            {/* Bottone */}
            <div className="mt-4 md:mt-0 md:ml-4">
             
            </div>
          </div>
        </div>
      </div>
    );
  };
  

export default Documents;
