import React, {useState,useEffect} from 'react';
import Servicio  from './Servicio';


function ServiciosInDb(){
    const [serviciosDiarios,setServiciosDiariosList] = useState([]);
    const [serviciosSemanales,setServiciosSemanalesList] = useState([]);
    const [serviciosMensuales,setServiciosMensualesList] = useState([]);

    
    useEffect(() =>{
        fetch('http://localhost:3001/api/servicios')
            .then(respuesta =>{
                return respuesta.json()
            })
            .then(servicios =>{
                setServiciosDiariosList(servicios.countByFrequency.serviciosFrecuenciaDiaria)
            })
            .catch(error => console.log(error))
        fetch('http://localhost:3001/api/servicios')
            .then(respuesta =>{
                return respuesta.json()
            })
            .then(servicios =>{
                setServiciosSemanalesList(servicios.countByFrequency.serviciosFrecuenciaDiaria)
            })
            .catch(error => console.log(error))
        fetch('http://localhost:3001/api/servicios')
            .then(respuesta =>{
                return respuesta.json()
            })
            .then(servicios =>{
                setServiciosMensualesList(servicios.countByFrequency.serviciosFrecuenciaDiaria)
            })
            .catch(error => console.log(error))
    }, [])

    return (
        <>
            {/*<!-- Categories in DB -->*/}
            <div style={{display: "flex", flexDirection: "row", justifyContent: "space-around"}}>
                <div className="col-lg-4 mb-4">						
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h6  className="m-0 font-weight-bold text-gray-800">Servicios Diarios</h6>
                        </div>
                        <div className="card-body fondoCaja">
                            <div className="row">
                                {
                                    serviciosDiarios.map((servicio,i )=>{
                                        return  <Servicio  {...servicio}  key={servicio+i} />
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 mb-4">						
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h6  className="m-0 font-weight-bold text-gray-800">Servicios Semanales</h6>
                        </div>
                        <div className="card-body fondoCaja">
                            <div className="row">
                                {
                                    serviciosSemanales.map((servicio,i )=>{
                                        return  <Servicio  {...servicio}  key={servicio+i} />
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 mb-4">						
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h6  className="m-0 font-weight-bold text-gray-800">Servicios Mensuales</h6>
                        </div>
                        <div className="card-body fondoCaja">
                            <div className="row">
                                {
                                    serviciosMensuales.map((servicio,i )=>{
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