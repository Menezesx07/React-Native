import { TouchableOpacity, Text } from "react-native"
import styles from "./styles"


export default Buttons => {

    //valor padrão ao configurar o botão
    const stylesButton = [styles.button]

    //valores que vão subir pro array dependendo de qual variavel for escolhida na MainView
    //e ai é trocado pelo estilo escolhido
    if (Buttons.double) stylesButton.push(styles.buttonDouble)
    if (Buttons.triple) stylesButton.push(styles.buttonTriple)
    if (Buttons.operation) stylesButton.push(styles.operationButton) 
  


    return (
        <TouchableOpacity
        onPress={Buttons.onClick} //recebendo a função do botão via props
        >
                <Text style={stylesButton}> {/* passando a variavel do array como parametro */}
                    {Buttons.label} {/* recebedo a label como parametro via pros (igual a funcção)*/}
                </Text>

        </TouchableOpacity>
    )
}