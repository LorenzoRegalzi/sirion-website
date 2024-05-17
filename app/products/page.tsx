"use client"
import Image from "next/image";
import Description from "../ui/components/description";
import Title from "../ui/components/title";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation} from "swiper/modules";
import "swiper/css/pagination";
import 'swiper/css/navigation';
import "swiper/css";
import news1 from "../../img/news/news_1.png";
import news2 from "../../img/news/news_2.png";
import news3 from "../../img/news/news_3.png";
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
            style={{height: '50vh'}} 
            >
                <SwiperSlide>
                    <Image src={news1} style={{width:'100%', height: '100%'}} alt="techImage" ></Image>
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={news2} style={{width:'100%', height: '100%'}} alt="techImage"></Image>
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={news3} style={{width:'100%', height: '100%'}} alt="techImage"></Image>
                </SwiperSlide>
            </Swiper>
            <Description text={"Siamo impegnati a soddisfare le esigenze specifiche dei nostri clienti, offrendo soluzioni su misura che rispecchiano la nostra costante ricerca di innovazione e qualità. Grazie alla nostra esperienza nel settore e alla nostra attenzione ai dettagli, ci assicuriamo che ogni prodotto che lascia le nostre strutture sia all'altezza degli standard più elevati."} />
            <Swiper
            spaceBetween={20}
            modules={[Navigation]}
            slidesPerView={1} // Numero di slide visibili contemporaneamente
            centeredSlides={true} // Centra le slide attive
            navigation={true} // Abilita la navigazione
            style={{height: '50vh'}} 
            >
                <SwiperSlide>
                    <Image src={news1} style={{width:'100%', height: '100%'}} alt="techImage" ></Image>
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={news2} style={{width:'100%', height: '100%'}} alt="techImage"></Image>
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={news3} style={{width:'100%', height: '100%'}} alt="techImage"></Image>
                </SwiperSlide>
            </Swiper>
            <Description text={"Scoprite come i nostri prodotti possono migliorare le prestazioni e l'aspetto dei vostri veicoli commerciali. Siamo qui per offrire soluzioni affidabili e di qualità che contribuiscano al successo della vostra attività"} />
            <EndPage></EndPage>
        </>
      );
}