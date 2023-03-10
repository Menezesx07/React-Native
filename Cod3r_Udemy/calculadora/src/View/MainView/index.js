import { Component } from "react"
import { Text, View } from "react-native"
import Buttons from "../../Components/Buttons/index"
import Display from "../../Components/Display"
import styles from "./styles"

//valor inicial do display
const initialState = {
    displayValue: "0",
    clearDisplay: false,
    operation: null,
    values: [0, 0],
    current: 0 //posição do array que está sendo usada (0 ou 1)

}

//para esta bagaça funcionar tem de usar o "class" e "extends", o motivo ? não sei
export default class MainView extends Component {

    /* TOPICO 1 DO BLOCO DE NOTAS */

   //setando o stato com os dados do initial state 
   //...é usado para colocar todos os dados do array anterior num objeto
   state = {...initialState}

   //n é o valor passado como parametro ao chamar a função, que seta o state.displayValue
   addDigit = n => {
            
    /*TOPICO 2 DO BLOCO DE NOTAS*/

    //clearDisplay vai ser uma variavel booleana, que vai ser acionada quando essas duas opções abaixo forem
    //verdadeiras: 
    //se o display for 0 e eu digitar um numero, ele limpa o display antes desse novo numero entrar
    //exemplo se eu digirar 2, ao inves de ficar 02, ele limpa o display (deixa vazio) e adiciona o 2,
    //ou || se o state.clearDisplay que é acionado quando clica no AC, ele também vai zerar o campo
    const clearDisplay = this.state.displayValue === '0' || this.state.clearDisplay

    //se eu já tiver adicionado um ponto, e adicionar outro, vai retornar vazio
    if (n === '.' && !clearDisplay && this.state.displayValue.includes('.')) {
        return 
    }

    //se o clear display daqui de cima estiver verdadeiro, o valor atual vai ser vazio, mas caso não
    //o valor corrente vai ser o que está no display (? : serve como if e else)
    const currentValue = clearDisplay ? '' : this.state.displayValue

    //aqui ele vai dizer que o valor novo, vai ser o current value (que já foi digitado) concatenando
    //com o novo valor digitado, no caso o N sendo assim, podendo digitar mais de uma casa de digitos,
    //no caso, 123 ou 256
    const displayValue = currentValue + n

    //passando o valor atual como parametro pelo setState para atualizar o props do display,
    //e dizendo que o clear display vai ser falso para não limpar o mesmo
    this.setState({displayValue, clearDisplay: false})

    //se o valor atual for diferente de . no caso, se eu tentar passar só o ponto como numero,
    //vai ser uma operação valida
    if (n !== ".") {
        const newValue = parseFloat(displayValue) //transformando o valor em float (0.00)
        const values = [...this.state.values] //clonando o array do state
        values[this.state.current] = newValue //setando o valor atual (current) do array novo
        this.setState({ values })
    }
    
    }

    


    //setando todos os valores como 0, no caso, o inicial lá do initialState
    //zerando o display, os operadores, e os numeros na memoria
    clearMemory = () => {
        this.setState({...initialState})
    }

    check = () => {
        console.warn(this.state.displayValue)
    }



    //armazenando qual operação vai ser feita
    setOperation = operation => {
        
        
        if(this.state.current === 0) { //se a posição do array for a 0
            this.setState({ operation, current: 1, clearDisplay: true }) 
            //vai setar a operação com o caractere, alterar o array par 1 e zerar o display

        } else { //mas se o current for 1 (se já estiver uma operação setada)
            const equals = operation === "="
            const values = [...this.state.values] //clonando o array

            
            try {
                //anotação sobre o eval no final do codigo
                //pegar o item 0 do array, caracter do operation e o indice 1 do array
                values[0] = eval(`${values[0]} ${this.state.operation} ${values[1]}`) 
                
            } catch (e) {

                values[0] = this.state.values[0] //não faz nada caso der erro (passar o = como parametro)

            }

            //zerando o valor do item 1 para começar uma nova operação
            values [1] = 0
            this.setState({
                displayValue: `${values[0]}`,
                //se a operação for = o numero do display vai zerar, mas se não, vai setar a variavel para a nova operação
                operation: equals ? null : operation,
                //se for = ele vai vai da continuidade alterando o indice 0, se for um + por exemplo, vai continuar editando o item 1
                current: equals ? 0 : 1 ,
                clearDisplay: !equals,
                values,
            })
            
        } 
    }

       render() {
        return (

            <View>
    
                <Display value={this.state.displayValue}/>
    
                <View style={styles.buttonsContainer}>
    
                    <Buttons label='AC' triple onClick={this.clearMemory} />
                    <Buttons label='/' operation onClick={() => this.setOperation("/")}/>
                    <Buttons label='7' onClick={() => this.addDigit(7)}/>
                    <Buttons label='8' onClick={() => this.addDigit(8)}/>
                    <Buttons label='9' onClick={() => this.addDigit(9)}/>
                    <Buttons label='*' operation onClick={() => this.setOperation("*")}/>
                    <Buttons label='4' onClick={() => this.addDigit(4)}/>
                    <Buttons label='5' onClick={() => this.addDigit(5)}/>
                    <Buttons label='6' onClick={() => this.addDigit(6)}/>
                    <Buttons label='-' operation onClick={() => this.setOperation("-")}/>
                    <Buttons label='1' onClick={() => this.addDigit(1)}/>
                    <Buttons label='2' onClick={() => this.addDigit(2)}/>
                    <Buttons label='3' onClick={() => this.addDigit(3)}/>
                    <Buttons label='+' operation onClick={() => this.setOperation("+")}/>
                    <Buttons label='0' double onClick={() => this.addDigit(0)}/>
                    <Buttons label='.' onClick={() => this.addDigit(".")}/>
                    <Buttons label='=' operation onClick={() => this.setOperation("=")}/>
    
                </View>
    
            </View>
            
        );
       }
        
    

}



/*
EVAL:
eval é uma função do js que calcula numeros em forma de string
sem precisar fazer um parseInt para os numeros, no caso dos caracteres
ele também reconhece mesmo sendo uma string, então não precisa fazer um switch 
por exemplo e dizer qual caracter vai fazer tal coisa, visto com o evail já 
faz isso automaticamente*/