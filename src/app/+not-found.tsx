import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

const NotFoundScreen = () => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.text}>Página no encontrada</Text>
        <Link href={"/"} style={styles.button}>
          {" "}
          Volver{" "}
        </Link>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "rgb(62, 67, 94)",
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
});

export default NotFoundScreen;
