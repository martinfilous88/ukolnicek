import { useState } from 'react';
import NovyUkol from './NovyUkol';

export default function Ukolnincek() {

    const [seznamUkolu, nastavSeznamUkolu] = useState(['Novy ukol', 'dalsi ukol'])

    function pridejUkol(novyUkol) {
        nastavSeznamUkolu([...seznamUkolu, novyUkol])
    }

    return(
        <>
        <NovyUkol pridejUkol={pridejUkol}/>
        <br></br>
        {seznamUkolu.map((ukol) => (
            <>
            <span>{ukol}</span>
            <br/>
            </>
        ))
        }
        <button onClick={() => pridejUkol(", novy ukol")}>Přidej náhodný úkol</button>
        </>
    )
}