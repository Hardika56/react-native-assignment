import Ionicons from '@expo/vector-icons/Ionicons';
import { router, Stack } from 'expo-router';
import { TouchableOpacity } from 'react-native';

export default function HomeLayout() {
  return (
    <Stack
        screenOptions={{
            headerStyle: {
            backgroundColor: '#030712',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
            fontWeight: 'bold',
            },
        }}
    > 
        <Stack.Screen name="index" options={{ title: "Home", headerBackVisible: false }} />
        <Stack.Screen name="webview" options={{ title: "Webview",headerRight:(() => {
          return (
            <TouchableOpacity
              onPress={() => router.navigate('/videoPlayer')}
              activeOpacity={0.7}
            >
              <Ionicons name="play-circle" size={28} color="white" />
            </TouchableOpacity>
          )
        })  }} />
        <Stack.Screen name="videoPlayer" options={{ title: "Video Player" }} />
    </Stack>
  );
}
