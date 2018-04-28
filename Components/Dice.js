import React from 'react'
import { View, Text, TextInput} from 'react-native'

export default class dice extends React.Component {

  constructor(props){
    super(props)
    this.state ={
      parseString: ''
    }
  }
  render(){
    return(
      <View>
        <Text>Hello From Dice</Text>
        <Text>{this.state.parseString}</Text>
        <TextInput
          keyboardType='numeric'
          onChangeText={(text) => this.setState({parseString: text})}
       />
      </View>
    )
  }

}
