import Button from "../ui/components/button";
import Description from "../ui/components/description";
import Title from "../ui/components/title";
import Image from "next/image";
import know1 from "../../img/know-how/know-how-1-300x225.jpg";
import EndPage from "../ui/components/end-page";

export default function Page() {
    return (
        <>
          <Title title={"Sirion Srl - Know How"}  description={"Scopri il know-how decennale di Sirion nel settore dell’illuminazione per il mercato automotive. La nostra flessibilità e esperienza ci rendono un partner affidabile per i produttori di componenti auto italiani ed esteri."} />

            <div className="flex flex-col md:flex-row items-center justify-center p-10 bg-customWhite">
                <div className="w-full md:w-1/2 max-w-md md:max-w-800 mx-4 my-2 bg-gray-200 flex items-center justify-center">
                <Image src={know1} alt="Immagine Know How 3" width={500} height={300}/>
                </div>
                <div className="w-full md:w-1/2 max-w-md md:max-w-800 mx-4 my-2 bg-gray-200">
                    <h4 className="mb-4 text-customBlack text-3xl font-medium">Montaggio</h4>
                    <p className="mb-4 text-customBlack">Sirion offre servizi di montaggio completi, garantendo prodotti finiti di alta qualità e pronti all’uso. Grazie alla nostra competenza e esperienza nel settore, assicuriamo un montaggio preciso e accurato che rispetta i più elevati standard qualitativi. Ci impegniamo a fornire soluzioni di montaggio affidabili e efficienti per soddisfare le esigenze dei nostri clienti e garantire la massima soddisfazione.</p>
                    
                </div>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center p-10 bg-customWhite">
            <div className="w-full md:w-1/2 max-w-md md:max-w-800 mx-4 my-2 bg-gray-200 md:order-last flex items-center justify-center">
            <Image src={know1} alt="Immagine Know How 3" width={500} height={300}/>
            </div>
            <div className="w-full md:w-1/2 max-w-md md:max-w-800 mx-4 my-2 bg-gray-200 md:order-first">
                <h4 className="mb-4 text-customBlack text-3xl font-medium">Progettazione</h4>
                <p className="mb-4 text-customBlack">Sirion si distingue per la progettazione e lo sviluppo di soluzioni innovative nel campo dell'illuminazione automobilistica. Grazie al nostro dedicato ufficio tecnico e al laboratorio specializzato, siamo in grado di concepire e realizzare prodotti all'avanguardia che soddisfano le esigenze del mercato. L'approccio orientato all'innovazione e alla qualità ci consente di offrire soluzioni luminose innovative e affidabili.</p>
               
            </div>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center p-10 bg-customWhite">
                <div className="w-full md:w-1/2 max-w-md md:max-w-800 mx-4 my-2 bg-gray-200 flex items-center justify-center">
                <Image src={know1} alt="Immagine Know How 3" width={500} height={300}/>
                </div>
                <div className="w-full md:w-1/2 max-w-md md:max-w-800 mx-4 my-2 bg-gray-200">
                    <h4 className="mb-4 text-customBlack text-3xl font-medium">Prototipazione</h4>
                    <p className="mb-4 text-customBlack">Il nostro reparto di stampaggio vanta una prototipazione avanzata, garantendo la massima qualità dei prodotti fin dall'inizio del processo. Grazie a tecnologie all'avanguardia e a un team altamente qualificato, siamo in grado di realizzare prototipi precisi e funzionali che soddisfano gli standard più elevati. La nostra attenzione ai dettagli e l'impegno per l'eccellenza ci consentono di offrire soluzioni di stampaggio di altissimo livello.</p>
                    
                </div>
            </div>

            <EndPage></EndPage>
        </>
    );
}
