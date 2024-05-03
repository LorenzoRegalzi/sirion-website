import Button from "../ui/components/button";
import Description from "../ui/components/description";
import Title from "../ui/components/title";
import Image from 'next/image';
import know1 from '../../img/know-how/know-how-1-300x225.jpg';
import EndPage from "../ui/components/end-page";

export default function Page() {
    return (
        <>
          <Title title={'Sirion Srl - Know How'} />
            <Description text={"Scopri il know-how decennale di Sirion nel settore dell'illuminazione per il mercato automotive. La nostra flessibilità e esperienza ci rendono un partner affidabile per i produttori di componenti auto italiani ed esteri."} />

            <div className="md:flex bg-customWhite p-12">
                <div className="w-full md:w-[33.33%] flex items-center justify-center">
                    <Image src={know1} alt="Immagine Know How 1" width={300} height={225} />
                </div>
                <div className="w-full md:w-[33.33%] flex items-center justify-center">
                    <Image src={know1}  alt="Immagine Know How 2" width={300} height={225} />
                </div>
                <div className="w-full md:w-[33.33%] flex items-center justify-center">
                    <Image src={know1} alt="Immagine Know How 3" width={300} height={225} />
                </div>
            </div>
            <div className="md:flex bg-customWhite p-12">
                <div className="w-full md:w-[33.33%] flex flex-col">
                    <h1 className="text-customBlack text-xl text-left font-extrabold pt-8 pb-10">Progettazione</h1>
                    <p className="text-customBlack text-left">Sirion progetta e sviluppa soluzioni innovative per l'illuminazione automobilistica grazie al nostro ufficio tecnico ed al laboratorio specializzato.</p>
                </div>
                <div className="w-full md:w-[33.33%] flex flex-col">
                    <h1 className="text-customBlack text-xl text-left font-extrabold pt-8 pb-10">Prototipazione</h1>
                    <p className="text-customBlack text-left">Il nostro reparto di stampaggio offre prototipazione avanzata garantendo la massima qualità dei prodotti.</p>
                </div>
                <div className="w-full md:w-[33.33%] flex flex-col">
                    <h1 className="text-customBlack text-xl text-left font-extrabold pt-8 pb-10">Montaggio</h1>
                    <p className="text-customBlack text-left">Sirion fornisce servizi di montaggio completi, assicurando prodotti finiti di alta qualità e pronti all'uso.</p>
                </div>
            </div>
            <EndPage></EndPage>
        </>
    );
}
