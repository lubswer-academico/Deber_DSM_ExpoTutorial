import { ImageSourcePropType, StyleSheet } from 'react-native';
import { Image } from 'expo-image';

type Props = {
  imgSource: ImageSourcePropType;
  selectedImage?: string;
};

export default function ImageViewer({ imgSource, selectedImage }: Props) {

  const img = selectedImage ? { uri: selectedImage } : imgSource

  return <Image source={img} style={styles.image} />;
}

const styles = StyleSheet.create({
  image: {
    width: 300,
    height: 400,
    borderRadius: 18,
  },
});
