import { useState } from 'react';
import NovyUkol from './NovyUkol';
import PolozkaUkolu from './PolozkaUkolu';
import Style from './style.css';



export default function Ukolnicek() {

    const [seznamUkolu, nastavSeznamUkolu] = useState([
        { text: 'Novy ukol', splneno: false },
        { text: 'dalsi ukol', splneno: false },
        { text: 'splneny ukol', splneno: true }
    ])

    function pridejUkol(novyUkol) {
        let novyUkolObj = { text: novyUkol, splneno: false }
        nastavSeznamUkolu([...seznamUkolu, novyUkolObj])
    }


    function smazatUkol(poradiUkolu) {
        let upravenySeznamUkolu = [...seznamUkolu];
        upravenySeznamUkolu.splice(poradiUkolu, 1);
        nastavSeznamUkolu(upravenySeznamUkolu);

    }

    function splnUkol(poradiUkolu) {
        let upravenySeznamUkolu = [...seznamUkolu];
        if (seznamUkolu[poradiUkolu].splneno == true) {
            upravenySeznamUkolu[poradiUkolu].splneno = false;

        } else {
            upravenySeznamUkolu[poradiUkolu].splneno = true;
        }
        nastavSeznamUkolu(upravenySeznamUkolu);
    }




    return (
        <>
            <NovyUkol pridejUkol={pridejUkol} />
            <br></br>
            {/*seznamUkolu.map((ukol) => (
            <>
            <span>{ukol}</span>
            <br/>
            </>
        ))
        */}
            <div id="ukoly">
                {seznamUkolu.map((ukol, poradi) => <PolozkaUkolu key={poradi} ukol={ukol} poradi={poradi} fceSmazat={smazatUkol} fceSpln={splnUkol}></PolozkaUkolu>)}
            </div>
            <div><b>Počet úkolů:{seznamUkolu.length}</b></div>
            <button onClick={() => pridejUkol("novy ukol")}>Přidej náhodný úkol</button>
        </>
    )
}