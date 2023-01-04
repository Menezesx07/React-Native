import { useEffect, useState } from 'react';
import { StyleSheet, StatusBar, SafeAreaView, Platform } from 'react-native';

import CurrentPrice from './src/components/CurrentPrice';
import HistoryPrice from './src/components/HistoryPrice';
import QuotationList from './src/components/QuotationList';
import QuotationItens from './src/components/QuotationList/QuotationItens';

//adicionado o zero na data ex: 2022-1-5 para 2022-01-05
function addZero(number) {
  if(number <= 9) {
    return "0" + number
  }
  return number
}

//montando a url do fetch
function url(qtdDays) {
    const date = new Date();
    const listLastDays = qtdDays
    
    const end_date = `${date.getFullYear()}-${addZero(date.getMonth()+1)}-${addZero(date.getDate())}`;

    date.setDate(date.getDate() - listLastDays)

    const start_date = `${date.getFullYear()}-${addZero(date.getMonth()+1)}-${addZero(date.getDate())}`;

    return `https://api.coindesk.com/v1/bpi/historical/close.json?start=${start_date}&end=${end_date}`
}


//dando o get na api e filtrando os dados (date e chave que estão dentro do data.bpi)
async function getListCoins(url) {
  let res = await fetch(url);
  let returnApi = await res.json()
  let selectListQuotations = returnApi.bpi
  const queryCoinsList = Object.keys(selectListQuotations).map((key) => {
    return {
      data: keys.split("-").reverse().join("/"),
      valor: selectListQuotations[key]
    }
  })
  let data = queryCoinsList.reverse();
  return data;
}

//montando o grafico
async function getPriceCoinsGrapich(url) {
  let resG = await fetch(url);
  let returnApiG = await resG.json()
  let selectListQuotationsG = returnApiG.bpi
  const queryCoinsListG = Object.keys(selectListQuotationsG).map((key) => {
    return selectListQuotationsG[key];
  });
  let dataG = queryCoinsListG;
  console.log (dataG);
}




export default function App() {

  const [coinList, setCoinList] = useState([])
  const [coinGraphicList, setCoinGraphicList] = useState([0])
  const [days, setDays] = useState(7)
  const [updateData, setUpdateData] = useState(true)

  function updateDay(number) {
    setDays(number);
    setUpdateData(true)
  }

  useEffect (() =>{

    getListCoins(url(days)).then((data) => {
      setCoinList(data);
    });

    getPriceCoinsGrapich(url(days)).then((dataG) => {
      setCoinGraphicList(dataG);
    });

    if(updateData) {
      setUpdateData(false)
    }

  }, [updateData]);

  return (
    <SafeAreaView style={styles.container}>

      <StatusBar 
      backgroundColor="#32CD32"
      barStyle="dark-content"
      />

      <CurrentPrice/>
      <HistoryPrice/>
      <QuotationList/>
      

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222',
    alignItems: 'center',
    paddingTop: Platform.OS === "android" ? 40 : 0,
  },
});
