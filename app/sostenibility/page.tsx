"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css';

import { useState } from 'react';
import Title from '../ui/components/title';
import Image from 'next/image';
import TechImg1 from './../../img/sostenibility/image.XUX8M2.png'
import EndPage from '../ui/components/end-page';

export default function Page() {
    const [showRobot, setShowRobot] = useState(true)
    const [showLine, setShowLine] = useState(false)
    const [showIsland, setShowIsland] = useState(false)

    const openTab = (title: any) => {
        switch (title) {
            case 'Robot':
                setShowLine(false);
                setShowIsland(false);
                setShowRobot(true);
                break;
            case 'Linee':
                setShowRobot(false);
                setShowIsland(false);
                setShowLine(true);
                break;
            case 'Isole':
                setShowRobot(false);
                setShowLine(false);
                setShowIsland(true);
                break;
            default:
                break;
        }
    }

    return (
        <>
            <Title title={'Sirion Srl - Sostenibilità'} />

            <div className="md:flex bg-customWhite p-20">
                <div className=" w-[100%] md:w-[50%] flex justify-center" >
                 
                <Swiper
                        spaceBetween={20}
                        modules={[Pagination]}
                        style={{width: '40%'}}
                        
                        pagination={{ clickable: true }}
                        slidesPerView={1} // Numero di slide visibili contemporaneamente
                        centeredSlides={true} // Centra le slide attive
                        navigation={true} // Abilita la navigazione
                        >
                            <SwiperSlide>
                                <Image src={TechImg1} alt='techImage' width={300} height={100}></Image>
                            </SwiperSlide>
                        </Swiper>
                  
              
                </div>
                <div className=" w-[100%] md:w-[50%] flex flex-col">
                
                    <h1 className="text-customBlack text-xl text-left font-extrabold"  style={{marginTop:"30px"}}>CO2 Carbon footprint compensation</h1>
                    <p className="text-customBlack text-left text-sm" style={{marginTop:"20px"}}>Sirion lavora sempre con un occhio alla sostenibilità e con l’aiuto della società @Upgreene è già stato emesso il primo report del CALCOLO DELL’ IMPRONTA DI CARBONIO CFP DI ORGANIZZAZIONE  con lo scopo di calcolare l’impronta emissiva di organizzazione di Sirion srl e quindi di quantificare l’impatto sul cambiamento climatico delle singole azioni riconducibili alle attività della sede.
Il totale delle emissioni di CO2 calcolate sarà interamente compensato da UpGreene ,consentendo a Sirion di intraprendere un percorso verso la neutralità climatica.</p>
<h1 className="text-customBlack text-xl text-left font-extrabold"  style={{marginTop:"30px"}}>Pannelli Solari</h1>
                    <p className="text-customBlack text-left text-sm" style={{marginTop:"20px"}}>L’obiettivo di Sirion srl è quello di crescere anche dal punto dell’ecosostenibilità, a tal punto Sirion è già al lavoro con un progetto pluriennale che permetterà entro la fine del 2026 di autoprodurre energia dai pannelli fotovoltaici per coprire fino al 75% del fabbisogno, questo mediante anche impianti elettrici di ultima generazione</p>
                </div>
            </div>
            <EndPage></EndPage>
        </>
      );
}