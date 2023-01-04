import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    mainContent: {
        width: "95%",
        height: "auto",
        marginLeft: "3%",
        marginBottom: 15,
        borderRadius: 10,
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
        backgroundColor: "#0005"
    },
    contextLeft: {
        width: "36%",
        alignItems: "flex-start"
    },
    dayCotation: {
        fontSize: 16,
        paddingLeft: 5,
        color: "#fff",
        fontWeight: "bold"
    },
    contextRight: {
        width: "60%",
        alignItems: "flex-end"
    },
    logoBit: {
        width: 30,
        height: 30,
        marginLeft: 2
    },
    boxLogo: {
        flexDirection: "row",
        alignItems: "center"
    },
    price: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold"
    }
})

export default styles