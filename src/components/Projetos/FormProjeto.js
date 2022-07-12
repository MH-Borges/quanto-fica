function FormProjeto() {
    return (
        <form action="">
            <div>
                <input type="text" placeholder="Insira o nome do projeto" />
            </div>
            <div>
                <input type="Number" placeholder="Valor total do projeto"/>
            </div>
            <div>
                <select name="idCategoria" >
                    <option disabled selected>Selecione a Categoria</option>
                </select>
            </div>
            <div>
                <input type="submit" value="Criar projeto" />
            </div>
        </form>
    )
}

export default FormProjeto