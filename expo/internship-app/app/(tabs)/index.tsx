import { View, StyleSheet } from "react-native";
import { Button, Card, Text } from "react-native-paper";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
          {/*<Text variant="titleLarge">Von Juztis</Text>
          <Text variant="bodyMedium">Frontend Developer</Text>*/}
        </Card.Content>

        <Card.Actions>
          <Button mode="contained">Follow</Button>
        </Card.Actions>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  card: {
    padding: 10,
  },
});
