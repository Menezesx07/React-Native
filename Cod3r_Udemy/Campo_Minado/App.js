import {Component} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Field from './src/components/Field';
import params from './src/params';

export default class App extends Component {
  render() {
    return (
          <View style={styles.container}>
            <Text style={styles.welcome}>Iniciando Minas</Text>
            <Text style={styles.instructions}>Tamanho da grade: {""}
              {params.getRowsAmount()}x{params.getColumnsAmount()}</Text>
              
            <Field/>
            <Field opened/>
            <Field opened nearMines={1}/>
            <Field opened nearMines={2}/>
            <Field opened nearMines={3}/>
            <Field opened nearMines={6}/>
          </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
