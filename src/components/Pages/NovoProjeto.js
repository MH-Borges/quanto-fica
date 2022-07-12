import FormProjeto from '../Projetos/FormProjeto'
import styles from './NovoProjeto.module.scss'

function NovoProjeto() {
    return (
        <div className={styles.NovoProjeto}>
            <h1>Criar Projeto</h1>
            <p>Crie aqui seu projeto para depois adicionar seus serviços</p>
            <FormProjeto />
        </div>
    )
}

export default NovoProjeto