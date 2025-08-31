import * as Notifications from "expo-notifications";
import { Platform } from "react-native";

/**
 * Notification util
 * 1. to handle received notifications
 * 2. request permission to send notification
 * 3. send notification, if permission granted
 */

// handles how notifications behave when received
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,   
    shouldPlaySound: true,   
    shouldSetBadge: true,   // change app icon badge number
  }),
});

// function to request permissions & setup Android channel
export async function registerForPushNotificationsAsync() {
  // Request notification permissions
  const { status } = await Notifications.requestPermissionsAsync();

  if (status !== 'granted') {
    alert('Permission for notifications not granted!');
    return;
  }

  // For Android, define a channel
  if (Platform.OS === 'android') {
    await Notifications.setNotificationChannelAsync('default', {
      name: 'Default Channel',
      importance: Notifications.AndroidImportance.MAX, // High priority
      sound: true
    });
  }
}