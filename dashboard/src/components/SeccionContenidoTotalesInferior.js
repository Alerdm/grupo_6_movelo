import React from 'react';
import { useState } from 'react';
import SmallCardDeTotales from './SmallCardDeTotales';


function SeccionContenidoTotalesInferior(){
    const [frecuenciaDiarios, setFrecuenciaDiarios] = useState({
        color: "dark",
        titulo: "Servicios Diarios",
        valor: 0,
        icono: "fas fa-sun",
        style: "col-md-4 mb-4",
        link: "/servicios/frecuencia"
    })
    const [frecuenciaSemanal, setFrecuenciaSemanal] = useState({
        color: "dark",
        titulo: "Servicios Semanales",
        valor: 0,
        icono: "fas fa-snowflake",
        style: "col-md-4 mb-4",
        link: "/servicios/frecuencia"
    })
    
    const [frecuenciaMensual, setFrecuenciaMensual] = useState({
        color: "dark",
        titulo: "Servicios Mensuales",
        valor: 0,
        icono: "fas fa-calendar-alt",
        style: "col-md-4 mb-4",
        link: "/servicios/frecuencia"
    })

    const totales  = [frecuenciaDiarios, frecuenciaSemanal, frecuenciaMensual, ]
     
    useState(() =>{
        fetch('http://localhost:3001/api/servicios')
            .then(respuesta =>{
                return respuesta.json()
            })
            .then(servicios =>{
                setFrecuenciaDiarios({...frecuenciaDiarios, valor: servicios.countByFrequency.frecuenciaDiaria})
            })
            .catch(error => console.log(error))

        fetch('http://localhost:3001/api/servicios')
            .then(respuesta =>{
                return respuesta.json()
            })
            .then(servicios =>{
                setFrecuenciaSemanal({...frecuenciaSemanal, valor: servicios.countByFrequency.frecuenciaSemanal})
            })
            .catch(error => console.log(error))

        fetch('http://localhost:3001/api/servicios')
            .then(respuesta =>{
                return respuesta.json()
            })
            .then(servicios =>{
                setFrecuenciaMensual({...frecuenciaMensual, valor: servicios.countByFrequency.frecuenciaMensual})
            })
            .catch(error => console.log(error))
    }, [])
    
    return (
        <>
        {/*<!-- Content Row -->*/}
        <div className="row" >
            {
                totales.map((producto,index)=>{
                    return <SmallCardDeTotales  {...producto}  key= {index}/>
                })
            }      
        </div>
        </>
    )
}
export default SeccionContenidoTotalesInferior;