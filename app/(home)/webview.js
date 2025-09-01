import * as Notifications from "expo-notifications";
import { StyleSheet, View } from 'react-native';
import WebView from 'react-native-webview';
import CustomButton from './components/CustomButton';

export default function WebviewScreen() {

  // injected js to remove footer from webview
  const jsToRemoveFooter = `
    (function() {
      const footer = document.querySelector('footer');
      if (footer) {
        footer.remove();
      }
    })();
    true; 
  `

  // trigger notification when button clicked
  const triggerNotification = async (text) => {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "Hello",
        body: text,
        data: { screen: "videoPlayer" },
      },
      trigger: { seconds: 4 }, // show in 4 seconds
    });
  }

  return (
    <View style={styles.container}> 
      <WebView
        source={{uri: "https://houseofedtech.in/"}}
        style={{ flex: 1 }}
        injectedJavaScript={jsToRemoveFooter}
        onLoadEnd={() => {
          triggerNotification("Check out the website")
        }}
      />
      <View style={styles.bottomButtonsView}>
          <CustomButton
              title={"Button 1"}
              onPress={() => {triggerNotification("Button 1 Clicked")}}
              style={styles.button}
              textStyle={styles.buttonText}
          />
          <CustomButton
              title={"Button 2"}
              onPress={() => {triggerNotification("Button 2 Clicked")}}
              style={styles.button}
              textStyle={styles.buttonText}
          />
      </View>      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#030712"
  },
  bottomButtonsView: {
    flexDirection: "row",
    backgroundColor: "#030712",
    justifyContent: "space-around",
    marginBottom: 24,
    paddingTop: 12
  },
  button:{
    backgroundColor: "#fff",
    width: "42%",
    paddingVertical: 8,
    alignItems: "center",
    borderRadius: 12
  },
  buttonText: {
    color: "#030712",
    fontSize: 16
  },
  errorContainer: { 
    flex: 1, 
    justifyContent: "center", 
    alignItems: "center"
  },
  loading: { 
    position: "absolute", 
    top: "50%", 
    left: "50%"
  }
});
