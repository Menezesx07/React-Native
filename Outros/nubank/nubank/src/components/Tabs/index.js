import { View, Text } from "react-native";

import Icon from 'react-native-vector-icons/MaterialIcons'

export default function Tabs() {
    return (
        <View>
            <View>
                <Icon name="person-add" size={24} color="#FFF"/>
                <Text>Indicar Amigos</Text>
            </View>
        </View>
    );
}