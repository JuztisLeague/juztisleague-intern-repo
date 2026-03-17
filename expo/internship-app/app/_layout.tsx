import { DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { Provider as PaperProvider } from "react-native-paper";
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';
import * as Sentry from '@sentry/react-native';

Sentry.init({
  dsn: 'https://cab31d143e153c325cfda65575eaf7fe@o4511058590040064.ingest.us.sentry.io/4511058613305344',
  tracesSampleRate: 1.0, // 👈 add this — required for events to be sent
  enableLogs: true,
  debug: true,
  enabled: true, // 👈 add this — forces Sentry to be active
});

export const unstable_settings = {
  anchor: '(tabs)',
};

function RootLayout() {
  return (
    <PaperProvider>
      <ThemeProvider value={DefaultTheme}>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="modal" options={{ presentation: 'modal', title: 'Modal' }} />
        </Stack>
        <StatusBar style="auto" />
      </ThemeProvider>
    </PaperProvider>
  );
}

export default Sentry.wrap(RootLayout);