
function Formulario (props){
    return(
        <div>
            <input 
            type="text"
            id="query"
            value={props.query}
            onChange={(e) => props.setQuery(e.target.value)}
            placeholder="Texto a buscar"
            />
            <button
            id="botonsearch"
            onClick={()=> props.callServer()}
            >Buscar</button>
        </div>
    )
}
export default Formulario