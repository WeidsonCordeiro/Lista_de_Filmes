//Hooks
import { Link, useNavigate } from 'react-router-dom'
import { useState,  } from 'react'

//Icons
import { BiCameraMovie, BiSearchAlt2 } from 'react-icons/bi'

//Css
import styles from './NavBar.module.css'

const NavBar = () => {
    const [query, setQuery] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (query) {
            navigate(`/search?q=${query}`);
            setQuery('');
        } else {
            console.log('Por favor, insira um termo de pesquisa');
        }
    };

  return (
    <nav className={styles.navbar}>
        <h2>
            <Link to="/"><BiCameraMovie />MoviesLib</Link>
        </h2>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Busque um filme' value={query} onChange={(e) => { setQuery(e.target.value) }}/>
            <button type='submit'><BiSearchAlt2/></button>
        </form>
  </nav>
  )
}

export default NavBar