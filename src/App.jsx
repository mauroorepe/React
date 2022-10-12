import {BrowserRouter, Routes, Route} from "react-router-dom"
import './App.css'
import NavBar from './components/NavBar/NavBar'
import CarritoPage from './components/Pages/CarritoPage/CarritoPage'
import ItemDetailContainer from './components/Pages/ItemDetailContainer/ItemDetailContainer'
import ItemListContainer from './components/Pages/ItemListContainer/ItemListContainer'

function App() {

/*   const styleApp = {backgroundColor: "#191919" , fontSize: 22} */

  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<ItemListContainer greeting={'Hola Mundo'} />} />
        <Route path="/detalle" element={<ItemDetailContainer/>} />
        <Route path="/cart" element={<CarritoPage/>} />
      </Routes>
    </BrowserRouter> 
  )
}


export default App





//NOTAS DE LAS CLASES, IGNORAR

/* const styleApp = {backgroundColor: "blue", fontSize: 22} */ //Se puede importar desde un archivo js (Ej: AppStyle.js) para que no quede acá

/*   const saludo = ()=> alert("hola") */

 /* style= {styleApp } onClick= {saludo }  */
{/* onclick= "nombre()" no va mas asi */}
{/* {        <Titulo/>} */}