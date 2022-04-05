import React from 'react';
import { render } from 'react-dom';
import { StyleSheet, Text, View,Image,FlatList } from 'react-native';
import {Card, FAB} from 'react-native-paper'

const HomeScreen = (props)=>{
    const data = [
        {id:"1",name:"adou",auteur:"web dev",armoire:"physique",langue:"français",maison_edition:"alger",annee_edition:"2006",resume:"lsljaljfajfjapkjapj"},
        {id:"2",name:"bess",auteur:"ios dev",armoire:"physique",langue:"français",maison_edition:"alger",annee_edition:"2006",resume:"lsljaljfajfjapkjapj"},
        {id:"3",name:"qlqn",auteur:"ml dev",armoire:"physique",langue:"français",maison_edition:"alger",annee_edition:"2006",resume:"lsljaljfajfjapkjapj"},
        {id:"4",name:"someone",auteur:"web dev",armoire:"physique",langue:"français",maison_edition:"alger",annee_edition:"2006",resume:"lsljaljfajfjapkjapj"},
    ]
    const renderList = ((item)=>{
        return(
            <Card style={styles.mycard} key={item.id}
            onPress={()=>props.navigation.navigate("Livre",{item})}>
                <View style={styles.cardView}>
                    <Image
                    style={{width:60,height:60,borderRadius:30}}
                    source={{url:""}} />

                    <View style={{marginLeft:10}}>
                        <Text style={styles.text}>{item.name}</Text>
                        <Text style={styles.text}>{item.auteur}</Text>
                        <Text style={styles.text}>{item.armoire}</Text>
                        <Text style={styles.text}>{item.resume}</Text>
                    </View>
                </View>
            </Card>

        )

   })
    return(
        <View style={{flex:1}}>
            <FlatList
            data={data}
            renderItem={({item})=>{
               return renderList(item)
            }}
            keyExtractor={item=>item.id}
            />

            <FAB onPress={()=>props.navigation.navigate("CreateEmployee")}
            style={styles.fab}
            small={false}
            icon="plus"
            theme={{colors:{accent:"#006aff"}}}
            
            />
            
        </View>
    )

}


const styles = StyleSheet.create({
    mycard:{
        margin:5,

    },
    cardView:{
        flexDirection:"row",
        padding:6
    },
    text:{
        fontSize:18,
    },
    fab:{
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
    },
})

export default HomeScreen