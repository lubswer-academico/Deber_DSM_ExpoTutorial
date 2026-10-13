import { useState } from 'react';
import { ImageSourcePropType, StyleSheet, FlatList, Platform, Pressable } from 'react-native';
import { Image } from 'expo-image';
import { EPN_THEME } from '@/theme/epnTheme';

type Props = {
  onSelect: (image: ImageSourcePropType) => void;
  onCloseModal: () => void;
};

export default function EmojiList({ onSelect, onCloseModal }: Props) {
  const [emoji] = useState<ImageSourcePropType[]>([
    require("@/assets/images/emoji1.png"),
    require("@/assets/images/emoji2.png"),
    require("@/assets/images/emoji3.png"),
    require("@/assets/images/emoji4.png"),
    require("@/assets/images/emoji5.png"),
    require("@/assets/images/emoji6.png"),
  ]);

  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={Platform.OS === 'web'}
      data={emoji}
      contentContainerStyle={styles.listContainer}
      renderItem={({ item, index }) => (
        <Pressable
          style={({ pressed }) => [
            styles.itemCard,
            pressed && styles.itemCardPressed,
          ]}
          onPress={() => {
            onSelect(item);
            onCloseModal();
          }}
        >
          <Image source={item} key={index} style={styles.image} />
        </Pressable>
      )}
    />
  );
}

const styles = StyleSheet.create({
  listContainer: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    alignItems: 'center',
  },
  itemCard: {
    backgroundColor: EPN_THEME.colors.background,
    borderWidth: 1,
    borderColor: EPN_THEME.colors.border,
    borderRadius: EPN_THEME.radius.md,
    padding: 8,
    marginRight: 14,
    ...EPN_THEME.shadows.card,
  },
  itemCardPressed: {
    borderColor: EPN_THEME.colors.accent,
    transform: [{ scale: 0.96 }],
  },
  image: {
    width: 80,
    height: 80,
  },
});

