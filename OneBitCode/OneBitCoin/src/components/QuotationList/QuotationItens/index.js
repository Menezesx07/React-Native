import { Fragment } from 'react';
import { Text, View, Image } from 'react-native';
import styles from "./styles"

export default function QuotationItens(){
    return(
        <View style={styles.mainContent}>
            <View style={styles.contextLeft}>
                <View style={styles.boxLogo}>
                    <Image
                    style={styles.logoBit}
                    source={require("../../../imgs/bit.png")}/>
                    <Text style={styles.dayCotation}> 29/12/2022 </Text>
                </View>
            </View>
                <View style={styles.contextRight}>
                    <Text style={styles.price}>$ 533333</Text>
                </View>
            
        </View>
    )
}