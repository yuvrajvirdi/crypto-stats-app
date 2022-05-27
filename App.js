import React, { useState }  from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput} from 'react-native';
import Stats from './components/Stats'
import Button from './components/Button';

const ENDPOINT = 'http://localhost:8080/cryptostats?symbol=';

export default function App() {

  // query and stats states
  const [query, setQuery] = useState('');
  const [stats, setStats] = useState({});

  const getStats = e => {
    fetch(`${ENDPOINT}${query}-USD`)
      .then(res => res.json())
      .then(result => {
        setStats(result);
        setQuery(``);
        console.log(result);
      })
      .catch(err => {
        console.log(err);
      })
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Crypto Stats</Text>
      <Text style={styles.description}>Statistics for all Cryptocurrencies</Text>
      <StatusBar style="auto" />
      <TextInput
        style={styles.input}
        onChangeText={e => setQuery(e)}
        value={query}
        placeholder="Enter a crypto symbol... "
      />
      <Button
        onPress={getStats}
      />
      {(typeof stats.currencyName != 'undefined') ? (
       <Stats
        currencyName={stats.currencyName}
        desc={stats.desc}
        price={stats.price}
        change={stats.change}
        changePercentage={stats.changePercentage}
        prevClose={stats.prevClose}
        open={stats.open}
        dayRange={stats.dayRange}
        yearRange={stats.yearRange}
        startDate={stats.startDate}
        marketCap={stats.marketCap}
        circulatingSupply={stats.circulatingSupply}
        volume={stats.volume}
       />
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  title: {
    fontSize: 50,
    fontWeight: '600',
    fontFamily: 'Helvetica'
  },
  description: {
    fontSize: 25,
    fontWeight: '400'
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 15
  },
});
