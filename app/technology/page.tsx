"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css';

import { useState } from 'react';
import Title from '../ui/components/title';
import Image from 'next/image';
import TechImg1 from './../../img/technology/image.55D8M2.png'
import TechImg3 from './../../img/technology/image.G6J5M2.png'
import TechImg5 from './../../img/technology/image.QCILN2.png'
import EndPage from '../ui/components/end-page';
import ArrowDownIcon from '../ui/icon/arrow-down';

export default function Page() {
    const [showRobot, setShowRobot] = useState(true)
    const [showLine, setShowLine] = useState(false)
    const [showIsland, setShowIsland] = useState(false)
    const [showLaboratory, setShowLaboratory] = useState(false)

    const openTab = (title: any) => {
        switch (title) {
            case 'Robot':
                setShowLine(false);
                setShowIsland(false);
                setShowRobot(true);
                setShowLaboratory(false);
                break;
            case 'Linee':
                setShowRobot(false);
                setShowIsland(false);
                setShowLine(true);
                setShowLaboratory(false);
                break;
            case 'Isole':
                setShowRobot(false);
                setShowLine(false);
                setShowIsland(true);
                setShowLaboratory(false);
                break;
            case 'Laboratory':
                setShowRobot(false);
                setShowLine(false);
                setShowIsland(false);

                setShowLaboratory(true);
                break;
            default:
                break;
        }
    }

    return (
        <>
            <Title title={'Sirion Srl - Tecnologia'} />

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
                            <SwiperSlide>
                                <Image src={TechImg3} alt='techImage' width={300} height={100}></Image>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image src={TechImg5} alt='techImage' width={300} height={100}></Image>
                            </SwiperSlide>
                        </Swiper>
                  
              
                </div>
                <div className=" w-[100%] md:w-[50%] flex flex-col">
                
                    <div style={{
                        padding: '13px 35px 12px 15px',
                        border: '1px #d9dbdb solid',
                        cursor: 'pointer',
                        marginBottom: '10px',
                        display:'flex'
                    }} onClick={() => openTab('Robot')}>
                        <ArrowDownIcon color={'black'}/><p className="text-customBlack text-sm text-left font-semibold" style={{marginLeft:'5px'}}>Alluminatura</p>
                    </div>
                    {
                        showRobot && (<div className='p-5'><p className="text-customBlack text-sm text-left font-semibold pb-5">Sirion dispone di n°44 Presse ad iniezione, di cui nello specifico: dalle 40 alle 1100 TONS di cui 6 verticali da 80 a 250 TONS con tavola rotante: </p>
                            <ul className='pl-5'>
                                <li className="text-customBlack text-sm text-left font-semibold">1 alluminatrice Arzuffi con diametro 1800 e altezza 1600</li>
                                <li className="text-customBlack text-sm text-left font-semibold">1 alluminatrice Galileo con diametro 1340 e altezza 950</li>
                                <li className="text-customBlack text-sm text-left font-semibold">1 alluminatrice Galileo con diametro 1100 e altezza 950</li>
                            </ul>
                        </div>)
                    }
                    <div style={{
                        padding: '13px 35px 12px 15px',
                        border: '1px #d9dbdb solid',
                        cursor: 'pointer',
                        marginBottom: '10px',
                        display:'flex'
                    }} onClick={() => openTab('Linee')}>
                        <ArrowDownIcon color={'black'}/><p className="text-customBlack text-sm text-left font-semibold" style={{marginLeft:'5px'}}>Presse ad iniezione</p>
                    </div>
                    {
                        showLine && <p className="text-customBlack text-sm text-left font-semibold p-5">Sirion dispone di n°44 Presse ad iniezione, di cui nello specifico: dalle 40 alle 1100 TONS di cui 6 verticali da 80 a 250 TONS con tavola rotante</p> 
                    }
                     <div style={{
                        padding: '13px 35px 12px 15px',
                        border: '1px #d9dbdb solid',
                        cursor: 'pointer',
                        marginBottom: '10px',
                        display:'flex'
                    }} onClick={() => openTab('Isole')}>
                        <ArrowDownIcon color={'black'}/><p className="text-customBlack text-sm text-left font-semibold" style={{marginLeft:'5px'}}>Saldatrici</p>
                    </div>
                    {
                        showIsland  &&(<div className="p-5"><p className="text-customBlack text-sm text-left font-semibold pb-5">Sirion dispone di un parco saldatrici dedicato composto da:</p>
                        <ul className='pl-5'>
                            <li className="text-customBlack text-sm text-left font-semibold">2 saldatrici CEMAS a vibrazione</li>
                            <li className="text-customBlack text-sm text-left font-semibold">5 saldatrici Branson a vibrazione</li>
                            <li className="text-customBlack text-sm text-left font-semibold">3 saldatrivi Euromodel ad ultrasuoni</li>
                        </ul>
                    </div>)
                    }
                       <div style={{
                        padding: '13px 35px 12px 15px',
                        border: '1px #d9dbdb solid',
                        cursor: 'pointer',
                        marginBottom: '10px',
                        display:'flex'
                    }} onClick={() => openTab('Laboratory')}>
                        <ArrowDownIcon color={'black'}/><p className="text-customBlack text-sm text-left font-semibold" style={{marginLeft:'5px'}}>Laboratorio</p>
                    </div>
                    {
                        showLaboratory && <p className="text-customBlack text-sm text-left font-semibold p-5">Sirion dispone di un nuovo laboratorio appena ristrutturato dotato di camera fotometrica, banco di prova corrosione, banco di resistenza pioggia e polvere, cella umidostatica, banco vibrante e cella climatica.</p> 
                    }
                </div>
            </div>
            <EndPage></EndPage>
        </>
      );
}