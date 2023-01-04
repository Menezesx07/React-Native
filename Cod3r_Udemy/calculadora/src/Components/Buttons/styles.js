import { Dimensions, StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    button: {
        fontSize: 24,
        height: Dimensions.get('window').width / 4, //pegando a tela toda e dividindo por 4
        width: Dimensions.get('window').width / 4,
        padding: 20,
        backgroundColor: "#f0f0f0",
        textAlign: "center",
        borderWidth: 1,
        borderColor: "#888"
    },
    operationButton: {
        color: "#fff",
        backgroundColor: "#fa8231",
    },
    buttonDouble: {
        width: (Dimensions.get('window').width / 4) * 2,
    },
    buttonTriple: {
        width: (Dimensions.get('window').width / 4) * 3,
    }
})

export default styles