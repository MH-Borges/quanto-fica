import styles from './Home.module.scss'
import savings from '../../img/savings.svg'
import LinkButton from '../layout/LinkButton'

function Home() {
    return (
        <section className={styles.home}>
            <h1>Bem-vindo ao <span>Quanto Custa</span></h1>
            <p>Comece a gerenciar os seus projetos agora mesmo!</p>
            
            <LinkButton to="/Novo_Projeto" text="Crie um novo Projeto" />
            <img src={savings} alt="Quanto custa" />
        </section>
    )
}

export default Home