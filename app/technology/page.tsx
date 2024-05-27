"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css';

import Title from '../ui/components/title';
import Image from 'next/image';
import TechImg1 from './../../img/technology/Calibro FP.jpeg'
import TechImg2 from './../../img/technology/arzuffi.jpeg'
import TechImg3 from './../../img/technology/engel 800t.jpeg'
import TechImg4 from './../../img/technology/galileo.jpeg'
import TechImg5 from './../../img/technology/image.GUNGN2.png'
import TechImg6 from './../../img/technology/image.QCILN2.png'
import TechImg7 from './../../img/technology/image.ZO71M2.png'
import TechImg8 from './../../img/technology/lab new 1.jpeg'
import TechImg9 from './../../img/technology/lab new.jpeg'
import TechImg10 from './../../img/technology/posaggio saldatura fp.jpeg'
import TechImg11 from './../../img/technology/presse sirion.jpeg'
import TechImg12 from './../../img/technology/test acqua.jpeg'

import EndPage from '../ui/components/end-page';

export default function Page() {

    return (
        <>
            <Title title={'Tecnologia'} />


         

            <div className="flex flex-col md:flex-row items-center justify-center pb-10 pt-20 bg-customWhite">
                <div className="w-full md:w-1/2 max-w-md md:max-w-800 mx-4 my-2 bg-gray-200 flex-col items-center justify-center p-5 md:p-0">
                    <div className="relative w-full h-96">
                        
                        <Image src={TechImg2} alt="Immagine Valvole di Sicurezza" layout="fill" objectFit="cover"/>
                    </div>
                    <div className="bg-customBlueRgb p-6" style={{height:'450px'}}>
                        <h4 className="mb-2 text-customWhite text-3xl font-medium">Alluminatura</h4>
                        <p className="text-customWhite text-sm text-left pb-5">Il nostro parco macchine include 1 alluminatrice Arzuffi con diametro di 1800 e altezza di 1600, 1 alluminatrice Galileo con diametro di 1340 e altezza di 950, e 1 alluminatrice Galileo con diametro di 1100 e altezza di 950. Queste macchine ci consentono di lavorare con precisione e efficienza su una vasta gamma di componenti, garantendo risultati di qualità superiore.
Siamo impegnati a fornire soluzioni personalizzate e di alta qualità ai nostri clienti nel settore automotive, e il nostro reparto di alluminatura è una parte fondamentale del nostro impegno per l'eccellenza. Scoprite come possiamo trasformare le vostre idee in realtà, offrendo componenti in alluminio di prima classe per le vostre applicazioni di illuminazione automobilistica</p>


                        
                    </div>
                </div>
                <div className="w-full md:w-1/2 max-w-md md:max-w-800 mx-4 my-2 bg-gray-200 flex-col items-center justify-center p-5 md:p-0">
                    <div className="relative w-full h-96">
                    <Image src={TechImg3} alt="Immagine Valvole di Sicurezza" layout="fill" objectFit="cover"/>
                    </div>
                    <div className="p-6"  style={{height:'450px', background:'#acacac'}}>
                        <h4 className="mb-2 text-customWhite text-3xl font-medium">Presse ad iniezione</h4>
                        <p className="mb-2 text-customWhite">Sirion dispone di un totale di n°18 presse da 125 a 1250 tonnellate</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center pt-10 pb-20 bg-customWhite">
                <div className="w-full md:w-1/2 max-w-md md:max-w-800 mx-4 my-2 bg-gray-200 flex-col items-center justify-center p-5 md:p-0">
                    <div className="relative w-full h-96">
                        <Image src={TechImg10} alt="Immagine Valvole di Sicurezza" layout="fill" objectFit="cover"/>
                    </div>
                    <div className=" p-6" style={{height:'450px', background:'#acacac'}}>
                        <h4 className="mb-2 text-customWhite text-3xl font-medium">Saldatrici</h4>
                        <p className="text-customWhite text-sm text-left font-semibold pb-5">Sirion dispone di un parco saldatrici dedicato composto da:</p>
                        <ul className='pl-5'>
                            <li className="text-customWhite text-sm text-left font-semibold">2 saldatrici CEMAS a vibrazione</li>
                            <li className="text-customWhite text-sm text-left font-semibold">5 saldatrici Branson a vibrazione</li>   
                            <li className="text-customWhite text-sm text-left font-semibold">3 saldatrivi Euromodel ad ultrasuoni</li>
                        </ul>
                    </div>
                </div>
                <div className="w-full md:w-1/2 max-w-md md:max-w-800 mx-4 my-2 bg-gray-200 flex-col items-center justify-center p-5 md:p-0">
                    <div className="relative w-full h-96">
                        <Image src={TechImg8} alt="Immagine Valvole di Sicurezza" layout="fill" objectFit="cover"/>
                    </div>
                    <div className="bg-customBlueRgb p-6" style={{height:'450px'}}>
                        <h4 className="mb-2 text-customWhite text-3xl font-medium">Laboratorio</h4>
                        <p className="mb-2 text-customWhite">
                        
Sirion presenta il suo nuovo laboratorio, recentemente ristrutturato e dotato di tecnologie all'avanguardia per garantire precisione e affidabilità nei test e nelle analisi dei prodotti. Tra le sue caratteristiche principali, spiccano una camera fotometrica, un banco di prova corrosione, un banco di resistenza alla pioggia e alla polvere, una cella umido statica, un banco vibrante e una cella climatica. Il nostro impegno per la qualità si riflette nel rigoroso processo di test, che assicura la massima performance e durata dei componenti nel tempo. Scopri di più sulle nostre capacità di test e analisi e su come possiamo contribuire al successo dei tuoi progetti nel settore automobilistico.</p>
                    </div>
                </div>
            </div>

            <EndPage></EndPage>
        </>
      );
}