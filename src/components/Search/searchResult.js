export default function SearchResult({resultado, isSerching}){

    return(
        
        <div className="">
            {!resultado.length && isSerching &&
                <h3 className="py-3">No hay resultados para la busqueda</h3>
            }
            {resultado?.map((e) =>{
                return (
                    <div key={e.id} className=" my-5 border border-2 border-dark rounded-3 p-3">
                        <h5 className="lead">ID: <span className="fw-bolder">{e.id}</span></h5>
                        <h5 className="lead">Nombre: <span className="fw-bolder">{e.name}</span></h5>
                        <h5 className="lead">Usuario: <span className="fw-bolder">{e.username}</span></h5>
                        <h5 className="lead">Email: <span className="fw-bolder">{e.email}</span></h5>
                        <hr/>
                    </div>
                )   
            })}
        </div>
        
    )
}