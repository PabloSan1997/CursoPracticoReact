import React from "react";
import '../styles/notfound.css'
import { Calaca } from "../imagenes/calaca.jsx";

function NotFound(){
    
    return(
        <div className="posno">
            <p className="error">JAjajajajajajajajaj <br/> 404!!</p>
            <Calaca/>
        </div>
    );
}
export{NotFound}