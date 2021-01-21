import React, { Component } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity,TextInput, Alert } from 'react-native';
import firebase from 'firebase';

export default class WelcomeScreen extends Component {
    constructor(){
      super()
      this.state={
        emailId : '',
        password: ''
      }
    }
  
    userLogin = (emailId, password)=>{
      firebase.auth().signInWithEmailAndPassword(emailId, password)
      .then(()=>{
        alert("Successfully Login")
      })
      .catch((error)=> {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorMessage)
      })
    }
  
    userSignUp = (emailId, password) =>{
      firebase.auth().createUserWithEmailAndPassword(emailId, password)
      .then((response)=>{
        alert("User Added Successfully")
      })
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
       alert(errorMessage)
      });
    }
  
  
    render(){
      return(
        <View style={styles.container}>
  
  <Image styles = {{
          marginTop : 20,
          height : 75,
          width : 100
        }}
        source = {
          URL = 'data:image/png;base64,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'
        }/>
    
          
          <View style={styles.buttonContainer}>
            <TextInput
            style={styles.loginBox}
            placeholder="Email Id"
            placeholderTextColor = "#ffff"
            keyboardType ='email-address'
            onChangeText={(text)=>{
              this.setState({
                emailId: text
              })
            }}
          />
  
          <TextInput
            style={styles.loginBox}
            secureTextEntry = {true}
            placeholder="Password"
            placeholderTextColor = "#ffff"
            onChangeText={(text)=>{
              this.setState({
                password: text
              })
            }}
          />
            <TouchableOpacity
              style={[styles.button,{marginBottom:20, marginTop:20}]}
              onPress = {()=>{this.userLogin(this.state.emailId, this.state.password)}}
              >
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={()=>{this.userSignUp(this.state.emailId, this.state.password)}}
              >
              <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      )
    }
  }
  
  
  const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:'#F8BE85'
    },
    profileContainer:{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
    },
    title :{
      fontSize:65,
      fontWeight:'300',
      paddingBottom:30,
      color : '#ff3d00'
    },
    loginBox:{
      width: 300,
      height: 40,
      borderBottomWidth: 1.5,
      borderColor : '#ff8a65',
      fontSize: 20,
      margin:10,
      paddingLeft:10
    },
    button:{
      width:300,
      height:50,
      justifyContent:'center',
      alignItems:'center',
      borderRadius:25,
      backgroundColor:"#ff9800",
      shadowColor: "#000",
      shadowOffset: {
         width: 0,
         height: 8,
      },
      shadowOpacity: 0.30,
      shadowRadius: 10.32,
      elevation: 16,
    },
    buttonText:{
      color:'#ffff',
      fontWeight:'200',
      fontSize:20
    },
    buttonContainer:{
      flex:1,
      alignItems:'center'
    },
    
  
  })