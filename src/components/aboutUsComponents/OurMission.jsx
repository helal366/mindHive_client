import React from 'react';
import { PiPottedPlantFill } from 'react-icons/pi';

const OurMission = () => {
    return (
       <div>
                 <h2 className="text-xl font-semibold mb-2 flex items-start gap-3">
                   <PiPottedPlantFill /> Our Mission
                 </h2>
                 <p className="mb-4 text-justify">
                   To create a secure, inclusive, and interactive space where students
                   from all backgrounds can contribute their knowledge, discover new
                   ideas, and grow together through collaboration and shared learning.
                 </p>
               </div>
    );
};

export default OurMission;