import React from 'react';
import cl from '../styles/Control.module.css'
import Modalochka from '../components/Modalochka';
import { useState } from 'react';
import Forma from '../components/Forma';

function Control() {
    const [modalochka, setModalochka] = useState(false);
    function zapusk() {
        setModalochka(true)
    }

    return (
        <div className="App">
            <Modalochka visible={modalochka} setVisible={setModalochka} >
                <Forma></Forma>

            </Modalochka>

            <h1 className={cl.racketa}>Фраерам салалейкум</h1>
            <div className={cl.poh}>
                <button className={cl.knop} onClick={zapusk}>Модалка</button>
            </div>
        </div>
    );
};

export default Control;