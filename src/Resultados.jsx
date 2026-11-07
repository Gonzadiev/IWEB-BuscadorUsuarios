

function Resultados (props){
    return(
        <div>
            <ul id="resultados">
                {props.resultado.map(item=>{
                return <li key={item.id}>
                    <p>Nombre: {item.firstName} {item.lastName}</p>
                    <p>Email: {item.email}</p>
                    
                </li>
                })}
            </ul>
        </div>
    )
}
export default Resultados