import { Fragment } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import styles from "./styles"

export default function QuotationList(){
    return(

        <Fragment>
             <View style={styles.filters}>
                <TouchableOpacity
                style={styles.buttomQuery}
                onPress={() => {} }>
                    <Text style={styles.textButtomQuery}>7D</Text>
                </TouchableOpacity>

                <TouchableOpacity
                style={styles.buttomQuery}
                onPress={() => {} }>
                    <Text style={styles.textButtomQuery}>15D</Text>
                </TouchableOpacity>

                <TouchableOpacity
                style={styles.buttomQuery}
                onPress={() => {} }>
                    <Text style={styles.textButtomQuery}>1M</Text>
                </TouchableOpacity>

                <TouchableOpacity
                style={styles.buttomQuery}
                onPress={() => {} }>
                    <Text style={styles.textButtomQuery}>3M</Text>
                </TouchableOpacity>

                <TouchableOpacity
                style={styles.buttomQuery}
                onPress={() => {} }>
                    <Text style={styles.textButtomQuery}>6M</Text>
                </TouchableOpacity>

            </View>

            

        </Fragment>
       
    )
}