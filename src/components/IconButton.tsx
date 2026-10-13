import { Pressable, StyleSheet, Text } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { EPN_THEME } from '@/theme/epnTheme';

type Props = {
  icon: keyof typeof MaterialIcons.glyphMap;
  label: string;
  onPress: () => void;
};

export default function IconButton({ icon, label, onPress }: Props) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.iconButton,
        pressed && { opacity: 0.8 },
      ]}
      onPress={onPress}
    >
      <MaterialIcons name={icon} size={30} color={EPN_THEME.colors.surface} />
      <Text style={styles.iconButtonLabel}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  iconButton: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
  },
  iconButtonLabel: {
    color: EPN_THEME.colors.surface,
    marginTop: 8,
    fontSize: 13,
    fontWeight: '500',
  },
});

