import { View, Text, Image } from "react-native";
import styles from "./styles";

import Icon from 'react-native-vector-icons/MaterialIcons'


export default function Header() {
    return (
        <View>
            <View style={styles.container}>
                <Image
                style={styles.logo}
                source={require("../../../assets/logo.png")}/>
                <Text style={styles.title}>Rafael</Text>
            </View>
            <Icon name="keyboard-arrow-down" size={20} color="#fff" style={styles.container}/>
        </View>
    );
}