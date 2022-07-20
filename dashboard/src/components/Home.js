import React from 'react';
import ServiciosInDb from './ServiciosInDb';
import SeccionContenidoTotales from './SeccionContenidoTotales';
import UltimoServicioCard from './UltimoServicioCard'

function Home() {
    
    return(
        <>
			<div className="container-fluid">

				<div className="d-sm-flex aligns-items-center justify-content-between mb-4">
					<h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
				</div>

				<SeccionContenidoTotales />

				<div className="row">
					<UltimoServicioCard />
					<ServiciosInDb />		
				</div>

			</div>
        </>
    )
}
export default Home