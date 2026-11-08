import reactLogo from './assets/react.svg'


function Resultados (props){
    return(
        <div>
            <ul id="resultados">
                {props.resultado.map(item=>{
                return <li key={item.id}>
                    <p>Nombre: {item.firstName} {item.lastName}</p>
                    <p>Email: {item.email}</p>
                    <p><img src={reactLogo} alt="React Logo" /></p>
                    
                </li>
                })}
            </ul>
        </div>
    )
}
export default Resultados