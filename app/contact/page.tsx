"use client"
import { useRef } from "react";
import Button from "../ui/components/button";
import Title from "../ui/components/title";
import Image from "next/image";
import imageUrl from "../../img/default/map.jpg"

export default function Page() {

    const inputNameRef: any = useRef(null);
    const inputSurnameRef: any = useRef(null);
    const inputBusinessRef: any = useRef(null);
    const inputEmailRef: any = useRef(null);
    const inputMessageRef: any = useRef(null);
    const checkboxref: any = useRef(null);
    

    const handleSubmit = async () => {
        
        console.log('checkboxref', checkboxref.current.checked)

        if(checkboxref.current.checked){
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
              // Qui puoi gestire ulteriormente la risposta positiva, ad esempio resettare il form
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
                <div className=" w-[100%] md:w-[70%] flex flex-col justify-center items-center" style={{border: '2px solid #f1f1f5',paddingTop: '48px !important', paddingRight: '46px !important', paddingBottom: '70px !important', paddingLeft: '46px !important'}}>
                    <h3 className="text-customBlack font-extrabold text-center text-3xl">Richiesta informazioni</h3>
                    <p className="text-customBlack text-center">Per ricevere ulteriori informazioni utilizzate la form qui sotto.</p>
                    <p className="text-customBlack text-center">Tutti i campi sono obbligatori.</p>
                    <div className="w-[100%] flex justify-between"  style={{marginBottom:'10px',paddingTop:'34px'}}>
                        <input type="text" className="w-[49%]"  ref={inputNameRef} placeholder="Nome*" style={{border: '2px solid #f1f1f5', paddingTop: '6px',paddingRight: '10px',paddingBottom: '6px',paddingLeft: '10px',color:'black'}}/>
                        <input type="text" className="w-[49%]"  ref={inputSurnameRef} placeholder="Cognome*" style={{border: '2px solid #f1f1f5', paddingTop: '6px',paddingRight: '10px',paddingBottom: '6px',paddingLeft: '10px',color:'black'}}/>
                    </div>
                    <div className="w-[100%] flex justify-between" style={{marginBottom:'10px'}}>
                        <input type="text" className="w-[49%]" ref={inputEmailRef} placeholder="Email*" style={{border: '2px solid #f1f1f5', paddingTop: '6px',paddingRight: '10px',paddingBottom: '6px',paddingLeft: '10px',color:'black'}}/>
                        <input type="text" className="w-[49%]" ref={inputBusinessRef} placeholder="Azienda*" style={{border: '2px solid #f1f1f5', paddingTop: '6px',paddingRight: '10px',paddingBottom: '6px',paddingLeft: '10px',color:'black'}}/>
                    </div>
                    <div className="w-[100%]">
                      <input type="text" placeholder="Messaggio*" ref={inputMessageRef} style={{border: '2px solid #f1f1f5', paddingTop: '6px',paddingRight: '10px',paddingBottom: '6px',paddingLeft: '10px', height:'100px', width:'100%',color:'black'}}/>
                    </div>
              
                    <div className="flex w-[100%]" style={{marginBottom:'20px', marginTop:'20px'}}>
                        <input type="checkbox" ref={checkboxref} style={{marginRight:'5px'}}/> 
                        <p className="text-customBlack">acconsento al trattamento dei dati personali*</p>
                    </div>
                    <div className="w-[30%]" onClick={() => handleSubmit()}>
                        <Button text="Invia Messaggio"></Button>
                    </div>
                </div>
                <div className=" w-[100%] md:w-[30%] flex justify-center flex-col bg-customDarkGrey3" style={{paddingTop: '48px !important',paddingRight: '30px !important',paddingBottom: '70px !important',paddingLeft: '30px !important'}} >
                    <p className="text-customBlack font-extrabold">Indirizzo</p>
                    <p className="text-customBlack">Via Provinciale 35, 10010 Loranzè</p>
                    <p className="text-customBlack">(Torino)</p>
                    <div style={{height: '1px', width: '30px', background: 'black', marginTop: '20px', marginBottom: '20px'}}></div>
                    <p className="text-customBlack font-extrabold">Recapiti</p>
                    <p className="text-customBlack">Tel. (+39) 0125 538091</p>
                    <p className="text-customBlack">Fax (+39) 0125 254901</p>
                    <div style={{height: '1px', width: '30px', background: 'black', marginTop: '20px', marginBottom: '20px'}}></div>
                    <p className="text-customBlack font-extrabold">Email</p>
                    <p className="text-customBlack">info@deltats.eu</p>
                    <div style={{height: '1px', width: '30px', background: 'black', marginTop: '20px', marginBottom: '20px'}}></div>
                    <p className="text-customBlack font-extrabold">Società</p>
                    <p className="text-customBlack">P.iva / CF 06408910013</p>
                    <p className="text-customBlack">C.C.I.A.A. n. 790052</p>
                    <p className="text-customBlack">Trib. Ivrea 6164</p>
                    <p className="text-customBlack">Capitale Sociale € 1.500.000 i.v.</p>
                </div>
            </div>
          
            <div className="relative w-full h-[20rem] flex items-center justify-center">
    {/* Immagine */}
          <Image
              src={imageUrl}
              alt="Banner Image"
              layout="fill" // Imposta il layout su 'fill' per adattare l'immagine al contenitore
              objectFit="cover" // Imposta objectFit su 'cover' per coprire completamente il contenitore
              quality={100} // Imposta la qualità dell'immagine
          />
        
       
          </div>
        </>
      );
}