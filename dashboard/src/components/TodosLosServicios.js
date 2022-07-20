import React from "react"
import { Routes, Route, Outlet } from "react-router-dom"
import SeccionContenidoTodosLosServicios from './SeccionContenidoTodosLosServicios'
import UltimoServicioCard from './UltimoServicioCard'



function TodosLosServicios(){

    return(
        <>
            <SeccionContenidoTodosLosServicios />
            <Outlet />
        </>
    )
}

export default TodosLosServicios