import React from "react";

function Links (props) {
    return( 
    <div>
        <h3>Links</h3>
        <a href={props.github}>github</a>
        <br />
        <a href={props.linkedin}>linkedin</a>
    </div>)
}


export default Links