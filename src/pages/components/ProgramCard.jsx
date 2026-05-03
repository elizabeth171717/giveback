import React from "react";

function ProgramCard({ program }) {
  return (
    <div className="card">
      <h3>{program.name}</h3>
      
       <p>{program.descrition}</p>
      <a  href={program.link} target="_blank" rel="noopener noreferrer">Donate</a>
       
    </div>
  );
}

export default ProgramCard;