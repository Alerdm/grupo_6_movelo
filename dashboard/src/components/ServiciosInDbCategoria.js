import React, {useState,useEffect} from 'react';
import Servicio  from './Servicio';


function ServiciosInDb(){
    const [serviciosLocales,setServiciosLocalesList] = useState([]);
    const [serviciosInternacionales,setServiciosInternacionalesList] = useState([]);


    
    useEffect(() =>{
        fetch('http://localhost:3001/api/servicios')
            .then(respuesta =>{
                return respuesta.json()
            })
            .then(servicios =>{
                setServiciosLocalesList(servicios.countByCategory.serviciosLocalesDetalle)
            })
            .catch(error => console.log(error))
        fetch('http://localhost:3001/api/servicios')
            .then(respuesta =>{
                return respuesta.json()
            })
            .then(servicios =>{
                setServiciosInternacionalesList(servicios.countByCategory.serviciosInternacionalesDetalle)
            })
            .catch(error => console.log(error))
    }, [])

    return (
        <>
            {/*<!-- Categories in DB -->*/}
            <div style={{display: "flex", flexDirection: "row", justifyContent: "space-around"}}>
                <div className="col-lg-6 mb-4">						
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h6  className="m-0 font-weight-bold text-gray-800">Servicios Locales</h6>
                        </div>
                        <div className="card-body fondoCaja">
                            <div className="row">
                                {
                                    serviciosLocales.map((servicio,i )=>{
                                        return  <Servicio  {...servicio}  key={servicio+i} />
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-6 mb-4">						
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h6  className="m-0 font-weight-bold text-gray-800">Servicios Internacionales</h6>
                        </div>
                        <div className="card-body fondoCaja">
                            <div className="row">
                                {
                                    serviciosInternacionales.map((servicio,i )=>{
                                        return  <Servicio  {...servicio}  key={servicio+i} />
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>   
            </div>        
        </>
    )
                                
}
export default ServiciosInDb;