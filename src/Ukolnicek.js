import { useState } from 'react';
import NovyUkol from './NovyUkol';
import PolozkaUkolu from './PolozkaUkolu';

export default function Ukolnincek() {

    const [seznamUkolu, nastavSeznamUkolu] = useState(['Novy ukol', 'dalsi ukol'])

    function pridejUkol(novyUkol) {
        nastavSeznamUkolu([...seznamUkolu, novyUkol])
    }

    return(
        <>
        <NovyUkol pridejUkol={pridejUkol}/>
        <br></br>
        {/*seznamUkolu.map((ukol) => (
            <>
            <span>{ukol}</span>
            <br/>
            </>
        ))
        */}
        {seznamUkolu.map((ukol, poradi) => <PolozkaUkolu ukol={ukol} poradi={poradi}></PolozkaUkolu>)}
        <button onClick={() => pridejUkol(", novy ukol")}>Přidej náhodný úkol</button>
        </>
    )
}