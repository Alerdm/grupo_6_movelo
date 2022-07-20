import React, { useState } from 'react';
import SmallCardDeTotales from './SmallCardDeTotales';


function SeccionContenidoTodosLosServicios(){
    const [frecuenciaDiarios, setFrecuenciaDiarios] = useState({
        color: "dark",
        titulo: "Todos los Servicios",
        valor: 0,
        icono: "fas fa-sun",
        style: "col-md-4 mb-4",
        link: "/servicios/todos"
    })
    const [frecuenciaSemanal, setFrecuenciaSemanal] = useState({
        color: "dark",
        titulo: "Servicios por Frecuencia",
        valor: 0,
        icono: "fas fa-snowflake",
        style: "col-md-4 mb-4",
        link: "/servicios/frecuencia"
    })
    
    const [frecuenciaMensual, setFrecuenciaMensual] = useState({
        color: "dark",
        titulo: "Servicios por Categoría",
        valor: 0,
        icono: "fas fa-calendar-alt",
        style: "col-md-4 mb-4",
        link: "/servicios/categoria"
    })

    const totales  = [frecuenciaDiarios, frecuenciaSemanal, frecuenciaMensual, ]
     
    useState(() =>{
        fetch('http://localhost:3001/api/servicios')
            .then(respuesta =>{
                return respuesta.json()
            })
            .then(servicios =>{
                setFrecuenciaDiarios({...frecuenciaDiarios, valor: servicios.total})
            })
            .catch(error => console.log(error))

        fetch('http://localhost:3001/api/servicios')
            .then(respuesta =>{
                return respuesta.json()
            })
            .then(servicios =>{
                setFrecuenciaSemanal({...frecuenciaSemanal, valor: servicios.total})
            })
            .catch(error => console.log(error))

        fetch('http://localhost:3001/api/servicios')
            .then(respuesta =>{
                return respuesta.json()
            })
            .then(servicios =>{
                setFrecuenciaMensual({...frecuenciaMensual, valor: servicios.total})
            })
            .catch(error => console.log(error))
    }, [])
    
    return (
        <>
        {/*<!-- Content Row -->*/}
        <div className="row" style={{margin: "20px"}} >
            {
                totales.map((producto,index)=>{
                    return <SmallCardDeTotales  {...producto}  key= {index}/>
                })
            }      
        </div>
        </>
    )
}
export default SeccionContenidoTodosLosServicios;