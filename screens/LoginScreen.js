import React from 'react';
import {View, Text, StyleSheet, Image, TextInput, TouchableOpacity, Alert, KeyboardAvoidingView} from 'react-native';
export default class LoginScreen extends React.Component{
    login=async(email, password)=>{
        if(email && password){
            try{
                const response = await firebase.auth().signInWithEmailAndPassword(email, password)
                if(response){
                    this.props.navigation.navigate('Transcation')
                }
            }
            catch(error){
                switch(error.code){case 'auth/user-not-found': Alert.alert("user doesnt exist")
                console.log("doesnt exist")
            break;
        case 'auth/invalid-email': Alert.alert("incorrect email or password")
    console.log("invalid")}
            }
        }
        else{
            Alert.alert("enter email and password")
        }
    }
    render() {
        return (
            <KeyboardAvoidingView style={{alignItems: 'center', marginTop:20}}>
            <View>
                <Image
                source={require('../assets/booklogo.jpg')}
                style={{width:200, height:200}}/>
                <Text>Login Screen</Text>
            </View>
            <View>
                <TextInput 
                style={styles.loginBox}
                placeholder="abc@example.com"
                keyboardType='email.address'
                onChangeText={(text)=>{
                    this.setState({
                        emailId: text
                    })
                }}/>
                <TextInput 
                style={styles.loginBox}
                secureTextEntry={true}
                placeholder="Enter Password"
                onChangeText={(text)=>{
                    this.setState({
                        emailId: text
                    })
                }}/>
            </View>
            <View>
                <TouchableOpacity style={{height:30, width:90, borderWidth:1, marginTop: 20, paddingTop:5, borderRadius:7}}
                onPress={()=>{this.Login(this.state.emailId,this.state.Password)}}>
                    <Text style={{textAlign:'center'}}>Login</Text>
                </TouchableOpacity>
            </View>
            </KeyboardAvoidingView>
        )
    }
}
const styles = StyleSheet.create({
    loginBox:{
        width:300,
        height:40,
        borderWidth:1.5,
        fontSize:20,
        margin:10,
        paddingLeft:10
    },
})