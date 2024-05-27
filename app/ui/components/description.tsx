import React from "react";

const Description = (props: any) => {

  
  return (
    <div className="w-100 bg-customWhite flex-col flex items-center p-10 md:p-20">
        <p className="text-customBlack justify-center text-center text-xl">{props.text}</p> 
        {props.text2 && <p className="text-customBlack justify-center text-center text-xl">{props.text2}</p>}
        {props.text3 && <p className="text-customBlack justify-center text-center text-xl">{props.text3}</p>}
    </div>
  );
};

export default Description;