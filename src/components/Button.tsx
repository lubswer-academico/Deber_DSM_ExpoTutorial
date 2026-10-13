import { StyleSheet, View, Pressable, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { EPN_THEME } from '@/theme/epnTheme';

type Theme = 'primary' | 'secondary';

type Props = {
  label: string;
  theme?: Theme;
  onPress?: () => void;
};

export default function Button({ label, theme, onPress }: Props) {
  if (theme === 'primary') {
    return (
      <View style={[styles.buttonContainer, styles.primaryBorder]}>
        <Pressable
          style={({ pressed }) => [
            styles.button,
            { backgroundColor: EPN_THEME.colors.accent },
            pressed && styles.pressed,
          ]}
          onPress={onPress}
        >
          <FontAwesome
            name="picture-o"
            size={18}
            color={EPN_THEME.colors.primary}
            style={styles.buttonIcon}
          />
          <Text style={[styles.buttonLabel, { color: EPN_THEME.colors.primary, fontWeight: '700' }]}>
            {label}
          </Text>
        </Pressable>
      </View>
    );
  }

  return (
    <View style={styles.buttonContainer}>
      <Pressable
        style={({ pressed }) => [
          styles.button,
          { backgroundColor: EPN_THEME.colors.primary, borderWidth: 1, borderColor: EPN_THEME.colors.border },
          pressed && styles.pressed,
        ]}
        onPress={onPress}
      >
        <Text style={[styles.buttonLabel, { color: '#FFFFFF', fontWeight: '600' }]}>
          {label}
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: 320,
    minHeight: 48,
    height: 52,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 6,
  },
  primaryBorder: {
    borderWidth: 2,
    borderColor: EPN_THEME.colors.accent,
    borderRadius: EPN_THEME.radius.md + 4,
    padding: 2,
  },
  button: {
    borderRadius: EPN_THEME.radius.md,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  pressed: {
    opacity: 0.85,
  },
  buttonLabel: {
    fontSize: 16,
  },
  buttonIcon: {
    paddingRight: 8,
  },
});

