import React from "react"
import { Outlet } from "react-router-dom"
import SeccionContenidoTodosLosServicios from './SeccionContenidoTodosLosServicios'



function TodosLosServicios(){

    return(
        <>
            <SeccionContenidoTodosLosServicios />
            <Outlet />
        </>
    )
}

export default TodosLosServicios