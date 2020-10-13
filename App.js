import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View,Image, SafeAreaView,ScrollView } from 'react-native';
import { Button, Input, Card, ListItem,Icon } from 'react-native-elements';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { color } from 'react-native-reanimated';

//LOGIN PAGE

function HomeScreen({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.tinyLogo}
        source={require("./assets/logo3.png")}
      />
      <Text style={styles.welcomeText}>Gran-Turismo </Text>
      <SafeAreaView style={styles.boxx}>
        <Input styles={styles.inputName} label="Username" inputStyle={{color:'red',}} labelStyle={{color:'white',fontSize:20}} />
        <Input styles={styles.inputName} label="Password" inputStyle={{color:'red'}} labelStyle={{color:'white',fontSize:20}} />
        <SafeAreaView style={ styles.butt }>
            <Button title="Login" buttonStyle={styles.butto} onPress={() => navigation.push('Cars')}></Button>
        </SafeAreaView>
      </SafeAreaView>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

//CARS BROWSING PAGE

function DetailsScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
      <Text style={styles.welcomeText}>BRANDS </Text>
      <Image
        style={styles.grid}
        source={require("./assets/audi.jpg")}
      />
      <Image
        style={styles.grid}
        source={require("./assets/bmw.jpg")}
      />
      <Image
        style={styles.grid}
        source={require("./assets/merc.jpg")}
      />
      <Image
        style={styles.grid}
        source={require("./assets/bentley.jpg")}
      />
      <Image
        style={styles.grid}
        source={require("./assets/lambo.jpg")}
      />
      <Image
        style={styles.grid}
        source={require("./assets/rr.jpg")}
      />
      
      <StatusBar style="auto" />
      <Button title="HelpDesk" buttonStyle={styles.help} onPress={() => navigation.push('HelpDesk')}></Button>
      </ScrollView>

    </SafeAreaView>
    
  );
}

//HELPDESK
function HelpScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.form}>
      <Text style={styles.welcomeText}>Help Desk </Text>
      <SafeAreaView style={styles.boxForm}>
        <Input styles={styles.inputName} label="Full Name" inputStyle={{color:'red',}} labelStyle={{color:'white',fontSize:20}} />
        <Input styles={styles.inputName} label="Email" inputStyle={{color:'red',}} labelStyle={{color:'white',fontSize:20}} />
        <Input styles={styles.inputName} label="Number" inputStyle={{color:'red',}} labelStyle={{color:'white',fontSize:20}} />
        <Input styles={styles.inputName} label="Address" inputStyle={{color:'red'}} labelStyle={{color:'white',fontSize:20}} />
        <Input styles={styles.inputName} label="Select Problem Category" inputStyle={{color:'red',}} labelStyle={{color:'white',fontSize:20}} />
        <Input styles={styles.inputName} label="Explain your Problem briefly" inputStyle={{color:'red'}} labelStyle={{color:'white',fontSize:20}} />
        <SafeAreaView style={ styles.butt }>
            <Button title="Submit" buttonStyle={styles.submit} onPress={() => navigation.push('Login')}></Button>
        </SafeAreaView>
      </SafeAreaView>
      <StatusBar style="auto" />
    </SafeAreaView>

  );
}
//Function to create navigator 
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={HomeScreen}  options={{
          headerStyle: {
            backgroundColor: '#1e2e42',
          },
          headerTitleStyle: {
            color:'white',
            textAlign:'center',
            fontWeight: 'bold',
          },
        }} />
        <Stack.Screen name="Cars" component={DetailsScreen} options={{
          headerStyle: {
            backgroundColor: '#1e2e42',
          },
          headerTitleStyle: {
            color:'white',
            marginLeft:'35%',
            fontWeight: 'bold',
          },
        }} />
        <Stack.Screen name="HelpDesk" component={HelpScreen} options={{
          headerStyle: {
            backgroundColor: '#1e2e42',
          },
          headerTitleStyle: {
            color:'white',
            marginLeft:'25%',
            fontWeight: 'bold',
          },
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


//STYLESHEET
const styles = StyleSheet.create({
  tinyLogo:{
    marginTop:10,
    height:200,
    width:200,
  },
  grid:{
    marginTop:10,
    height:230,
    width:290,
    marginBottom:20,
    borderRadius:20,
    borderWidth:2,
    borderColor:'white',
    
  },
  container: 
  {
    flex: 1,
    paddingLeft:30,
    paddingRight:30,
    backgroundColor: '#162232',
    alignItems: 'center',
  },
  welcomeText: {
    textDecorationColor: 'white',
    fontWeight:'bold',
    marginTop:40,
    fontSize: 45,
    marginBottom: 10,
    color: '#F40505',
    textAlign: 'center',
  },

  butt: {

    backgroundColor:'transparent',
    marginTop: 10,
    color: 'black',
  },
  butto: {
    marginLeft:50,
    marginRight:50,
    borderColor: 'black',
    borderRadius: 15 ,
    backgroundColor: '#F40505',
  },

  help: {
    marginLeft:70,
    marginTop:40,
    marginRight:70,
    marginBottom:30,
    borderColor: 'black',
    borderRadius: 13 ,
    padding:15,
    backgroundColor: '#F40505',
  },

  boxx: {
    width:300,
    padding:30,
    borderWidth:3,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderColor:'white',
  },
  form: {
    flex: 1,
    backgroundColor: '#162232',
    alignItems: 'center',

  },
  boxForm: {
    width: '90%',
    padding:30,
    borderWidth:1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderColor:'white',
  },
  submit: {
    marginLeft:80,
    marginRight:80,
    padding:14,
    borderColor: 'black',
    borderRadius: 15 ,
  },
}
);
export default App;