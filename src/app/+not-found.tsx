import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import { EPN_THEME } from "@/theme/epnTheme";

const NotFoundScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>404</Text>
        <Text style={styles.subtitle}>Página no encontrada</Text>
        <Text style={styles.body}>
          El recurso al que intentas acceder no existe en esta aplicación.
        </Text>
        <Link href={"/"} style={styles.button}>
          Volver al Inicio
        </Link>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: EPN_THEME.colors.background,
    padding: 24,
  },
  card: {
    width: "100%",
    backgroundColor: EPN_THEME.colors.surface,
    padding: 24,
    borderRadius: EPN_THEME.radius.md,
    borderWidth: 1,
    borderColor: EPN_THEME.colors.border,
    alignItems: "center",
    ...EPN_THEME.shadows.card,
  },
  title: {
    fontSize: 48,
    fontWeight: "700",
    color: EPN_THEME.colors.primary,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "600",
    color: EPN_THEME.colors.accentText,
    marginBottom: 8,
  },
  body: {
    fontSize: 14,
    color: EPN_THEME.colors.text,
    textAlign: "center",
    marginBottom: 20,
  },
  button: {
    fontSize: 16,
    fontWeight: "600",
    color: EPN_THEME.colors.primary,
    backgroundColor: EPN_THEME.colors.accent,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: EPN_THEME.radius.md,
    overflow: "hidden",
  },
});

export default NotFoundScreen;

