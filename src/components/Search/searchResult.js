export default function SearchResult({resultado, isSerching}){

    return(
        <div>
            {!resultado.length && isSerching &&
                <p>No hay resultados para la busqueda</p>
            }
            {resultado?.map((e) =>{
                return (
                    <div key={e.id}>
                        <p>{e.name}</p>
                        <p>{e.email}</p>
                    </div>
                )   
            })}
        </div>
    )
}