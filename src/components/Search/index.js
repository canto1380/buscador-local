import {useState, useEffect} from 'react'
import './style.css'

export default function Search({onSearch, onClose, isSerching}){
    const [searchText, setSearchText] = useState('');
    
    const funcioncerrar =()=>{
        setSearchText("")
        onClose();
    }
    console.log(isSerching)

    useEffect(()=>{
        console.log('did mount')
    },[])
    useEffect(() => {
        console.log('did update')  
    })
    
    return(
        <div>
            {!isSerching &&
            <div className="search-box">
            <h1 className="text-secondary">Buscador de personal</h1>
            <div className="search-box-buttons my-4">
            <label className="me-2">
                <input name="searchText" type="text" placeholder="Texto a buscar"
                value={searchText}
                className="form-control" onChange={({target : {value}}) => setSearchText(value)}/>
            </label>
            <button className="btn btn-light fw-bolder mx-2" onClick={() => onSearch(searchText)} disabled={!searchText.length}>Buscar</button>
            {isSerching && <button onClick={funcioncerrar} className="btn btn-light fw-bolder">Cerrar </button>}
            </div>
            </div>
           }

          {isSerching &&
            <div className="search-box">
            <h1 className="text-secondary">Buscador de personal</h1>
            <div className="search-box-buttons my-4">
            <label className="me-2">
                <input name="searchText" type="text" placeholder="Texto a buscar"
                value={searchText}
                className="form-control oculto" onChange={({target : {value}}) => setSearchText(value)}/>
            </label>
            <button className="btn btn-light fw-bolder mx-2 oculto" onClick={() => onSearch(searchText)} disabled={!searchText.length}>Buscar</button>
            {isSerching && <button onClick={funcioncerrar} className="btn btn-light fw-bolder">Cerrar </button>}
            </div>
            </div>
           }
        </div>

        
    )
}