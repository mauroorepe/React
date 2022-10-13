import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom"
import NavBar from './components/NavBar/NavBar'
import CarritoPage from './components/Pages/CarritoPage/CarritoPage'
import ItemDetailContainer from './components/Pages/ItemDetailContainer/ItemDetailContainer'
import ItemListContainer from './components/Pages/ItemListContainer/ItemListContainer'
import { NotFound404 } from './components/NotFound404/NotFound404'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css';

function App() {

/*   const styleApp = {backgroundColor: "#191919" , fontSize: 22} */

  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<ItemListContainer greeting={'Hola Mundo'} />} />
        <Route path="/detalle/:idCategoria" element={<ItemDetailContainer/>} />
        <Route path="/detalle/:idProducto" element={<ItemDetailContainer/>} />
        <Route path="/cart" element={<CarritoPage/>} />
        <Route path="/404" element={<NotFound404/>}/>
        <Route path="*" element={<Navigate to="/404"/>}  />
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