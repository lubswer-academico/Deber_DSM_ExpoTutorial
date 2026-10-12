//import { Link } from "expo-router";
import { ImageSourcePropType, StyleSheet, View, Platform } from "react-native";
//import { Image } from "expo-image";
import Button from "@/components/Button";
import ImageViewer from "@/components/ImageViewer";
import * as ImagePicker from 'expo-image-picker';
import { useEffect, useState, useRef } from "react";
import IconButton from "@/components/IconButton";
import CircleButton from "@/components/CircleButton";
import EmojiPicker from "@/components/EmojiPicker";
import EmojiList from "@/components/EmojiList";
import EmojiSticker from "@/components/EmojiSticker";
import * as MediaLibrary from 'expo-media-library/legacy';
import {captureRef} from 'react-native-view-shot';
import domtoimage from 'dom-to-image';


const PlaceholderImage = require("../../../assets/images/background-image.png");


export default function Index() {

  const imageRef = useRef<View>(null);

  const [permissionResponse, requestPermission] = MediaLibrary.usePermissions();

  const [selectedImage, setSelectedImage] = useState<string | undefined>(undefined);

  const [showAppOptions, setShowAppOptions] = useState<boolean>(false)

  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  const [pickedEmoji, setPickedEmoji] = useState<ImageSourcePropType | undefined>(undefined);

  useEffect(()=> {
    if(!permissionResponse?.granted){
      requestPermission();
    }
  },[])

  const pickImageAsync = async () => {

    let result = await ImagePicker.launchImageLibraryAsync({
      //mediaTypes: ['images'],
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri)
      setShowAppOptions(true);
      console.log(result);
    } else {
      alert('You did not select any image.');
    }
  };
  
  const onReset = () => {
    setShowAppOptions(false);
  };

  const onModalClose = () => {
    setIsModalVisible(false);
  };

  const onAddSticker = () => {
    setIsModalVisible(true);
  };

  const onSaveImageAsync = async () => {
    
      if(Platform.OS === "web"){
      try {
        //@ts-ignore
        const dataUrl = await domtoimage.toJpeg(imageRef.current, {
          quality: 0.95,
          width: 320,
          height: 440,
        });

        let link = document.createElement('a');
        link.download = 'sticker-smash.jpeg';
        link.href = dataUrl;
        link.click();
      } catch (e) {
        console.log(e);
      }
      }else{
        try {
      const localUri = await captureRef(imageRef, {
        height: 440,
        quality: 1,
      });

      await MediaLibrary.saveToLibraryAsync(localUri );
      if (localUri) {
        alert('Saved!');
      }
      } catch (e) {
        console.log(e);
      }
    }
  };
  
  return (
    <View style={styles.container}>
      {/*<Text style={styles.text}>Formulario</Text>*/}
      <View ref={imageRef} collapsable={false} style={{}}>
        <ImageViewer imgSource={selectedImage ||PlaceholderImage} />
        {pickedEmoji && <EmojiSticker imageSize={40} stickerSource={pickedEmoji}/>}
      </View>
      {showAppOptions?(
        <View style={styles.optionsContainer}>
          <View style={styles.optionsRow}>
            <IconButton icon="refresh" label="Reset" onPress={onReset} />
            <CircleButton onPress={onAddSticker} />
            <IconButton 
            icon="save-alt" 
            label="Save" 
            onPress={onSaveImageAsync} />
          </View>
        </View>  
      ) : (
        <View style={styles.footerContainer}>
          <Button 
          onPress={pickImageAsync}
          label="Escoger una imagen" 
          theme="primary" />
          <Button label="Guardar la imagen" onPress= {()=>setShowAppOptions(true)}/>
      </View>        
      )}
      <EmojiPicker isVisible={isModalVisible} onClose={onModalClose}>
        <EmojiList onSelect={setPickedEmoji} onCloseModal={onModalClose}/>
      </EmojiPicker>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "rgba(30, 31, 30, 0.9)",
  },
  text: {
    fontSize: 20,
    color: "rgb(255, 255, 255)",
    marginTop: 30,
    marginBottom: 30,
  },
  button: {
    fontSize: 20,
    textDecorationLine: "underline",
    color: "rgba(247, 247, 253, 0.97)",
  },
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
  imageContainer: {
    flex: 1,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: "center",
    justifyContent: "center",
  },
  optionsContainer: {
    position: 'absolute',
    bottom: 80,
  },
  optionsRow: {
    alignItems: 'center',
    flexDirection: 'row',
  },
});
