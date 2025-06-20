import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { MD3LightTheme, PaperProvider } from 'react-native-paper';
import 'react-native-reanimated';


import { useColorScheme } from '@/hooks/useColorScheme';

//SplashScreen.preventAutoHideAsync();

export default function RootLayout() {

  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }

  const lightTheme = {
    ...MD3LightTheme,
    colors: {
      ...MD3LightTheme.colors,
      background: '#ffffff',
      surfaceVariant: '#ffffff',
    },
  };

  return (
    <PaperProvider theme={lightTheme}>
      <Stack screenOptions={{headerShown: false}}>
        <Stack.Screen name="login" />
        <Stack.Screen name="index" />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="auto" />
    </PaperProvider>
  );
}
