import React from 'react';
import {Link} from 'react-router-dom'

function Servicio(props){
    return(
        <>
            <div className="col-lg-12 mb-2">
                <div className="card text-white bg-dark  shadow">
                        <Link style={{color: 'white'}} to={'/servicios/'+props.id_service}>
                        <div className="card-body" style={{padding: 5, display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                            <div style={{margin:0}}># <strong>{props.id_service}</strong> | Desde <strong>{props.origen}</strong> - Hacia <strong>{props.destination}</strong></div>
                            
                                <div style={{display: 'flex'}}>Ver más</div>
                            
                        </div>
                        </Link>
                </div>
            </div>
        </>
    )
}
export default Servicio;