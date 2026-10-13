import { View, Pressable, StyleSheet } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { EPN_THEME } from '@/theme/epnTheme';

type Props = {
  onPress: () => void;
};

export default function CircleButton({ onPress }: Props) {
  return (
    <View style={styles.circleButtonContainer}>
      <Pressable
        style={({ pressed }) => [
          styles.circleButton,
          pressed && { opacity: 0.85 },
        ]}
        onPress={onPress}
      >
        <MaterialIcons name="add" size={38} color={EPN_THEME.colors.primary} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  circleButtonContainer: {
    width: 84,
    height: 84,
    marginHorizontal: 60,
    borderWidth: 4,
    borderColor: EPN_THEME.colors.accent,
    borderRadius: 42,
    padding: 3,
  },
  circleButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 42,
    backgroundColor: EPN_THEME.colors.surface,
  },
});

