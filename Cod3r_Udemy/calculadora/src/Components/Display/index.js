import { Text, View } from "react-native"
import styles from "./styles"

export default display => {
    return (
        <View style={styles.display}>

            <Text
            style={styles.displayValue}
            numberOfLines={1}>

                {display.value} {/* recebendo o numero no dispay via props*/}

            </Text>

        </View>
    )
}