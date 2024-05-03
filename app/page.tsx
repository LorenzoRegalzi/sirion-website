"use client"
import Title from "./ui/components/title";
import Description from "./ui/components/description";
import Image from "next/image";
import news1 from '../img/news/news_1.png';
import news2 from '../img/news/news_2.png';
import know1 from '../img/default/image.H0XLN2.png';
import Head from "next/head";

export default function Home() {


  return (
    <>
    <Head>
        {/* Aggiungi le meta tag per le keyword */}
        <meta name="keywords" content="illuminazione, stampaggio plastico, iniezione plastica, automotive, progettazione, qualità, affidabilità" />
        {/* Aggiungi il tag canonical */}
        <link rel="canonical" href="https://www.sirion.com/" />
        {/* Aggiungi le direttive robots */}
        <meta name="robots" content="index, follow" />
        {/* Altre meta tag già presenti */}
        <title>Sirion Srl - Home</title>
        <meta name="description" content="Sirion Srl è un'azienda leader nel settore dell'illuminazione per il mercato automobilistico, specializzata nello stampaggio plastico ad iniezione. Offriamo un servizio completo, dalla progettazione alla realizzazione del componente finale, garantendo qualità e affidabilità in ogni fase del processo." />
    </Head>
    <Title title={'Sirion Srl - Home'} />
    <Description text={"Sirion Srl è un'azienda leader nel settore dell'illuminazione per il mercato automobilistico, specializzata nello stampaggio plastico ad iniezione. Offriamo un servizio completo, dalla progettazione alla realizzazione del componente finale, garantendo qualità e affidabilità in ogni fase del processo."} />

    <div className="md:flex bg-customWhite p-20">
        <div className="w-full md:w-1/3 bg-customWhite">
            <h1 className="text-customBlack text-3xl text-left font-medium">Recensioni dei media: cosa dicono di noi i giornali sulla nostra storia e il nostro impegno</h1>
        </div>
        <div className="w-full md:w-1/3 bg-customWhite">
            <div className="flex">
                <h1 className="text-textGrey text-5xl text-left font-extrabold mr-4">01</h1>
                <div className="flex flex-col">
                    <h1 className="text-customBlack text-xl text-left font-medium">Stampa</h1>
                    <Image src={news1} alt="News 1" width={500} height={300} className="p-10" />
                </div>
            </div>
        </div>
        <div className="w-full md:w-1/3 bg-customWhite">
            <div className="flex">
                <h1 className="text-textGrey text-5xl text-left font-extrabold mr-4">02</h1>
                <div className="flex flex-col">
                    <h1 className="text-customBlack text-xl text-left font-medium">Piccolo</h1>
                    <Image src={news2} alt="News 2" width={500} height={300} className="p-10" />
                </div>
            </div>
        </div>
    </div>

    <div className="md:flex bg-customWhite">
        <div className="w-full md:w-1/3 p-20 bg-customDarkGrey2">
            <h1 className="text-customBlack text-5xl text-left font-extrabold">Storia</h1>
            <p className="text-customBlack text-left mt-4">Sirion Srl, fondata il 01/09/2023 dopo l'acquisizione tramite il bando del MISE dell'ex Blutec, è oggi un attore chiave nel settore automobilistico. Specializzata nella progettazione, stampaggio e assemblaggio di materie plastiche per il mercato dell'Automotive, con particolare attenzione al settore Lighting (interni ed esterni), Sirion Srl rappresenta una realtà produttiva strategica per i principali player del settore. La società è interamente di proprietà della capogruppo DeltAts Srl, con sede a Loranzè (TO).</p>
        </div>
        <div className="relative w-full md:w-1/3">
            <Image src={know1} alt="Immagine Valvole di Sicurezza" layout="fill" objectFit="cover"/>
        </div>
        <div className="w-full md:w-1/3 p-20 bg-customDarkGrey2">
            <h1 className="text-customBlack text-5xl text-left font-extrabold">Missione</h1>
            <p className="text-customBlack text-left mt-4">Sirion si impegna per il successo economico attraverso il miglioramento continuo dei processi e l'utilizzo efficiente delle risorse interne, con il cliente al centro di ogni attività. Con un'attenzione particolare alla soddisfazione del cliente e dei dipendenti, Sirion promuove un ambiente di lavoro sano e rispettoso basato sulla fiducia e sull'innovazione. La qualità, la competitività dei costi e la sostenibilità ambientale guidano il nostro successo, con un'impegno costante per la sicurezza sul posto di lavoro.</p>
        </div>
    </div>

    <div className="md:flex bg-customWhite p-20">
        <div className="w-full md:w-1/4 bg-customWhite">
            <div className="flex">
                <h1 className="text-textGrey text-5xl text-left font-extrabold mr-4">01</h1>
                <div className="flex flex-col">
                    <h1 className="text-customBlack text-5xl text-left font-medium">7000</h1>
                    <h3 className="text-customBlack text-left font-medium mt-4">mq di struttura coperta</h3>
                </div>
            </div>
        </div>
        <div className="w-full md:w-1/4 bg-customWhite">
            <div className="flex">
                <h1 className="text-textGrey text-5xl text-left font-extrabold mr-4">02</h1>
                <div className="flex flex-col">
                    <h1 className="text-customBlack text-5xl text-left font-medium">30000</h1>
                    <h3 className="text-customBlack text-left font-medium mt-4">mq di struttura totale</h3>
                </div>
            </div>
        </div>
        <div className="w-full md:w-1/4 bg-customWhite">
            <div className="flex">
                <h1 className="text-textGrey text-5xl text-left font-extrabold mr-4">03</h1>
                <div className="flex flex-col">
                    <h1 className="text-customBlack text-5xl text-left font-medium">80</h1>
                    <h3 className="text-customBlack text-left font-medium mt-4">persone nel team</h3>
                </div>
            </div>
        </div>
        <div className="w-full md:w-1/4 bg-customWhite">
            <div className="flex">
                <h1 className="text-textGrey text-5xl text-left font-extrabold mr-4">04</h1>
                <div className="flex flex-col">
                    <h1 className="text-customBlack text-5xl text-left font-medium">800</h1>
                    <h3 className="text-customBlack text-left font-medium mt-4">tonnellaggio massimo presse</h3>
                </div>
            </div>
        </div>
    </div>
</>
  );
}
