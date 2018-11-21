import React, {Component} from 'react';
import {
   Platform,
   StyleSheet,
   Text,
   View,
   Button,
   TextInput,
   Dimensions,
   StatusBar,
   ScrollView,
   Picker,
} from 'react-native';
//import{ AdMobBanner, } from 'expo';
//import ReactGoogleAdsense from 'react-google-adsense';

var width = Dimensions.get('window').width;

export default class App extends Component {
   constructor(props) {
    super(props);
    this.state = {text: 'Check out this output!', changeVal:2,};
  }

  capitalize(){
     var input = this.state.text;
     var temp = '';
     for(let i = 0; i < input.length; i++){
        temp += i%this.state.changeVal == 0? input.charAt(i).toUpperCase() : input.charAt(i).toLowerCase();
     }
     return temp;
  }
  lowercase(){
     var input = this.state.text;
     var temp = '';
     for(let i = 0; i < input.length; i++){
        temp += i%this.state.changeVal == 0? input.charAt(i).toLowerCase() : input.charAt(i).toUpperCase();
     }
     return temp;
  }
  randomizeText(){
     var input = this.state.text;
     var temp = '';
     for(let i = 0; i < input.length; i++){
        var RandomNumber = Math.floor(Math.random() * input.length);
        temp += input.charAt(RandomNumber);
     }
     return temp;
  }
  reverseText(){
     var input = this.state.text;
     var temp = '';
     for(let i = input.length - 1; i >= 0; i--){
        temp += input.charAt(i);
     }
     return temp;
  }

  render() {
    const adSenseClientID = 'ca-pub-9645541373422923';
    const adSenseSlotID = '4398330342';
    return (
      /*
      <ReactGoogleAdsense
         client = {adSenseClientID};
         slot={adSenseSlotID};
      ></ReactGoogleAdsense>

      <AdMobBanner
         bannerSize='fullBanner';
         adUnitID='ca-app-pub-9645541373422923~12795668992';
         testDeviceID='EMULATOR';/>
         */
      <ScrollView style={styles.container}>
         <StatusBar
            barStyle='light-content'
         />

         <View style={styles.TopBar}>
            <Text style={styles.TopBar}>Alter It</Text>
         </View>

         <View>
            <TextInput multiline ={true} style={styles.typeStyle} placeholder="Enter your Text here!" onChangeText={(text) => this.setState({text})}/>
         </View>

         <View style={ styles.textSection }>
            <Text style={styles.textType}>Original Input</Text>
            <Text style={styles.changedText}>{ this.state.text}</Text>
         </View>
         <View style={ styles.textSection }>
            <Text style={styles.textType}>All Uppercase</Text>
            <Text style={styles.changedText}>{ this.state.text.toUpperCase()}</Text>
         </View>
         <View style={ styles.textSection}>
            <Text style={styles.textType}>All Lowercase</Text>
            <Text style={styles.changedText}>{this.state.text.toLowerCase()}</Text>
         </View>

         <View style={styles.textSection}>
            <Picker
   selectedValue={this.state.changeVal}
   style={{backgroundColor: '#ffffff'}}
   prompt='Options'
   onValueChange={(itemValue, itemIndex) => this.setState({changeVal: itemValue}) }>
   <Picker.Item label='Select variation' value='1'/>
   <Picker.Item label='1 Character Variation' value='1' />
   <Picker.Item label='2 Character Variation' value='2' />
   <Picker.Item label='3 Character Variation' value='3' />
   <Picker.Item label='4 Character Variation' value='4' />
   <Picker.Item label='5 Character Variation' value='5' />
   <Picker.Item label='6 Character Variation' value='6' />
   <Picker.Item label='7 Character Variation' value='7' />
   <Picker.Item label='8 Character Variation' value='8' />
   <Picker.Item label='9 Character Variation' value='9' />
   <Picker.Item label='10 Character Variation' value='10' />

   </Picker>
         </View>
         <View style={styles.textSection}>
            <Text style={styles.textType}>Uppercase Every {this.state.changeVal } Character(s) </Text>
            <Text style={styles.changedText}>{ this.capitalize()}</Text>
         </View>
         <View style={styles.textSection}>
            <Text style={styles.textType}>Lowercase Every {this.state.changeVal } Character(s) </Text>
            <Text style={styles.changedText}>{ this.lowercase()}</Text>
         </View>

         <View style={styles.textSection}>
            <Text style={styles.textType}>Randomize Input</Text>
            <Text style={styles.changedText}>{ this.randomizeText() }</Text>
         </View>
         <View style={styles.textSection}>
            <Text style={styles.textType}>Reverse Input</Text>
            <Text style={styles.changedText}>{ this.reverseText() }</Text>
         </View>

      </ScrollView>

    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2c2f33',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
  },
  typeStyle:{
    color:'#2c2f33',
    margin:10,
    backgroundColor:'#ffffff',
    fontSize: 20,
  },
  textType:{
     color: '#7289da',
     paddingLeft: 10,
     textDecorationLine: 'underline',
     fontSize: 20,
  },
  changedText:{
     color:'#ffffff',
     paddingLeft: 20,
     fontSize: 15,
     paddingRight: 20,
  },
  TopBar:{
     color: '#ffffff',
     fontSize: 20,
     padding: 5,
     backgroundColor: '#23272a',
     flexDirection: 'row',
     textAlign: 'center',
     width:width
  },
  textSection:{
    margin: 10,
    padding: 5,
    backgroundColor: '#23272a',

  },
});
