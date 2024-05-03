import Image from "next/image";
import Description from "../ui/components/description";
import Title from "../ui/components/title";
import know1 from '../../img/know-how/know-how-1-300x225.jpg';

export default function Page() {
    return (
        <>
            <Title title={'Sirion Srl - Prodotti'} />
            <Description text={"Grazie alla nostra tecnologia e flessibilità, siamo in grado di soddisfare ogni esigenza dei nostri clienti e produrre svariati prodotti per il settore Lighting del mercato automotive, come: fanali anteriori, posteriori, indicatori di direzione, fendinebbia, luci di ingombro, ambient light, blind spot, terzi stop e catadiottri."} />

            <div className="md:flex">
                <div className="bg-customDarkGrey2 w-[100%] md:w-[50%] p-20">
                    <h1 className="text-customBlack text-5xl text-left font-extrabold">Frame</h1>
                    <p className="text-customBlack text-left" style={{marginTop:'20px'}}>I frame sono semilavorati costituiti da uno o più inserti metallici sovrastampati.
                        Le piste consentono di realizzare connessioni elettriche, mentre la plastica stampata ha la funzione di struttura e di isolante elettrico tra gli inserti. Il materiale utilizzato per gli inserti è solitamente rame. A seconda del tipo e della funzione, lo spessore varia da 0,2 ad oltre 1 mm. Gli inserti sono di solito trattati per proteggerli dalla corrosione e per aumentare la saldabilità e migliorare la conducibilità. Il materiale plastico utilizzato è solitamente PA6, PA66 o PBT caricato vetro.</p>
                </div>
                <div className="relative w-full md:w-[50%]">
                    <Image src={know1} alt="Immagine Valvole di Sicurezza" layout="fill" objectFit="cover"/>
                </div>
            </div>
            <div className="md:flex">
                <div className="relative w-full md:w-[50%]">
                    <Image src={know1} alt="Immagine Valvole di Sicurezza" layout="fill" objectFit="cover"/>
                </div>
                <div className="bg-customDarkGrey2 w-[100%] md:w-[50%] p-20">
                    <h1 className="text-customBlack text-5xl text-left font-extrabold">Valvole antideflusso</h1>
                    <p className="text-customBlack text-left" style={{marginTop:'20px'}}>Le valvole antideflusso (o di non ritorno) sono valvole impiegate nel circuito combustibile o nel circuito di vapori di olio per evitare che i flussi possano andare in senso contrario. Sono utilizzate di solito nei circuiti benzina sui ciclomotori oppure nei circuiti Blue-By (Iveco- Reflex).</p>
                </div>
            </div>
            <div className="md:flex">
                <div className="bg-customDarkGrey2 w-[100%] md:w-[50%] p-20">
                    <h1 className="text-customBlack text-5xl text-left font-extrabold">Valvole di sicurezza</h1>
                    <p className="text-customBlack text-left" style={{marginTop:'20px'}}>Le valvole di sicurezza si distinguono in: valvole di sicurezza a 2 vie montate tra il serbatoio e il canister che, permettono il controllo delle pressioni nei due sensi. Comunemente definite valvole di ventilazione; valvole di sicurezza monodirezionali montate su serbatoi in genere per limitare la massima pressione.</p>
                </div>
                <div className="relative w-full md:w-[50%]">
                    <Image src={know1} alt="Immagine Valvole di Sicurezza" layout="fill" objectFit="cover"/>
                </div>
            </div>
            <div className="md:flex">
                <div className="relative w-full md:w-[50%]">
                    <Image src={know1} alt="Immagine Valvole di Sicurezza" layout="fill" objectFit="cover"/>
                </div>
                <div className="bg-customDarkGrey2 w-[100%] md:w-[50%] p-20">
                    <h1 className="text-customBlack text-5xl text-left font-extrabold">Valvole di ritegno</h1>
                    <p className="text-customBlack text-left" style={{marginTop:'20px'}}>Le valvole di ritegno depressione per servofreno (comunemente chiamate valvole servofreno), sono montate tra il generatore di depressione (pompa o altro) e il servofreno e servono a mantenere la depressione nello stesso.</p>
                </div>
            </div>
            <div className="md:flex">
                <div className="bg-customDarkGrey2 w-[100%] md:w-[50%] p-20">
                    <h1 className="text-customBlack text-5xl text-left font-extrabold">Canister</h1>
                    <p className="text-customBlack text-left" style={{marginTop:'20px'}}>Il serbatoio a carboni attivi (canister) è collegato all’aerazione del serbatoio carburante tramite il tubo di compensazione della pressione e serve a raccogliere il vapore di carburante che si genera con il riscaldamento e a stoccarlo temporaneamente. I vapori, contenuti nel canister, vengono aspirati dal motore che contemporaneamente li elimina bruciandoli.</p>
                </div>
                <div className="relative w-full md:w-[50%]">
                    <Image src={know1} alt="Immagine Valvole di Sicurezza" layout="fill" objectFit="cover"/>
                </div>
            </div>
            <div className="md:flex">
                <div className="relative w-full md:w-[50%]">
                    <Image src={know1} alt="Immagine Valvole di Sicurezza" layout="fill" objectFit="cover"/>
                </div>
                <div className="bg-customDarkGrey2 w-[100%] md:w-[50%] p-20">
                    <h1 className="text-customBlack text-5xl text-left font-extrabold">Serbatoio a depressione</h1>
                    <p className="text-customBlack text-left" style={{marginTop:'20px'}}>È un contenitore che viene alimentato dalla pompa servofreno. Ne esistono due tipi: 1) Serbatoio monotubo che può essere utilizzato per molteplici applicazioni. 2) Serbatoio bi-tubo (soluzione solo Fiat) che alimenta due circuiti; un circuito alimenta di depressione una valvola proporzionale controllata dalla centralina che regola la chiusura/apertura delle palette del turbo e il secondo circuito serve a chiudere la farfalla dell’aria quando si gira la chiave per spegnere i motori diesel.</p>
                </div>
            </div>
            <div className="md:flex">
                <div className="bg-customDarkGrey2 w-[100%] md:w-[50%] p-20">
                    <h1 className="text-customBlack text-5xl text-left font-extrabold">Evaporatore con valvola multifunzione</h1>
                    <p className="text-customBlack text-left" style={{marginTop:'20px'}}>È un piccolo canister senza carbone in cui confluiscono i vapori di benzina dal serbatoio, generati dalle variazioni di temperatura e di pressione, e possono essere aspirati dalla depressione del motore. La valvola ha tre funzioni: 1) Aprire a pressione definita per far entrare i vapori. 2) Ventilare verso il serbatoio quando si genera depressione. 3) far intervenire il galleggiante e chiudere l’accesso al contenitore quando sale il livello della benzina nello stesso.</p>
                </div>
                <div className="relative w-full md:w-[50%]">
                    <Image src={know1} alt="Immagine Valvole di Sicurezza" layout="fill" objectFit="cover"/>
                </div>
            </div>
        </>
      );
}