import styles from './Footer.module.scss'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'


function Footer() {
    return (
        <footer className={styles.space}>
            <ul>
                <li><FaFacebook /></li>
                <li><FaInstagram /></li>
                <li><FaLinkedin /></li>
            </ul>
            <p><span>Quanto custa</span> &copy; 2022</p>            
        </footer>
    )
}

export default Footer