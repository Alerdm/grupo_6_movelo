import React from 'react';
import { Routes, Route } from 'react-router-dom';
import TopBar from './TopBar';
import Home from './Home';
import UsuariosLista from './UsuariosLista'
import UsuarioDetalle from './UsuarioDetalle'
import TodosLosServicios from './TodosLosServicios'
import Footer from './Footer';

function ContentWrapper(){
    return (
        <>
            <div id="content-wrapper" className="d-flex flex-column" >
                <div id="content">
                    <TopBar />
                    <div style={{minHeight: "calc(100vh - 6.375rem - 76.8px)"}}>
                        <Routes>
                            <Route estrict path="/" element={<Home />}/>
                            <Route  estrict path="/lista-de-usuarios" element={<UsuariosLista />}/>
                            <Route  path="/usuario/:id" element={<UsuarioDetalle />}/>
                            <Route estrict path="/servicios" element={<TodosLosServicios />}/>
                        </Routes>
                    </div>                        
                    <Footer />
                </div>
            </div>    
        </>
    )
}
export default ContentWrapper;