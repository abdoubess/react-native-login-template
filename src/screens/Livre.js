import React from 'react';
import { StyleSheet, Text, View,Linking } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Logo from '../components/Logo';
import {Title,Card} from 'react-native-paper'
import { MaterialIcons,Entypo } from '@expo/vector-icons'


const Livre = (props)=>{

    const {id,name,auteur,armoire,langue,maison_edition,annee_edition,resume} = props.route.params.item

   

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
                <Title>{name}</Title>
                <Text style={{fontSize:15}}>{auteur}</Text>
                
            </View>

            <Card style={styles.mycard}  >
                <View style={styles.cardContent} >
                    <MaterialIcons name="email" size={32} color="#006aff" />
                    <Text style={styles.mytext}>{armoire}</Text>

                </View>

            </Card>



            <Card style={styles.mycard}  >
                <View style={styles.cardContent} >
                    <Entypo name="phone" size={32} color="#006aff" />
                    <Text style={styles.mytext}>{langue}</Text>

                </View>

            </Card>

            <Card style={styles.mycard}  >
                <View style={styles.cardContent} >
                    <Entypo name="phone" size={32} color="#006aff" />
                    <Text style={styles.mytext}>{maison_edition}</Text>

                </View>

            </Card>

            <Card style={styles.mycard}  >
                <View style={styles.cardContent} >
                    <Entypo name="phone" size={32} color="#006aff" />
                    <Text style={styles.mytext}>{annee_edition}</Text>

                </View>

            </Card>

            <Card style={styles.mycard}  >
                <View style={styles.cardContent} >
                    <Entypo name="phone" size={32} color="#006aff" />
                    <Text style={styles.mytext}>{resume}</Text>

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

export default Livre