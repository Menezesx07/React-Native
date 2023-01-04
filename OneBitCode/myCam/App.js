import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Modal, Image } from 'react-native';

import { Camera } from 'expo-camera';
import { useEffect, useState, useRef } from 'react';

import { FontAwesome } from "@expo/vector-icons"

export default function App() {

const camRef = useRef(null)
const [type, setType] = useState(Camera.Constants.Type.back) //carregar por padrão a camera traseira
const [permission, requestPermission] = Camera.useCameraPermissions();
const [capturedPhoto, setCaptredpPhoto] = useState(null)
const [open, setOpen] = useState(false)

//garantindo acesso a camera
useEffect(() => {
  (async () => {
    const { status } = await Camera.requestCameraPermissionsAsync();
    requestPermission(status === "granted");
  })();
}, []);

//verificando se foi aceito 
if (requestPermission === null) {
  return <View/>
} 

//verificando se foi aceito 
if (requestPermission === false) {
  return <Text>No access to camera</Text>;
}


//função para tirar a foto
async function takePicture () {
  if(camRef){
    const data = await camRef.current.takePictureAsync();
    setCaptredpPhoto(data.uri)
    setOpen(true)
  }
 
}

  return (
    <SafeAreaView style={styles.container}>
      <Camera
      style={styles.camera}
      type={type}
      ref={camRef}
      >

      <View style={styles.contentButtons}>
        <TouchableOpacity
        style={styles.buttonFlip}
        onPress={() =>
          setType(
            type === Camera.Constants.Type.back ?
            Camera.Constants.Type.front :
            Camera.Constants.Type.back
          )
        }>
            <FontAwesome name="exchange" size={22} color="red"></FontAwesome>
        </TouchableOpacity>

        <TouchableOpacity
        style={styles.buttonCamera}
        onPress={takePicture}>
          <FontAwesome name="camera" size={22} color="#00BFFF"></FontAwesome>
        </TouchableOpacity>
      </View>

      </Camera>

      {capturedPhoto && (
        <Modal
        animationType='slide'
        transparent={true}
        visible={open}
        >
          <View style={styles.contentModal}>
          <TouchableOpacity 
          style={styles.closeButton}
          onPress={() => {setOpen(false)}}>
             <FontAwesome name="close" size={50} color="#fff"></FontAwesome>
          </TouchableOpacity>

            <Image style={styles.imgPhoto} 
            source={{uri : capturedPhoto}}>
                
              </Image>
          </View>
        </Modal>
      )}
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  camera: {
    width: "100%",
    height: "75%"
  },
  contentButtons: {
    flex: 1,
    backgroundColor: "transparent",
    flexDirection: "row",
  },
  buttonFlip: {
    position: "absolute",
    bottom: 50,
    left: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    margin: 20,
    height: 50,
    width: 50,
    borderRadius: 50
  },
  buttonCamera: {
    position: "absolute",
    bottom: 50,
    right: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    margin: 20,
    height: 50,
    width: 50,
    borderRadius: 50
  },
  contentModal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-end",
    margin: 20
  },
  closeButton: {
    position: "absolute",
    top: 10,
    left: 2,
    margin: 10
  },
  imgPhoto: {
    width: "100%",
    height: 400
  }
});
