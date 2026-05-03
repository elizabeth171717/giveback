import React, { useState } from "react";
import programs from "../data/programs";
import ProgramCard from "./components/ProgramCard";



function HomePage() {
 const [search, setSearch] = useState("");

  const filteredPrograms = programs.filter((program) => {
    const searchWords = search.toLowerCase().split(" ");

    const searchableText = [
      program.name,
      ...program.categories
    ].join(" ").toLowerCase();

    return searchWords.every(word =>
      searchableText.includes(word)
    );
  });



    return(
    <div className="home-page">
          <h1><span style={{color: "bisque",}}>G</span>IVE <span style={{color: "bisque",}}>B</span>ACK</h1>
          <h2 className="subtitle">Giving back is how communities grow stronger.</h2>
    <p className="sub-heading"> DISCOVER and SUPPORT nonprofit organizations making a meaningful impact in our communities.</p>
    <div className="search-bar-container">
     <input
        type="text"
        placeholder="Search by name or category..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
       
      />
<div className="cards-container">
      {filteredPrograms.map((program) => (
        <ProgramCard key={program.id} program={program} />
      ))}
      </div>
    </div>


  

    </div>
    )
}


export default HomePage;