import { router } from 'expo-router';
import { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import CustomButton from './components/CustomButton';
import { registerForPushNotificationsAsync } from './util/notification_util';

export default function HomeScreen() {

  useEffect(() => {
    // request notification permission
    registerForPushNotificationsAsync();
  }, []);

  return (
    <View style={styles.container}>
      <CustomButton
          title="Visit House of Edtech" 
          onPress={() => router.navigate('/webview')} 
      />
      <CustomButton
          title="Go to Video Player" 
          onPress={() => router.navigate('/videoPlayer')} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16
  },
});
