import { ImageSourcePropType, StyleSheet, View, Platform, Text } from "react-native";
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
import { captureRef } from 'react-native-view-shot';
import domtoimage from 'dom-to-image';
import { EPN_THEME } from "@/theme/epnTheme";

const PlaceholderImage = require("../../../assets/images/background-image.png");

export default function Index() {
  const imageRef = useRef<View>(null);
  const [permissionResponse, requestPermission] = MediaLibrary.usePermissions();
  const [selectedImage, setSelectedImage] = useState<string | undefined>(undefined);
  const [showAppOptions, setShowAppOptions] = useState<boolean>(false);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [pickedEmoji, setPickedEmoji] = useState<ImageSourcePropType | undefined>(undefined);

  useEffect(() => {
    if (!permissionResponse?.granted) {
      requestPermission();
    }
  }, []);

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
      setShowAppOptions(true);
    } else {
      alert('No seleccionaste ninguna imagen.');
    }
  };

  const onReset = () => {
    setShowAppOptions(false);
    setPickedEmoji(undefined);
  };

  const onModalClose = () => {
    setIsModalVisible(false);
  };

  const onAddSticker = () => {
    setIsModalVisible(true);
  };

  const onSaveImageAsync = async () => {
    if (Platform.OS === "web") {
      try {
        //@ts-ignore
        const dataUrl = await domtoimage.toJpeg(imageRef.current, {
          quality: 0.95,
          width: 320,
          height: 440,
        });

        let link = document.createElement('a');
        link.download = 'sticker-smash-epn.jpeg';
        link.href = dataUrl;
        link.click();
      } catch (e) {
        console.log(e);
      }
    } else {
      try {
        const localUri = await captureRef(imageRef, {
          height: 440,
          quality: 1,
        });

        await MediaLibrary.saveToLibraryAsync(localUri);
        if (localUri) {
          alert('¡Imagen guardada con éxito en tu galería!');
        }
      } catch (e) {
        console.log(e);
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerBadge}>
        <Text style={styles.badgeText}>ESCUELA POLITÉCNICA NACIONAL</Text>
      </View>

      <View style={styles.previewCard}>
        <View ref={imageRef} collapsable={false}>
          <ImageViewer imgSource={selectedImage || PlaceholderImage} />
          {pickedEmoji && <EmojiSticker imageSize={40} stickerSource={pickedEmoji} />}
        </View>
      </View>

      {showAppOptions ? (
        <View style={styles.optionsContainer}>
          <View style={styles.optionsRow}>
            <IconButton icon="refresh" label="Reiniciar" onPress={onReset} />
            <CircleButton onPress={onAddSticker} />
            <IconButton icon="save-alt" label="Guardar" onPress={onSaveImageAsync} />
          </View>
        </View>
      ) : (
        <View style={styles.footerContainer}>
          <Button onPress={pickImageAsync} label="Elegir una foto" theme="primary" />
          <Button label="Usar esta foto" onPress={() => setShowAppOptions(true)} />
        </View>
      )}

      <EmojiPicker isVisible={isModalVisible} onClose={onModalClose}>
        <EmojiList onSelect={setPickedEmoji} onCloseModal={onModalClose} />
      </EmojiPicker>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: EPN_THEME.colors.background,
    paddingTop: 12,
  },
  headerBadge: {
    backgroundColor: EPN_THEME.colors.primary,
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: EPN_THEME.radius.full,
    marginBottom: 12,
  },
  badgeText: {
    color: EPN_THEME.colors.accent,
    fontSize: 11,
    fontWeight: "700",
    letterSpacing: 1,
  },
  previewCard: {
    backgroundColor: EPN_THEME.colors.surface,
    padding: 6,
    borderRadius: EPN_THEME.radius.lg + 2,
    borderWidth: 1,
    borderColor: EPN_THEME.colors.border,
    ...EPN_THEME.shadows.card,
  },
  footerContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    paddingBottom: 20,
  },
  optionsContainer: {
    position: 'absolute',
    bottom: 30,
    backgroundColor: EPN_THEME.colors.primary,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: EPN_THEME.radius.full,
    ...EPN_THEME.shadows.card,
  },
  optionsRow: {
    alignItems: 'center',
    flexDirection: 'row',
  },
});

