import React, { useState } from "react";
import { Text, TextInput, View, TouchableOpacity, Vibration, Pressable, Keyboard, FlatList } from "react-native"
import ResultImc from "./ResultImc";
import styles from "./styles";

export default function Form() {

//definindo os estados atuais, equivalente ao data do vue
const [altura, setAltura]= useState(null);
const [peso, setPeso]= useState(null);
const [messageImc, setMessageImc]= useState("Preecha o peso e altura");
const [imc, setImc]= useState(null);
const [textButton, setTextButton]= useState("Calcular");
const [errorMessage, setErroMessage] = useState(null);
const [imcList, setImcList] = useState([]);

//função que vai calcular o imc ao ser clicada no botão pt 2
function imcCalculator() {
    let totalImc = ((peso/(altura*altura)).toFixed(2)); //to fixed para casas decimais (no caso 2)
    setImcList((arr) => [...arr, {id: new Date().getTime(), imc:totalImc}]);//"array.push do react-native :D "
    setImc(totalImc) //setando a variavel para ser exibida lá em baixo
}

function verificationImc() {
    if(imc == null) {
        Vibration.vibrate();
        setErroMessage("campo obrigatorio*")
    } 
}

//validação para ver se o campo está nulo ou preenchido, para chamar a função e mandar algumas mensagens pt 1
function validationImc() {
    if(peso != null && altura != null) {
        imcCalculator()
        setAltura(null)
        setPeso(null)
        setMessageImc("Seu imc é igual: ")
        setTextButton("Calcular Novamente")
        setErroMessage(null)
    } else {
        verificationImc()
        setImc(null)
        setTextButton("Calcular")
        setMessageImc("Preenhca o peso e altura")
    }
    
    
}

    return(
        
        <View style={styles.formContext}>
            { imc == null ? 
            <Pressable onPress={Keyboard.dismiss} style={styles.form}>

                <Text style={styles.formLabel}>Altura</Text>
                <Text style={styles.erroMessage}>{errorMessage}</Text>
                <TextInput style={styles.input}
                onChangeText={setAltura} //setando a altura
                value={altura}           //passando o valor
                placeholder="Ex: 1.90"
                keyboardType="numeric"/>

                <Text style={styles.formLabel}>Peso</Text>
                <Text style={styles.erroMessage}>{errorMessage}</Text>
                <TextInput style={styles.input}
                onChangeText={setPeso} //setando o peso
                value={peso}           //passando o valor
                 placeholder="Ex: 87"
                 keyboardType="numeric"/>

                    <TouchableOpacity
                        style={styles.buttonCalculator}
                        onPress={() => {
                            validationImc()
                        }}>
                     <Text style={styles.textButtonCalculator}>{textButton}</Text> 
                     </TouchableOpacity>
                    
            </Pressable>
                : 
                <View style={styles.exibitionResultImc}>
                     <ResultImc messageResultImc={messageImc} ResultImc={imc} />
                     <TouchableOpacity
                        style={styles.buttonCalculator}
                        onPress={() => {
                            validationImc()
                        }}>
                     <Text style={styles.textButtonCalculator}>{textButton}</Text> 
                     </TouchableOpacity>
                </View>
            } 
            <FlatList
            style={styles.listImc}
            data={imcList.reverse()}
            renderItem={({item}) =>{
                return (
                    <Text style={styles.resultImcItem}>
                        Resultado IMC = {}
                        <Text style={styles.textResultItemList}>
                            {item.imc}    
                        </Text>
                    </Text>
                    
                )
            }
        }
        keyExtractor={(item) =>
            item.id
        }
            >


            </FlatList>
        </View>

        
    );
}