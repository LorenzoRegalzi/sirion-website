"use client"
import Image from "next/image";
import Description from "../ui/components/description";
import Title from "../ui/components/title";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation} from "swiper/modules";
import "swiper/css/pagination";
import 'swiper/css/navigation';
import "swiper/css";


import product1 from "../../img/products/3STOP 2021 1.jpeg";
import product2 from "../../img/products/3STOP 2021 1.jpeg";
import product3 from "../../img/products/3STOP 2021.jpeg";
import product4 from "../../img/products/All. BMW.jpeg";
import product5 from "../../img/products/All. E84 BMW.jpeg";
import product6 from "../../img/products/All. R60.jpeg";
import product7 from "../../img/products/BMW mob. 1.jpeg";
import product8 from "../../img/products/BMW mob. 2.jpeg";
import product9 from "../../img/products/BMW mob..jpeg";
import product10 from "../../img/products/Catad. 2024.jpeg";
import product11 from "../../img/products/Corpo 188.jpeg";
import product12 from "../../img/products/aspark.jpg";
import product13 from "../../img/products/Corpo all. 2014.jpeg";






import EndPage from "../ui/components/end-page";

export default function Page() {
    return (
        <>
            <Title title={'Sirion Srl - Prodotti'} />
            <Description text={"Da SIRION SRL  siamo fieri di presentare una vasta gamma di componenti in plastica di alta qualità progettati appositamente per il settore automobilistico commerciale.I nostri prodotti includono una vasta selezione di fanali anteriori e posteriori, indicatori di direzione, fendinebbia, luci di ingombro, ambient light, blind spot, terzi stop e catadiottri, tutti rigorosamente progettati e realizzati per garantire prestazioni affidabili e durature."} />
            <Swiper
            spaceBetween={20}
            modules={[Navigation]}
            slidesPerView={1} // Numero di slide visibili contemporaneamente
            centeredSlides={true} // Centra le slide attive
            navigation={true} // Abilita la navigazione
           style={{background:'white',height:'30vh'}}
            >
                <SwiperSlide>
                    <div style={{width:'100%',height:'100%',display:'flex',justifyContent:'center'}}>
                        <Image src={product1}  alt="techImage" style={{width:'auto'}}></Image>
                    </div>
                   
                </SwiperSlide>
                <SwiperSlide>
                    <div style={{width:'100%',height:'100%',display:'flex',justifyContent:'center'}}>
                        <Image src={product2}  alt="techImage" style={{width:'auto'}}></Image>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div style={{width:'100%',height:'100%',display:'flex',justifyContent:'center'}}>
                        <Image src={product3}  alt="techImage" style={{width:'auto'}}></Image>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div style={{width:'100%',height:'100%',display:'flex',justifyContent:'center'}}>
                        <Image src={product4}  alt="techImage" style={{width:'auto'}}></Image>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div style={{width:'100%',height:'100%',display:'flex',justifyContent:'center'}}>
                        <Image src={product5}  alt="techImage" style={{width:'auto'}}></Image>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div style={{width:'100%',height:'100%',display:'flex',justifyContent:'center'}}>
                        <Image src={product6}  alt="techImage" style={{width:'auto'}}></Image>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div style={{width:'100%',height:'100%',display:'flex',justifyContent:'center'}}>
                        <Image src={product7}  alt="techImage" style={{width:'auto'}}></Image>
                    </div>
                </SwiperSlide>
              
            </Swiper>
            <Description text={"Siamo impegnati a soddisfare le esigenze specifiche dei nostri clienti, offrendo soluzioni su misura che rispecchiano la nostra costante ricerca di innovazione e qualità. Grazie alla nostra esperienza nel settore e alla nostra attenzione ai dettagli, ci assicuriamo che ogni prodotto che lascia le nostre strutture sia all'altezza degli standard più elevati."} />
            <Swiper
            spaceBetween={20}
            modules={[Navigation]}
            slidesPerView={1} // Numero di slide visibili contemporaneamente
            centeredSlides={true} // Centra le slide attive
            navigation={true} // Abilita la navigazione
            
            style={{background:'white',height:'30vh'}}
            >
                 <SwiperSlide>
                    <div style={{width:'100%',height:'100%',display:'flex',justifyContent:'center'}}>
                        <Image src={product8}  alt="techImage" ></Image>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div style={{width:'100%',height:'100%',display:'flex',justifyContent:'center'}}>
                        <Image src={product9}  alt="techImage" style={{width:'auto'}}></Image>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div style={{width:'100%',height:'100%',display:'flex',justifyContent:'center'}}>
                        <Image src={product10}  alt="techImage" style={{width:'auto'}}></Image>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div style={{width:'100%',height:'100%',display:'flex',justifyContent:'center'}}>
                        <Image src={product11}  alt="techImage" style={{width:'auto'}}></Image>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div style={{width:'100%',height:'100%',display:'flex',justifyContent:'center'}}>
                        <Image src={product12}  alt="techImage" style={{width:'auto'}}></Image>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div style={{width:'100%',height:'100%',display:'flex',justifyContent:'center'}}>
                        <Image src={product13}  alt="techImage" style={{width:'auto'}}></Image>
                    </div>
                </SwiperSlide>
            </Swiper>
            <Description text={"Scoprite come i nostri prodotti possono migliorare le prestazioni e l'aspetto dei vostri veicoli commerciali. Siamo qui per offrire soluzioni affidabili e di qualità che contribuiscano al successo della vostra attività"} />
            <EndPage></EndPage>
        </>
      );
}