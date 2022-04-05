import React, { useState } from 'react'
import { View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import { Text } from 'react-native-paper'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import TextInput from '../components/TextInput'
import BackButton from '../components/BackButton'
import { theme } from '../core/theme'
import { emailValidator } from '../helpers/emailValidator'
import { passwordValidator } from '../helpers/passwordValidator'
import { nameValidator } from '../helpers/nameValidator'
import axios from 'axios';


export default function RegisterScreen({ navigation }) {
  const [nom, setNom] = useState("")
  const [prenom, setPrenom] = useState("")
  const [institut, setInstitut] = useState("")
  const [specialite, setSpecialite] = useState("")
  const [annee, setAnnee] = useState("")
  const [DDN, setDDN] = useState("")
  const [user_id, setUser_id] = useState("")
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")



  const submitData = () => {
    let data = {
        nom:nom,
        prenom:prenom,
        institut:institut,
        specialite:specialite,
        annee:annee,
        DDN:DDN,
        user_id:user_id,
        password:password,
        email:email,

    };
    axios
     .post('http://10.0.2.2:8080/api/table_membre', data)
     .then(function(response){
       if (response.status == 201) {
         console.log('response', response);
       }
     })
     .catch(function (error) { 
       alert(error);
     });

    
    //fetch("http://10.0.2.2:8080/api/table_membre",{
      //method:"post",
      //headers:{
        //'Content-Type': 'application/json'
      //},
      //body:JSON.stringify({
        //nom,
        //prenom,
        //institut,
        //specialite,
        //annee,
        //DDN,
        //user_id,
        //password,
        //email
      //})
    //})
    //.then(res=>res.json())
    //.then(data=>{
     // console.log(data)
    //})
  };









  //async function onSignUpPressed()
  //{
   // let item={nom,prenom,institut,specialite,annee,DDN,user_id,password,email}
   // console.warn(item)

    //let result= await fetch("http://10.0.2.2:8080/api/table_membre",{
     // method:'POST',
      //body:JSON.stringify(item),
      //headers:{
       // "Content-Type":'application/json',
        //"Accept":'application/json'
      //}
    //})
    //result = await result.json()
    //console.warn("result",result)
  //}



 // const onSignUpPressed = () => {
  //  const nameError = nameValidator(nom.value)
    //const emailError = emailValidator(email.value)
    //const passwordError = passwordValidator(password.value)
    //const prenom = (prenom.value)
    //const institut = (institut.value)
    //const specialite = (specialite.value)
    //const annee = (annee.value)
    //const DDN = (DDN.value)
    //const user_id = (user_id.value)

    //if (emailError || passwordError || nameError) {
      //setNom({ ...nom, error: nameError })
      //setEmail({ ...email, error: emailError })
      //setPassword({ ...password, error: passwordError })
      //return
    //}
    //navigation.reset({
      //index: 0,
      //routes: [{ name: 'Dashboard' }],
    //})
  //}

  //const submitData = ()=>{
    //fetch("http://172.20.10.3:8080/table_membre",{
      //method:"post",
      //headers:{
        //'Content-Type': 'application/json'
      //},
      //body:JSON.stringify({
        //nom:name,
        //password:password
    
   //   })
    //})
    //.then(res=>res.json())
    //.then(data=>{
      //console.log(data)
    //})

  //}

  return (
    <View>
    <ScrollView style={styles.ScrollView}>
    <Background>
      
      <Logo />
      <Header>Create Account</Header>
      
      <TextInput
      type="text"
      value={nom}
      onChange={(e)=>setNom(e.target.evalue)}
      className="from-control"
      placeholder ="nom"
      
        //label="Nom"
        //returnKeyType="next"
        //value={nom.value}
        //onChangeText={(text) => setNom({ value: text, error: '' })}
        //error={!!nom.error}
        //errorText={nom.error}
      />

       <TextInput
       type="text"
       value={prenom}
       onChange={(e)=>setPrenom(e.target.evalue)}
       className="from-control"
       placeholder ="prenom"
        //label="Prenom"
        //returnKeyType="next"
        //value={prenom.value}
        //onChangeText={(text) => setPrenom({ value: text, error: '' })}
        //error={!!prenom.error}
        //errorText={prenom.error}
      />

      <TextInput
      type="text"
      value={institut}
      onChange={(e)=>setInstitut(e.target.evalue)}
      className="from-control"
      placeholder ="institut"
      
        //label="Institut"
        //returnKeyType="next"
        //value={institut.value}
        //onChangeText={(text) => setInstitut({ value: text, error: '' })}
        //error={!!institut.error}
        //errorText={institut.error}
      />


       <TextInput
       type="text"
       value={specialite}
       onChange={(e)=>setSpecialite(e.target.evalue)}
       className="from-control"
       placeholder ="specialite"
       // label="Specialite"
        //returnKeyType="next"
        //value={specialite.value}
        //onChangeText={(text) => setSpecialite({ value: text, error: '' })}
        //error={!!specialite.error}
        //errorText={specialite.error}
      />

       <TextInput
       type="text"
       value={annee}
       onChange={(e)=>setAnnee(e.target.evalue)}
       className="from-control"
       placeholder ="annee"
        //label="Annee"
        //returnKeyType="next"
        //value={annee.value}
        //onChangeText={(text) => setAnnee({ value: text, error: '' })}
        //error={!!annee.error}
        //errorText={annee.error}
      />

       <TextInput
       type="text"
       value={DDN}
       onChange={(e)=>setDDN(e.target.evalue)}
       className="from-control"
       placeholder ="DDN"
        //label="DDN"
        //returnKeyType="next"
        //value={DDN.value}
        //onChangeText={(text) => setDDN({ value: text, error: '' })}
        //error={!!DDN.error}
        //errorText={DDN.error}
      />

       <TextInput
       type="text"
       value={user_id}
       onChange={(e)=>setUser_id(e.target.evalue)}
       className="from-control"
       placeholder ="userID"
        //label="userID"
        //returnKeyType="next"
        //value={user_id.value}
        //onChangeText={(text) => setUser_id({ value: text, error: '' })}
        //error={!!user_id.error}
       // errorText={user_id.error}
      />



      <TextInput
      type="text"
      value={email}
      onChange={(e)=>setEmail(e.target.evalue)}
      className="from-control"
      placeholder ="email"
        //label="Email"
        //returnKeyType="next"
        //value={email.value}
        //onChangeText={(text) => setEmail({ value: text, error: '' })}
        //error={!!email.error}
        //errorText={email.error}
        //autoCapitalize="none"
        //autoCompleteType="email"
        //textContentType="emailAddress"
        //keyboardType="email-address"
      />
      <TextInput
      type="text"
      value={password}
      onChange={(e)=>setPassword(e.target.evalue)}
      className="from-control"
      placeholder ="password"
        //label="Password"
        //returnKeyType="done"
        //value={password.value}
        //onChangeText={(text) => setPassword({ value: text, error: '' })}
        //error={!!password.error}
        //errorText={password.error}
        //secureTextEntry
      />
      <Button
        mode="contained"
        onPress={() => submitData()}
        style={{ marginTop: 24 }}
      >
        Sign Up
      </Button>
      
      <View style={styles.row}>
        <Text> Avez vous déja un compte? </Text>
        <TouchableOpacity onPress={() => navigation.replace('LoginScreen')}>
          <Text style={styles.link}>Login</Text>
          <Text></Text>
        </TouchableOpacity>
      </View>
    </Background>
    </ScrollView>
      </View>
  )
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
 
})
