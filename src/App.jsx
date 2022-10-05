import reactLogo from './assets/react.svg'
import './App.css'
import Titulo from './components/Titulo/Titulo'


function App() {

  /* const styleApp = {backgroundColor: "blue", fontSize: 22} */ //Se puede importar desde un archivo js (Ej: AppStyle.js) para que no quede acá

/*   const saludo = ()=> alert("hola") */

  return (
    <div className="App" /* style= {styleApp } onClick= {saludo }  */ >
      {/* onclick= "nombre()" no va mas asi */}
      {/* {        <Titulo/>} */}
    </div>
  )
}

export default App
