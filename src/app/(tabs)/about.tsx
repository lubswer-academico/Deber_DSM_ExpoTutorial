import { StyleSheet, Text, View } from "react-native";
import { EPN_THEME } from "@/theme/epnTheme";

const AboutScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.titleRow}>
          <Text style={styles.titlePrimary}>STICKER SMASH </Text>
          <Text style={styles.titleAccent}>EPN</Text>
        </View>

        <Text style={styles.subtitle}>Escuela Politécnica Nacional</Text>

        <View style={styles.divider} />

        <Text style={styles.body}>
          Aplicación desarrollada como práctica formativa del componente de Desarrollo de Sistemas Móviles.
        </Text>

        <View style={styles.metaContainer}>
          <Text style={styles.metaItem}>• Identidad Visual Institucional</Text>
          <Text style={styles.metaItem}>• React Native & Expo Router</Text>
          <Text style={styles.metaItem}>• Accesibilidad WCAG AA</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: EPN_THEME.colors.background,
    padding: 24,
  },
  card: {
    width: "100%",
    backgroundColor: EPN_THEME.colors.surface,
    borderRadius: EPN_THEME.radius.md,
    padding: 24,
    borderWidth: 1,
    borderColor: EPN_THEME.colors.border,
    ...EPN_THEME.shadows.card,
  },
  titleRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 6,
  },
  titlePrimary: {
    fontSize: 22,
    fontWeight: "700",
    color: EPN_THEME.colors.primary,
  },
  titleAccent: {
    fontSize: 22,
    fontWeight: "700",
    color: EPN_THEME.colors.accentText,
  },
  subtitle: {
    fontSize: 14,
    fontWeight: "600",
    color: EPN_THEME.colors.textMuted,
    marginBottom: 16,
  },
  divider: {
    height: 2,
    backgroundColor: EPN_THEME.colors.accent,
    borderRadius: 2,
    marginBottom: 16,
  },
  body: {
    fontSize: 15,
    lineHeight: 22,
    color: EPN_THEME.colors.text,
    marginBottom: 16,
  },
  metaContainer: {
    backgroundColor: EPN_THEME.colors.background,
    padding: 12,
    borderRadius: EPN_THEME.radius.sm,
    gap: 6,
  },
  metaItem: {
    fontSize: 13,
    color: EPN_THEME.colors.primary,
    fontWeight: "500",
  },
});

export default AboutScreen;

