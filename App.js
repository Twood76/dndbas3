import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

//Component Imports
import Dice from './Components/Dice'
import StaticDice from './Components/StaticDice'

export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state ={
      diceHistory:[]
    }
    this.addRoll = this.addRoll.bind(this)
  }

  addRoll(roll){
    console.log('Adding: ' + roll)
    let history = this.state.diceHistory
    history.unshift(',\n')
    history.unshift(roll)
    if(history.length >= 16){
      history.pop()
      history.pop()
    }
    this.setState({diceHistory:history})
  }

  render() {
    let current = this.state.diceHistory[0]
    let history = this.state.diceHistory.slice(2)
    return (

      <View style={styles.container}>
        <Dice addRoll = {this.addRoll} />
        <StaticDice addRoll = {this.addRoll} />
        <Text style={styles.text}>Current: {current}</Text>
        <Text style={styles.text}>History:</Text>
        <Text style={styles.text}>{history}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgb(23, 40, 81)',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
        color: 'rgb(113, 172, 85)'
  }
});
