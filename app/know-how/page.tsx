import Button from "../ui/components/button";
import Description from "../ui/components/description";
import Title from "../ui/components/title";
import Image from "next/image";
import know1 from "../../img/know-how/know-how-1-300x225.jpg";
import EndPage from "../ui/components/end-page";
import TechImg3 from './../../img/technology/image.G6J5M2.png'
import TechImg5 from './../../img/technology/image.QCILN2.png'

export default function Page() {
    return (
        <>
          <Title title={"Sirion Srl - Know How"}  description={"Scopri il know-how decennale di Sirion nel settore dell’illuminazione per il mercato automotive. La nostra flessibilità e esperienza ci rendono un partner affidabile per i produttori di componenti auto italiani ed esteri."} />
          <Description text={"Sono le competenze e la dedizione del nostro team che ci consentono di eccellere nel settore automobilistico, offrendo montaggi di alta qualità per componenti in plastica destinati ai veicoli commerciali. Ogni membro del nostro team contribuisce con la propria esperienza e passione per garantire risultati che soddisfano le esigenze specifiche dei nostri clienti.Presso le nostre strutture, adottiamo metodologie di lavoro efficienti e processi ottimizzati per garantire un montaggio preciso e affidabile. Siamo impegnati a superare le aspettative dei nostri clienti, fornendo soluzioni di montaggio su misura che riflettono la nostra dedizione all’eccellenza.Siamo pronti a collaborare con voi per trasformare le vostre idee in realtà"}></Description>

            <div className="flex flex-col md:flex-row items-center justify-center p-10 bg-customWhite">
                <div className="w-full md:w-1/2 max-w-md md:max-w-800 mx-4 my-2 bg-gray-200 flex items-center justify-center">
                <Image src={know1} alt="Immagine Know How 3" width={500} height={300}/>
                </div>
                <div className="w-full md:w-1/2 max-w-md md:max-w-800 mx-4 my-2 bg-gray-200">
                    <h4 className="mb-4 text-customBlack text-3xl font-medium">Progettazione</h4>
                    <p className="mb-4 text-customBlack">Da SIRION SRL ci impegniamo a soddisfare al meglio le esigenze dei nostri clienti offrendo soluzioni su misura per componenti in plastica, compresi fanali posteriori e anteriori, nonché illuminazione esterna ed interna per veicoli commerciali e non solo; La nostra missione è trasformare le vostre idee in realtà, dalla fase di concezione all’implementazione del progetto finale. Grazie alla nostra vasta esperienza nel settore e alle tecnologie all’avanguardia a nostra disposizione, siamo in grado di guidarvi attraverso ogni passo del processo di progettazione, garantendo risultati che superano le vostre aspettative</p>
                    
                </div>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center p-10 bg-customWhite">
                <div className="w-full md:w-1/2 max-w-md md:max-w-800 mx-4 my-2 bg-gray-200 flex items-center justify-center">
                <Image src={know1} alt="Immagine Know How 3" width={500} height={300}/>
                </div>
                <div className="w-full md:w-1/2 max-w-md md:max-w-800 mx-4 my-2 bg-gray-200">
                    <h4 className="mb-4 text-customBlack text-3xl font-medium">Stampaggio</h4>
                    <p className="mb-4 text-customBlack">Ci distinguiamo per il nostro parco macchine all’avanguardia, in continua evoluzione e dotato di tecnologie 4.0 e 5.0. Con un totale di n°18 presse da 125 a 1250 tonnellate, siamo in grado di gestire una vasta gamma di progetti e garantire risultati impeccabili. La nostra esperienza combinata con la nostra infrastruttura tecnologica ci consente di soddisfare le esigenze più complesse dei nostri clienti, fornendo componenti in plastica che rispettano gli standard più elevati di qualità e precisione. Scoprite come la nostra capacità di stampaggio ad iniezione può contribuire al successo dei vostri progetti automobilistici.</p>
                    
                </div>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center p-10 bg-customWhite">
                <div className="w-full md:w-1/2 max-w-md md:max-w-800 mx-4 my-2 bg-gray-200 flex items-center justify-center">
                <Image src={know1} alt="Immagine Know How 3" width={500} height={300}/>
                </div>
                <div className="w-full md:w-1/2 max-w-md md:max-w-800 mx-4 my-2 bg-gray-200">
                    <h4 className="mb-4 text-customBlack text-3xl font-medium">Montaggio</h4>
                    <p className="mb-4 text-customBlack">crediamo fermamente nelle nostre risorse umane e siamo orgogliosi di presentare il nostro team di oltre 90 dipendenti altamente qualificati.</p>
                    
                </div>
            </div>

         
            <EndPage></EndPage>
        </>
    );
}
