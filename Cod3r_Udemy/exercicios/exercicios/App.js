import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Primeiro from './src/components/Primeiro';
import Multi, { Comp2, Comp3 } from './src/components/Multi'



//da para usar arrow function para tirar o "funcion app"
export default () => {

  console.warn("teste");
  return (
    <View style={styles.container}>
      
      <Text style={styles.text}>Hi !!</Text>
      <Primeiro/>
      <Multi/>
      <Comp2/>
      <Comp3/>
      <StatusBar style="auto" />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
