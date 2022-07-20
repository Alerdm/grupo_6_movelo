import React, {useState,useEffect} from 'react';
import Servicio  from './Servicio';


function ServiciosInDb(){
    const [servicios,setServiciosList] = useState([]);

    
    useEffect(() =>{
        fetch('http://localhost:3001/api/servicios')
            .then(respuesta =>{
                return respuesta.json()
            })
            .then(servicios =>{
                setServiciosList(servicios.data)
            })
            .catch(error => console.log(error))
    }, [])

    return (
        <>
            {/*<!-- Categories in DB -->*/}
            <div className="col-lg-6 mb-4">						
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h6  className="m-0 font-weight-bold text-gray-800">Servicios en Data Base</h6>
                    </div>
                    <div className="card-body fondoCaja">
                        <div className="row">
                            {
                                servicios.map((servicio,i )=>{
                                    return  <Servicio  {...servicio}  key={servicio+i} />
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>            
        </>
    )
                                
}
export default ServiciosInDb;