import React from 'react'
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet
  } from 'react-native'

export default class staticDice extends React.Component {

  constructor(props){
    super(props)
    this.state ={
      userInput: '',
      parseString: ''
    }
    this.rollDice = this.rollDice.bind(this)
  }

  rollDice(target){
     let roll = Math.ceil(target*Math.random())
     this.props.addRoll(roll)
  }

  render(){
    return(
      <View>
          <View style={styles.container}>
            <TouchableOpacity
              style={styles.button}
              onPress={()=>this.rollDice(4)}
              >
                <Text>D4</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={()=>this.rollDice(6)}
              >
                <Text>D6</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={()=>this.rollDice(8)}
              >
                <Text>D8</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.container}>
            <TouchableOpacity
              style={styles.button}
              onPress={()=>this.rollDice(10)}
              >
                <Text>D10</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={()=>this.rollDice(12)}
              >
                <Text>D12</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={()=>this.rollDice(20)}
              >
                <Text>D20</Text>
            </TouchableOpacity>
          </View>
        </View>
      )
    }
  }

  const styles = StyleSheet.create({
    container: {
      flexWrap: 'wrap',
      alignItems: 'center',
      flexDirection:'row',
    },
    button: {
      backgroundColor: '#DDDDDD',
      padding: 10,
      width: 50
    },
    countContainer: {
      alignItems: 'center',
      padding: 10
    }
  })
