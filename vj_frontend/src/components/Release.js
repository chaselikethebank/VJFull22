import React from "react";
import { useState } from "react";

function Release({ key, link }) {
  // console.log(release)

  return (
    <ul>
      <li>  
      <a href={`${link}`}>cat # here [link.something]
        
        </a>
      {/* {console.log(link)} */}

</li>
    </ul>
  );
}

export default Release;
