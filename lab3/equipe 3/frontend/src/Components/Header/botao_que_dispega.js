import React, { useCallback } from 'react';
import api from "../../services/api";
import Button from 'simple-react-button';

function Led_off() {
    function handleClick(e) {
        e.preventDefault();
        console.log('O link foi clicado.');
    }

    return (
        <a href="http://10.208.3.226:3003/off" onClick={Led_off}>
            BOTÃO(Led - OFF)
    </a>
    );
}


export default Led_off;