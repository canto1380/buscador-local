import SearchBox from './Search'
import './style.css'
import {useState} from 'react'
import data from '../data/user.json'
import SearchResult from './Search/searchResult'

export default function Search(){
    const [arriba, setArriba] = useState(false)
    const [userData, setUserData] = useState(data)
    const [resultado, setResultado] = useState([])

    const funcioncerrar =() => {
        setArriba(!arriba);
        setResultado([])
    }

    const searchClick =(searchText) => {
        if(userData?.length){
            setArriba(!arriba)
            const searchTextLowerCase = searchText.toLowerCase()
            const filterData = data.filter((value) =>(
                        value.name.toLowerCase().includes(searchTextLowerCase) ||
                        value.phone.toLowerCase().includes(searchTextLowerCase) ||
                        value.email.toLowerCase().includes(searchTextLowerCase) ||
                        value.username.toLowerCase().includes(searchTextLowerCase)
            ))
            setResultado(filterData)
        }
    }
    console.log(resultado)
    return(
        <div className={`search ${arriba ? "search--top" : 'search--center'}`}>
            <SearchBox onSearch={searchClick} onClose={funcioncerrar} isSerching={arriba}/>
            <SearchResult resultado={resultado} isSerching={arriba}/>
        </div>
    )
}