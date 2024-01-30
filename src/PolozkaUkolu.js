export default function PolozkaUkolu({ ukol, poradi, fceSmazat, fceSpln }) {
    return(
        <>
        <span>{poradi}</span>
        {!ukol.splneno && <span className="text-ukolu">{ukol.text}</span>}
        {ukol.splneno && <span className="splneny-ukol">{ukol.text}</span>}
        <button id="smazat" onClick={() => fceSmazat(poradi)}>X</button>
        <button id="oznac" onClick={() => fceSpln(poradi)}>✔</button>
        <br></br>
        </>
    )
}