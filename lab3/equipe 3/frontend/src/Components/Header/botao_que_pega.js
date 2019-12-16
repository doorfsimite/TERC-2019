import React, { useCallback } from 'react';
import api from "../../services/api";
import Button from 'simple-react-button';

function Led_on() {
    function handleClick(e) {
        e.preventDefault();
        console.log('O link foi clicado.');
    }

    return (
        <a href="http://10.208.3.226:3003/on" onClick={Led_on}>
            BOTÃO(Led - ON)
    </a>
    );
}

/*
const Led_on =  () => {
    const onTestClick =  useCallback((event) => {
        return fetch().then((api.get("/on")));
    }, []);

    return (
        <div>
            <Button onClick={onTestClick}>
                Led - On
            </Button>
        </div>
    );
};
*/

export default Led_on;