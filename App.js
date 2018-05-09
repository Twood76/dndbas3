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
    return (
      <View style={styles.container}>
        <StaticDice addRoll = {this.addRoll} />
        <Dice addRoll = {this.addRoll} />
        <Text>{this.state.diceHistory}</Text>
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
