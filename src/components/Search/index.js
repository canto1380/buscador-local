import {useState, useEffect} from 'react'
import './style.css'

export default function Search({onSearch, onClose, isSerching}){
    const [searchText, setSearchText] = useState('');
    
    const funcioncerrar =()=>{
        setSearchText("")
        onClose();
    }

    useEffect(()=>{
        console.log('did mount')
    },[])
    useEffect(() => {
        console.log('did update')  
    })
    
    return(
        <div>
            <div className="search-box">
            <h2 className="search-box-title">Buscador de personal</h2>
            <div className="search-box-buttons">
            <label>
                <input name="searchText" type="text" className="form-control" placeholder="Texto a buscar"
                value={searchText}
                className="search-box-input" onChange={({target : {value}}) => setSearchText(value)}/>
            </label>
            <button className="" onClick={() => onSearch(searchText)} disabled={!searchText.length}>Buscar</button>
            {isSerching && <button onClick={funcioncerrar}>Cerrar </button>}
            </div>
            </div>
        </div>
    )
}