import React, {useState,useEffect} from 'react';
import User from './User'



function UsersInDb(){
    const [users, setUsers] = useState([]);

    
    useEffect(() =>{
        fetch('http://localhost:3001/api/users')
            .then(respuesta =>{
                return respuesta.json()
            })
            .then(usuarios =>{
                setUsers(usuarios.data)
            })
            .catch(error => console.log(error))
    }, [])

    return (
        <>
            <h1 className="h3 mb-2 text-gray-800" style={{padding: "0px 0px 0px 24px"}}>Todos los Usuarios en Base de Datos</h1>
						
						{/*<!-- DataTales Example -->*/}
						<div className="card shadow mb-4">
							<div className="card-body">
								<div className="table-responsive">
									<table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
										<thead>
											<tr>
												<th>Id</th>
												<th>Nombre</th>
												<th>Apellido</th>
												<th>Email</th>
												<th>Detalle de Usuario</th>
											</tr>
										</thead>
										<tbody>
											{
												users.map((user,i) =>{
													return <User  {...user} key = {i}  />			
												})
											}
																						
											
											
										</tbody>
										<tfoot>
											<tr>
                                                <th>Id</th>
												<th>Nombre</th>
												<th>Apellido</th>
												<th>Email</th>
												<th>Foto de Perfil</th>
											</tr>
										</tfoot>
										
									</table>
								</div>
							</div>
						</div> 
        </>
    )
}
export default UsersInDb