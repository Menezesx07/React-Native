import { Fragment } from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import Header from './src/components/Header';
import Tabs from './src/components/Tabs';


export default function App() {
  return (

    <Fragment>
        <View style={styles.container}>
            <StatusBar backgroundColor={"#8B10AE"} barStyle="light-content"/>
            <Header/>
            <Tabs/>
        </View>
    </Fragment>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#8B10AE",
    alignItems: 'center',
    justifyContent: 'center',
  },
});
