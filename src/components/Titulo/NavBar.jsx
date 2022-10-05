import CartWidget from './CartWidget'
import './styles/NavBar.css'

const NavBar = () => {
    return (
        <div className='container'>
            <div>
                <p>Zapateria de Pepe</p>
                <p>Zapatos</p>
                <p>Zapatillas</p>
                <p>Botas</p>
            </div>
            <CartWidget/>
        </div>
    )
}

export default NavBar