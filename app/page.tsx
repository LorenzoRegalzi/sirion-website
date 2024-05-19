"use client"
import Title from "./ui/components/title";
import Image from "next/image";
import news1 from "../img/news/news_1.png";
import news2 from "../img/news/news_2.png";
import news3 from "../img/news/news_3.png";
import Head from "next/head";
import TechImg5 from '../img/products/E84 BMW.jpeg';
import TechImg1 from '../img/product/Tyco 1.jpeg';
import Button from "./ui/components/button";
import EndPage from "./ui/components/end-page";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css/pagination";
import 'swiper/css/navigation';
import "swiper/css";
import { useEffect, useState } from "react";

export default function Home() {

    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    const [count3, setCount3] = useState(0);
    const [count4, setCount4] = useState(0);
    const finalCount1 = 18000;
    const finalCount2 = 36000;
    const finalCount3 = 80;
    const finalCount4 = 800;
    const duration = 3000; // Durata in millisecondi
  
    useEffect(() => {
      const startTime = Date.now();
      const interval = setInterval(() => {
        const elapsedTime = Date.now() - startTime;
        const progress = Math.min(1, elapsedTime / duration);
        const newCount1 = Math.floor(progress * finalCount1);
        setCount1(newCount1);
        const newCount2 = Math.floor(progress * finalCount2);
        setCount2(newCount2);
        const newCount3 = Math.floor(progress * finalCount3);
        setCount3(newCount3);
        const newCount4 = Math.floor(progress * finalCount4);
        setCount4(newCount4);
  
        if (progress === 1) {
          clearInterval(interval);
        }
      }, 2); // Intervallo di aggiornamento del contatore (10 millisecondi)
  
      return () => clearInterval(interval);
    }, []);


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
        <meta name="description" content="Sirion Srl è un’azienda leader nel settore dell’illuminazione per il mercato automobilistico, specializzata nello stampaggio plastico ad iniezione. Offriamo un servizio completo, dalla progettazione alla realizzazione del componente finale, garantendo qualità e affidabilità in ogni fase del processo." />
    </Head>
    <Title title={"Sirion Srl - Home"} description={"Sirion Srl è un’azienda leader nel settore dell’illuminazione per il mercato automobilistico, specializzata nello stampaggio plastico ad iniezione. Offriamo un servizio completo, dalla progettazione alla realizzazione del componente finale, garantendo qualità e affidabilità in ogni fase del processo."}/>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-center bg-customWhite p-10  justify-items-start">
    <div className="max-w-xs bg-customWhite p-4 items-start w-100">
        <div className="flex">
            
            <div className="flex flex-col">
                <h1 className="text-customOrange text-5xl text-left font-medium">{count1}</h1>
                <h3 className="text-customBlack text-left font-medium mt-2">mq di struttura coperta</h3>
            </div>
        </div>
    </div>
    <div className="max-w-xs bg-customWhite p-4 items-start w-100">
        <div className="flex">
            
            <div className="flex flex-col">
                <h1 className="text-customOrange text-5xl text-left font-medium">{count2}</h1>
                <h3 className="text-customBlack text-left font-medium mt-2">mq di struttura totale</h3>
            </div>
        </div>
    </div>
    <div className="max-w-xs bg-customWhite p-4 items-start w-100">
        <div className="flex">
            
            <div className="flex flex-col">
                <h1 className="text-customOrange text-5xl text-left font-medium">{count3}</h1>
                <h3 className="text-customBlack text-left font-medium mt-2">persone nel team</h3>
            </div>
        </div>
    </div>
    <div className="max-w-xs bg-customWhite p-4 items-start w-100">
        <div className="flex">
            <div className="flex flex-col">
                <h1 className="text-customOrange text-5xl text-left font-medium"> {count4}</h1>
                <h3 className="text-customBlack text-left font-medium mt-2">tonnellaggio massimo presse</h3>
            </div>
        </div>
    </div>
</div>



    <div className="flex flex-col md:flex-row items-center justify-center p-10 bg-customWhite">
        <div className="w-full md:w-1/2 max-w-md md:max-w-800 mx-4 my-2 bg-gray-200 flex items-center justify-center">
            <Image src={TechImg1} alt="Immagine Know How 1"  />
        </div>
        <div className="w-full md:w-1/2 max-w-md md:max-w-800 mx-4 my-2 bg-gray-200">
            <h4 className="mb-4 text-customBlack text-3xl font-medium">Know How</h4>
            <p className="mb-4 text-customBlack">Scopri il know-how decennale di Sirion nel settore dell’illuminazione per il mercato automotive. La nostra flessibilità e esperienza ci rendono un partner affidabile per i produttori di componenti auto italiani ed esteri.</p>
            <Button text={"Scopri"}></Button>
        </div>
    </div>
    <div className="flex flex-col md:flex-row items-center justify-center p-10 bg-customWhite">
    <div className="w-full md:w-1/2 max-w-md md:max-w-800 mx-4 my-2 bg-gray-200 md:order-last flex items-center justify-center">
        <Image src={TechImg5} alt="Immagine Know How 1" />
    </div>
    <div className="w-full md:w-1/2 max-w-md md:max-w-800 mx-4 my-2 bg-gray-200 md:order-first">
        <h4 className="mb-4 text-customBlack text-3xl font-medium">Prodotti</h4>
        <p className="mb-4 text-customBlack">Grazie alla nostra tecnologia e flessibilità, siamo in grado di soddisfare ogni esigenza dei nostri clienti e produrre svariati prodotti per il settore Lighting del mercato automotive, come: fanali anteriori, posteriori, indicatori di direzione, fendinebbia, luci di ingombro, ambient light, blind spot, terzi stop e catadiottri.</p>
        <Button text={"Scopri"}></Button>
    </div>
    </div>


    {/* <div className="md:flex bg-customWhite">
        <div className="w-full md:w-1/3 p-20 bg-customDarkGrey2">
            <h1 className="text-customBlack text-5xl text-left font-extrabold">Storia</h1>
            <p className="text-customBlack text-left mt-4">Sirion Srl, fondata il 01/09/2023 dopo l’acquisizione tramite il bando del MISE dell’ex Blutec, è oggi un attore chiave nel settore automobilistico. Specializzata nella progettazione, stampaggio e assemblaggio di materie plastiche per il mercato dell’Automotive, con particolare attenzione al settore Lighting (interni ed esterni), Sirion Srl rappresenta una realtà produttiva strategica per i principali player del settore. La società è interamente di proprietà della capogruppo DeltAts Srl, con sede a Loranzè (TO).</p>
        </div>
        <div className="relative w-full md:w-1/3">
            <Image src={know1} alt="Immagine Valvole di Sicurezza" layout="fill" objectFit="cover"/>
        </div>
        <div className="w-full md:w-1/3 p-20 bg-customDarkGrey2">
            <h1 className="text-customBlack text-5xl text-left font-extrabold">Missione</h1>
            <p className="text-customBlack text-left mt-4">Sirion si impegna per il successo economico attraverso il miglioramento continuo dei processi e l’utilizzo efficiente delle risorse interne, con il cliente al centro di ogni attività. Con un’attenzione particolare alla soddisfazione del cliente e dei dipendenti, Sirion promuove un ambiente di lavoro sano e rispettoso basato sulla fiducia e sull’innovazione. La qualità, la competitività dei costi e la sostenibilità ambientale guidano il nostro successo, con un’impegno costante per la sicurezza sul posto di lavoro.</p>
        </div>
    </div> */}

    {/* <div className="md:flex bg-customWhite p-20">
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
    </div> */}
   
    <div className="flex flex-col md:flex-row items-center justify-center p-10 bg-customWhite">
  <div className="w-full md:w-1/2 max-w-md md:max-w-800 mx-4 my-2 bg-gray-200 md:order-last bg-customDarkGrey2 p-3 ">
  <Swiper
                        spaceBetween={20}
                        modules={[Navigation]}
                      
                        slidesPerView={1} // Numero di slide visibili contemporaneamente
                        centeredSlides={true} // Centra le slide attive
                        navigation={true} // Abilita la navigazione
                       
                        >
                            <SwiperSlide >
                                <video width="600" controls>
                                    <source src="/news.mp4" type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </SwiperSlide>

                            <SwiperSlide>
                                <Image src={news1} alt="techImage" ></Image>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image src={news2} alt="techImage"></Image>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image src={news3} alt="techImage"></Image>
                            </SwiperSlide>
                        </Swiper>
  </div>
  <div className="w-full md:w-1/2 max-w-md md:max-w-800 mx-4 my-2 bg-gray-200 md:order-first">
    <h4 className="mb-4 text-customBlack text-3xl font-medium">Recensioni dei Media</h4>
    <p className="mb-4 text-customBlack">Siamo orgogliosi di essere stati al centro dell’attenzione dei media. Le recensioni dei giornali riflettono il nostro impegno e la nostra dedizione nel settore. Da giornalisti apprezzati a riviste di settore, le nostre iniziative hanno catturato linteresse di tutti. Scopri cosa dicono di noi i media e perché siamo una scelta di fiducia nel mercato.</p>
    
  </div>
</div>

    <EndPage></EndPage>
</>
  );
}
