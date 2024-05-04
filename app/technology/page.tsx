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


         

            <div className="flex flex-col md:flex-row items-center justify-center pb-10 pt-20 bg-customWhite">
                <div className="w-full md:w-1/2 max-w-md md:max-w-800 mx-4 my-2 bg-gray-200 flex-col items-center justify-center">
                    <div className="relative w-full h-96">
                        <Image src={TechImg1} alt="Immagine Valvole di Sicurezza" layout="fill" objectFit="cover"/>
                    </div>
                    <div className="bg-customBlueRgb p-6" style={{height:'300px'}}>
                        <h4 className="mb-2 text-customWhite text-3xl font-medium">Alluminatura</h4>
                        <p className="text-customWhite text-sm text-left font-semibold pb-5">Sirion dispone di n°44 Presse ad iniezione, di cui nello specifico: dalle 40 alle 1100 TONS di cui 6 verticali da 80 a 250 TONS con tavola rotante: </p>
                        <ul className='pl-5'>
                            <li className="text-customWhite text-sm text-left font-semibold">1 alluminatrice Arzuffi con diametro 1800 e altezza 1600</li>
                            <li className="text-customWhite text-sm text-left font-semibold">1 alluminatrice Galileo con diametro 1340 e altezza 950</li>
                            <li className="text-customWhite text-sm text-left font-semibold">1 alluminatrice Galileo con diametro 1100 e altezza 950</li>
                        </ul>
                    </div>
                </div>
                <div className="w-full md:w-1/2 max-w-md md:max-w-800 mx-4 my-2 bg-gray-200 flex-col items-center justify-center">
                    <div className="relative w-full h-96">
                        <Image src={TechImg5} alt="Immagine Valvole di Sicurezza" layout="fill" objectFit="cover"/>
                    </div>
                    <div className="p-6"  style={{height:'300px', background:'#acacac'}}>
                        <h4 className="mb-2 text-customWhite text-3xl font-medium">Presse ad iniezione</h4>
                        <p className="mb-2 text-customWhite">Sirion dispone di n°44 Presse ad iniezione, di cui nello specifico: dalle 40 alle 1100 TONS di cui 6 verticali da 80 a 250 TONS con tavola rotante</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center pt-10 pb-20 bg-customWhite">
                <div className="w-full md:w-1/2 max-w-md md:max-w-800 mx-4 my-2 bg-gray-200 flex-col items-center justify-center">
                    <div className="relative w-full h-96">
                        <Image src={TechImg3} alt="Immagine Valvole di Sicurezza" layout="fill" objectFit="cover"/>
                    </div>
                    <div className=" p-6" style={{height:'300px', background:'#acacac'}}>
                        <h4 className="mb-2 text-customWhite text-3xl font-medium">Saldatrici</h4>
                        <p className="text-customWhite text-sm text-left font-semibold pb-5">Sirion dispone di un parco saldatrici dedicato composto da:</p>
                        <ul className='pl-5'>
                            <li className="text-customWhite text-sm text-left font-semibold">2 saldatrici CEMAS a vibrazione</li>
                            <li className="text-customWhite text-sm text-left font-semibold">5 saldatrici Branson a vibrazione</li>   
                            <li className="text-customWhite text-sm text-left font-semibold">3 saldatrivi Euromodel ad ultrasuoni</li>
                        </ul>
                    </div>
                </div>
                <div className="w-full md:w-1/2 max-w-md md:max-w-800 mx-4 my-2 bg-gray-200 flex-col items-center justify-center">
                    <div className="relative w-full h-96">
                        <Image src={TechImg5} alt="Immagine Valvole di Sicurezza" layout="fill" objectFit="cover"/>
                    </div>
                    <div className="bg-customBlueRgb p-6" style={{height:'300px'}}>
                        <h4 className="mb-2 text-customWhite text-3xl font-medium">Laboratorio</h4>
                        <p className="mb-2 text-customWhite">Sirion dispone di un nuovo laboratorio appena ristrutturato dotato di camera fotometrica, banco di prova corrosione, banco di resistenza pioggia e polvere, cella umidostatica, banco vibrante e cella climatica.</p>
                    </div>
                </div>
            </div>

            <EndPage></EndPage>
        </>
      );
}