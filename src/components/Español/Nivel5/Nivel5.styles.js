import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  titleContainer: {
    marginTop: 20,
    marginLeft: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  title: {
    color: "white",
    fontSize: 25,
  },

  nivel: {
    color: "white",
    fontSize: 15,
    marginRight: 20,
    width: 60,
    height: 30,
    textAlign: "center",
    paddingTop: 5,
  },

  words: {
    color: "white",
    fontSize: 30,
    textAlign: "center",
  },

  timeout: {
    color: "red",
    fontSize: 20,
    marginBottom: 30,
    fontWeight: "bold",
  },

  timeout2: {
    color: "red",
    fontSize: 15,
    marginBottom: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
});
