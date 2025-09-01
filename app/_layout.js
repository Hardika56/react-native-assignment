import * as Notifications from "expo-notifications";
import { router, Stack } from "expo-router";
import { useEffect } from "react";

export default function RootLayout() {

  useEffect(() => {
    // listener to listen to notification taps
    // notification click will take you to video player screen
    const sub = Notifications.addNotificationResponseReceivedListener((response) => {
      const data = response.notification.request.content.data;
      if (data?.screen === "videoPlayer") {
        router.push("/videoPlayer");
      }
    });

    return () => sub.remove();
  }, []);

  return <Stack screenOptions={{headerShown: false}}> 
      <Stack.Screen name="(home)" />
  </Stack>
}
