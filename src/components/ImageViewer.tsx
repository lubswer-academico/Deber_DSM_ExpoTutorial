import { ImageSourcePropType, StyleSheet, View } from 'react-native';
import { Image } from 'expo-image';
import { EPN_THEME } from '@/theme/epnTheme';

type Props = {
  imgSource: ImageSourcePropType;
  selectedImage?: string;
};

export default function ImageViewer({ imgSource, selectedImage }: Props) {
  const img = selectedImage ? { uri: selectedImage } : imgSource;

  return (
    <View style={styles.imageWrapper}>
      <Image source={img} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  imageWrapper: {
    borderRadius: EPN_THEME.radius.lg,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: EPN_THEME.colors.border,
    backgroundColor: EPN_THEME.colors.surface,
  },
  image: {
    width: 320,
    height: 440,
  },
});

