import reactLogo from './assets/react.svg'
import './App.css'
import Titulo from './components/Titulo/Titulo'
import NavBar from './components/Titulo/NavBar'
import CartWidget from './components/Titulo/CartWidget'
import ItemListContainer from './components/Titulo/ItemListContainer'

function App() {

/*   const styleApp = {backgroundColor: "#191919" , fontSize: 22} */

  return (
    <div className="App" >
      <NavBar/>
      <ItemListContainer greeting={'Hola Mundo'} />
    </div>
  )
}

export default App





//NOTAS DE LAS CLASES, IGNORAR

/* const styleApp = {backgroundColor: "blue", fontSize: 22} */ //Se puede importar desde un archivo js (Ej: AppStyle.js) para que no quede acá

/*   const saludo = ()=> alert("hola") */

 /* style= {styleApp } onClick= {saludo }  */
{/* onclick= "nombre()" no va mas asi */}
{/* {        <Titulo/>} */}