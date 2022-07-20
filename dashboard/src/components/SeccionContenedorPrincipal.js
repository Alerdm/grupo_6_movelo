import React from 'react';
import { Routes, Route } from 'react-router-dom';
import TopBar from './TopBar';
import Home from './Home';
import UsuariosLista from './UsuariosLista'
import UsuarioDetalle from './UsuarioDetalle'
import TodosLosServicios from './TodosLosServicios'
import ServiciosInDbTotales from './ServiciosInDbTotales'
import ServiciosInDbFrecuencia from "./ServiciosInDbFrecuencia"
import ServiciosInDbCategoria from "./ServiciosInDbCategoria"
import ServicioCard from './ServicioCard'
import Footer from './Footer';

function ContentWrapper(){
    return (
        <>
        
            <div id="content-wrapper" className="d-flex flex-column" >
                <div id="content">
                    <TopBar />
                    <div style={{minHeight: "calc(100vh - 6.375rem - 76.8px)"}}>
                        <Routes>
                            <Route  path="/" element={<Home />}/>
                            <Route  path="/lista-de-usuarios" element={<UsuariosLista />}/>
                            <Route  path="/usuario/:id" element={<UsuarioDetalle />}/>
                            <Route  path="/servicios/" element={<TodosLosServicios />}>
                                <Route path="/servicios/todos" element={<ServiciosInDbTotales />}/>
                                <Route path="/servicios/frecuencia" element={<ServiciosInDbFrecuencia />} />
                                <Route path="/servicios/categoria" element={<ServiciosInDbCategoria />}/>
                                <Route path="/servicios/:id" element={<ServicioCard />}/>
                            </Route>
                        </Routes>
                    </div>                        
                    <Footer />
                </div>
            </div>    
        </>
    )
}
export default ContentWrapper;