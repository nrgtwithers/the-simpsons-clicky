import React from "react";
import "./style.css";


function SimpsonsCard(props) {
    return (
        <div className="col s1">
            <div className="img-container" onClick={()=>props.imageClicked(props.id)}>
                <img alt={props.name} src={props.image} />
            </div>
        </div>
    );
}
  

export default SimpsonsCard;