import reactLogo from './assets/react.svg'

function Header() {
return(
    <div id="cabecera">
        <img className="logo" src={reactLogo} alt="React logo" />
        <h3 className="mensaje"> Bienvenido a la página de Gonzalo Die Vicente</h3>
    </div>
)
}
export default Header