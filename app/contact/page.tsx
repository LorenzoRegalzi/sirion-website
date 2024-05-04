"use client"
import { MutableRefObject, useRef } from "react";
import Button from "../ui/components/button";
import Title from "../ui/components/title";
import Image from "next/image";
import imageUrl from "../../img/default/map.jpg"


export default function Page() {
    const inputNameRef = useRef<any>(null);
    const inputSurnameRef = useRef<any>(null)
    const inputBusinessRef = useRef<any>(null);
    const inputEmailRef = useRef<any>(null);
    const inputMessageRef = useRef<any>(null);
    const checkboxRef = useRef<any>(null);

    const handleSubmit = async () => {
     
        if (checkboxRef.current) {
           
              const formData = {
                  name: inputNameRef.current.value,
                  email: inputEmailRef.current.value,
                  message: inputMessageRef.current.value,
                  surname: inputSurnameRef.current.value,
                  business: inputBusinessRef.current.value
              };
            
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            };

            try {
                const response = await fetch('/api/first-route', requestOptions);
                const result = await response.json();

                if (response.ok) {
                    alert("Email inviata con successo!");
                } else {
                    throw new Error(result.error || "Qualcosa è andato storto nell'invio dell'email");
                }
            } catch (error) {
                console.warn(error);
            }
        } else {
            alert("Compilare acconsento al trattamento dei dati personali");
        }
    };

    return (
        <>
            <Title title={'Sirion Srl - Contatti'} />
            <div className="md:flex bg-customWhite p-12">
                <div className="w-full md:w-3/4 flex flex-col justify-center items-center p-12"  style={{border: '2px solid #E5E7EB'}}>
                    <h3 className="text-customBlack font-extrabold text-center text-3xl mb-4">Richiesta informazioni</h3>
                    <p className="text-customBlack text-center mb-4">Per ricevere ulteriori informazioni utilizzate la form qui sotto.</p>
                    <p className="text-customBlack text-center mb-4">Tutti i campi sono obbligatori.</p>
                    <div className="w-full flex flex-col md:flex-row justify-between mb-4">
                        <input type="text" className="w-96 px-4 py-2 mb-2 md:mb-0"    style={{border: '2px solid #E5E7EB'}}ref={inputNameRef} placeholder="Nome*" />
                        <input type="text" className="w-96 px-4 py-2 mb-2 md:mb-0 border-gray-300"  style={{border: '2px solid #E5E7EB'}} ref={inputSurnameRef} placeholder="Cognome*" />
                    </div>
                    <div className="w-full flex flex-col md:flex-row justify-between mb-4">
                        <input type="text" className="w-96 px-4 py-2 mb-2 md:mb-0"  style={{border: '2px solid #E5E7EB'}} ref={inputEmailRef} placeholder="Email*" />
                        <input type="text" className="w-96 px-4 py-2 mb-2 md:mb-0"  style={{border: '2px solid #E5E7EB'}} ref={inputBusinessRef} placeholder="Azienda*" />
                    </div>
                    <input type="text" className="w-full px-4 py-2 mb-4"  style={{border: '2px solid #E5E7EB', height: '100px' }} ref={inputMessageRef} placeholder="Messaggio*" />
                    <div className="w-full flex items-center mb-4">
                        <input type="checkbox" ref={checkboxRef} className="mr-2" />
                        <p className="text-customBlack">acconsento al trattamento dei dati personali*</p>
                    </div>
                    <div className="w-full md:w-1/3" onClick={handleSubmit}>
                        <Button text="Invia Messaggio" />
                    </div>
                </div>
                <div className="w-full md:w-1/4 flex justify-center flex-col bg-customDarkGrey3 p-12">
                    <p className="text-customBlack font-extrabold">Indirizzo</p>
                    <p className="text-customBlack">Via Provinciale 35, 10010 Loranzè</p>
                    <p className="text-customBlack">(Torino)</p>
                    <hr className="my-6 border-gray-200" />
                    <p className="text-customBlack font-extrabold">Recapiti</p>
                    <p className="text-customBlack">Tel. (+39) 0125 538091</p>
                    <p className="text-customBlack">Fax (+39) 0125 254901</p>
                    <hr className="my-6 border-gray-200" />
                    <p className="text-customBlack font-extrabold">Email</p>
                    <p className="text-customBlack">info@deltats.eu</p>
                    <hr className="my-6 border-gray-200" />
                    <p className="text-customBlack font-extrabold">Società</p>
                    <p className="text-customBlack">P.iva / CF 06408910013</p>
                    <p className="text-customBlack">C.C.I.A.A. n. 790052</p>
                    <p className="text-customBlack">Trib. Ivrea 6164</p>
                    <p className="text-customBlack">Capitale Sociale € 1.500.000 i.v.</p>
                </div>
            </div>
            <div className="relative w-full h-[20rem] flex items-center justify-center">
                <Image
                    src={imageUrl}
                    alt="Banner Image"
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                />
            </div>
        </>
    );
}
