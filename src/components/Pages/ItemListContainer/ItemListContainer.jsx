import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { gFetch } from "../../../helpers/gFetch"
import Titulo from "../../Titulo/Titulo"


const ItemListContainer = ({greeting}) => {
    const [ productos, setProductos ] = useState([])
    const [ loading, setLoading ] = useState(true)

    const { idCategoria } = useParams()
    console.log(idCategoria)

    useEffect(()=>{
        if (idCategoria) {

            // la promesa acá
            gFetch() // simulacióon de fetch -> mock   
            .then(resSgte => setProductos(resSgte.filter(producto => producto.categoria === idCategoria)))
            .catch(err => console.log(err))
            .finally(()=> setLoading(false))            
        } else {
            gFetch() // simulacióon de fetch -> mock   
            .then(resSgte => setProductos(resSgte))
            .catch(err => console.log(err))
            .finally(()=> setLoading(false))            
        }
    }, [idCategoria])

    return (
        <>
            <Titulo titulo={'titulo de itemListContainer'} subtitulo={'Subtitulo de itemlistcontainer'} />
                <p>{greeting}</p>  
                { loading ?  
                <h2>Cargando...</h2> 
                :
                productos.map { prod => <div 
                    key={prod.id} 
                    style={{ marginLeft: 100}} 
                    className='col-md-3'/> }
                <Link to={`/detalle/${prod.id}`}>
                    <div className="card w-100 mt-5" >
                        <div className="card-header">
                            {`${prod.name} - ${prod.categoria}`}
                        </div>
                        <div className="card-body">
                            <img src={prod.foto} alt='' className='w-50' />
                            {prod.price}                                                            
                        </div>
                        <div className="card-footer">                                                        
                            {/* <button className="btn btn-outline-primary btn-block">
                                detalle del producto
                                </button> */}
                        </div>
                    </div>
                </Link>                   
            </div> )
            }
        </>
        )
}

export default ItemListContainer