import { View, StyleSheet } from "react-native";
import { Button, Card, Text } from "react-native-paper";
import * as Sentry from '@sentry/react-native';

function HomeScreen() {

  // 👇 Changed to captureException — more reliable in Expo
  const triggerError = () => {
    const error = new Error('Test error — Hello Sentry! 🚨');
    Sentry.captureException(error);
    console.log('Error sent to Sentry!'); // confirm in terminal
  };

  const triggerManualLog = () => {
    Sentry.captureMessage('This is a manual test message from HomeScreen');
    console.log('Message sent to Sentry!'); // confirm in terminal
  };

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
          <Text variant="titleLarge">Von Juztis</Text>
          <Text variant="bodyMedium">Frontend Developer</Text>
        </Card.Content>

        <Card.Actions>
          <Button mode="contained">Follow</Button>

          <Button
            mode="contained"
            buttonColor="red"
            onPress={triggerError}
          >
            Trigger Error
          </Button>

          <Button
            mode="outlined"
            onPress={triggerManualLog}
          >
            Send Log
          </Button>
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

export default HomeScreen;