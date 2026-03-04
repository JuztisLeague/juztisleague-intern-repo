import { View, Text, Image, StyleSheet } from "react-native";

export default function ProfileCard() {
  console.log("Rendering...");
  return (
    <View style={styles.card}>
      <Text style={styles.name}>
        Von Juiztis A. Elciario
      </Text>

      <Text style={styles.role}>
        Frontend Developer
      </Text>

      <Image
        source={{ uri: "https://via.placeholder.com/100" }}
        style={styles.image}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 20,
    backgroundColor: "lightblue",
    borderWidth: 1,
    borderColor: "white",
    margin: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
  },
  role: {
    marginTop: 5,
  },
  image: {
    width: 100,
    height: 100,
    marginTop: 10,
  },
});