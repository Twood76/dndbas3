import React from 'react'
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet
  } from 'react-native'
  import diceParse from './DiceRoller'

export default class dice extends React.Component {

  constructor(props){
    super(props)
    this.state ={
      userInput: '',
      parseString: ''
    }
    this.rollDice = this.rollDice.bind(this)
  }


  rollDice(){
    let parsed = diceParse(this.state.userInput)
    let total = 0;
    let displayArr = parsed.res.map((value,index)=>{
      let diceType = parsed.type[index]
      let DTDisplay
      let symbol
      if(index) symbol = value>=0 ? <Text key={'Positive ' + {index} + {value} }> + </Text> : <Text key={'Negative ' + {index} + {value} }> - </Text>
      total = total + value
      if(diceType){
        DTDisplay = <Text key={ {diceType} + {value} }>(D{diceType})</Text>
      }
      let roll = <Text key={{value} + ' Roll'}>{Math.abs(value)}</Text>
      return <Text key={'Final '+ {symbol} + {roll} }>{symbol}{DTDisplay}{roll}</Text>
    })
    displayArr[displayArr.length] = <Text key={'Total'}> = {total}</Text>
    this.props.addRoll(displayArr)
    this.setState({parseString: displayArr})
  }



  render(){
    return(
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          keyboardType='numeric'
          clearTextOnFocus = {true}
          placeholder="Type Here"
          onChangeText={(text) => this.setState({userInput: text})}
       />
       <TouchableOpacity
         style={styles.button}
         onPress={this.rollDice}
         >
           <Text style={{color:'rgb(113, 172, 85)'}}>Custom</Text>
       </TouchableOpacity>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  input: {
    backgroundColor: 'rgb(8, 22, 55)',
    width: 150,
    color: 'rgb(113, 172, 85)'
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'rgb(73, 91, 133)',
    padding: 10,
    width: 150
  },
  countContainer: {
    alignItems: 'center',
    padding: 10
  },
  countText: {
    color: '#FF00FF'
  }
})
