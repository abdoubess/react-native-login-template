import React,{useState} from 'react';
import { StyleSheet, Text, View, Modal, Alert } from 'react-native';
import {TextInput, Button} from 'react-native-paper'
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';

const CreateEmployee = ()=> {

    const [intitule,setIntitule] = useState("")
    const [auteur,setAuteur] = useState("")
    const [armoire,setArmoire] = useState("")
    const [picture,setPicture] = useState("")
    const [modal,setModal] = useState(false)
  

    const pickFromGallery = async ()=>{
        const {granted} = await Permissions.askAsync(Permissions.CAMERA_ROLL)
        if(granted){
            let data =  await ImagePicker.launchImageLibraryAsync({
                mediaTypes:ImagePicker.MediaTypeOptions.Images,
                allowsEditing:true,
                aspect:[1,1],
                quality:0.5
            })
            if(!data.cancelled){
                let newfile = { uri:data.uri,
                    type:`test/${data.uri.split(".")[1]}`,
                    name:`test.${data.uri.split(".")[1]}`
                }
                handleUpload(newfile)
            }
        }else{
            Alert.alert("L'application a besoin de la permission afin de scanner le code barre")

        }
    }

    const pickFromCamera = async ()=>{
        const {granted} = await Permissions.askAsync(Permissions.CAMERA)
        if(granted){
            let data =  await ImagePicker.launchCameraAsync({
                mediaTypes:ImagePicker.MediaTypeOptions.Images,
                allowsEditing:true,
                aspect:[1,1],
                quality:0.5
            })
            if(!data.cancelled){
                let newfile = { uri:data.uri,
                    type:`test/${data.uri.split(".")[1]}`,
                    name:`test.${data.uri.split(".")[1]}`
                }
                handleUpload(newfile)
            }

        }else{
            Alert.alert("L'application a besoin de la permission afin de scanner le code barre")

        }
    }


    const handleUpload = (image)=>{
       const data =  new FormData()
       data.append('file',image)
       data.append('upload_preset','bibliotheque')
       data.append("cloud_name","abdou")

       fetch("https://api.cloudinary.com/v1_1/abdou/image/upload",{
           method:"post",
           body:data
       }).then(res=>res.json()).
       then(data=>{
           setPicture(data.url)
           setModal(false)
       })
       
   
    }


    return (
        <View style={styles.root}>
            <TextInput
            style={styles.inputStyle} 
            label='intitule'
            value={intitule}
            theme={theme}
            mode="outlined"
            onChangeText={text => setIntitule(text)}
            />
            <TextInput
            style={styles.inputStyle} 
            label='armoire'
            value={armoire}
            theme={theme}
            mode="outlined"
            onChangeText={text => setArmoire(text)}
            />
            <TextInput
            style={styles.inputStyle} 
            label='auteur'
            value={auteur}
            theme={theme}
            mode="outlined"
            onChangeText={text => setAuteur(text)}
            />

            <Button
            style={styles.inputStyle} icon={picture==""?"upload":"check"}
             mode="contained"
             theme={theme} onPress={()  => setModal(true)}>
             Telechargez une photo de code barre 
            </Button>
            <Button
            style={styles.inputStyle} icon="content-save"
             mode="contained"
             theme={theme} onPress={()  => console.log("saved")}>
             Envoyez 
            </Button>

            <Modal 
            animationType="slide"
            transparent={true}
            visible={modal}
            onRequestClose={()=>{
                setModal(false)
            }} >

                <View style={styles.modalView}>
                    <View style={styles.modalButtonView}>
                    <Button icon="camera"
                    theme={theme} mode="contained" onPress={() => pickFromCamera()}>
                        Camera
                    </Button>
                    <Button icon="image-area"
                    theme={theme} mode="contained" onPress={() => pickFromGallery()}>
                        Gallerie
                    </Button>
                    </View>
                    <Button
                     theme={theme} onPress={() => setModal(false)}>
                        Annulez
                    </Button>
                </View>

            </Modal>
            

        </View>

    )
}

const theme = {
    colors:{
        primary:"#006aff"
    }
}

const styles=StyleSheet.create({
    root:{
        flex:1
    },
    
    inputStyle:{
        margin:5
    },
    
    modalView:{
        position:"absolute",
        bottom:2,
        width:"100%",
        backgroundColor:"grey"

    },

    modalButtonView:{
        flexDirection:"row",
        justifyContent:"space-around",
        padding:10
    }

})

export default CreateEmployee;