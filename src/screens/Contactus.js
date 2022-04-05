import React from 'react';
import { StyleSheet, Text, View,Linking } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Logo from '../components/Logo';
import {Title,Card} from 'react-native-paper'
import { MaterialIcons,Entypo } from '@expo/vector-icons'


const Contactus = ()=>{

    const openDial=()=>{
        Linking.openURL("tel:0697254538")
    }

    return (

        <View style={styles.root}>
            <LinearGradient 
            colors={["#0033ff","#6bc1ff"]}
            style={{height:"20%"}}
            />

            <View style={{alignItems:"center",margin:15}} >
            <Logo 
            style={{width:140,height:140,borderRadius:140/2,marginTop:-50}}

            />
            </View>
            <View style={{alignItems:"center"}}>
                <Title>Contactez-nous</Title>
                
            </View>

            <Card style={styles.mycard} onPress={()=>{
                Linking.openURL("mailto:abdennour.bessam.dz@viacesi.fr")
            }} >
                <View style={styles.cardContent} >
                    <MaterialIcons name="email" size={32} color="#006aff" />
                    <Text style={styles.mytext}>abdennour.bessam.dz@viacesi.fr</Text>

                </View>

            </Card>



            <Card style={styles.mycard} onPress={()=>openDial()} >
                <View style={styles.cardContent} >
                    <Entypo name="phone" size={32} color="#006aff" />
                    <Text style={styles.mytext}>0697254538</Text>

                </View>

            </Card>







        </View>

    )

}


const styles = StyleSheet.create({
    root:{
        flex:1
    },
    mycard:{
        margin:3
    },
    cardContent:{
        flexDirection:"row",
        padding:8
    },
    mytext:{
        fontSize:18,
        marginTop:3,
        marginLeft:3

    }
})

export default Contactus