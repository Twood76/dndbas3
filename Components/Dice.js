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
      if(index) symbol = value>=0 ? <Text> + </Text> : <Text> - </Text>
      total = total + value
      if(diceType){
        DTDisplay = <Text>(D{diceType})</Text>
      }
      let roll = <Text>{Math.abs(value)}</Text>
      return <Text>{symbol}{DTDisplay}{roll}</Text>
    })
    displayArr[displayArr.length] = <Text> = {total}</Text>
    this.props.addRoll(displayArr)
    this.setState({parseString: displayArr})
  }



  render(){
    return(
      <View>
        <TextInput
          keyboardType='numeric'
          onChangeText={(text) => this.setState({userInput: text})}
       />
       <TouchableOpacity
         style={styles.button}
         onPress={this.rollDice}
         >
           <Text>Button</Text>
       </TouchableOpacity>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    flexDirection:'row',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10
  },
  countContainer: {
    alignItems: 'center',
    padding: 10
  },
  countText: {
    color: '#FF00FF'
  }
})
