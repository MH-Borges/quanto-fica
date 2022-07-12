import { Link } from 'react-router-dom'

import Container from './Container'
import styles from './Navbar.module.scss'
import logo from '../../img/costs_logo.png'

function Navbar() {
    return (
        <nav className={styles.navbar}>
            <Container>
                <Link to="/">
                    <img src={logo} alt="Quanto custa" />
                </Link>
                <ul className={styles.list}>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/Projetos">Projetos</Link>
                    </li>
                    <li>
                        <Link to="/Empresa">Empresa</Link>
                    </li>
                    <li>
                        <Link to="/Contato">Contato</Link>
                    </li>
                </ul>
            </Container>
        </nav>
    )
}

export default Navbar