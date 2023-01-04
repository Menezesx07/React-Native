import { Text, View } from 'react-native';
import styles from "./styles"

export default function CurrentPrice(){
    return(
        <View style={styles.headerPrice}>
            <Text style={styles.currentPrice}>$ 11111</Text>
            <Text style={styles.textPrice}>Last Quotation</Text>
        </View>
    )
}