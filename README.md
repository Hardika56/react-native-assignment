# React Native Assignment (Expo)

# Overview
   This is an Expo React Native app built as part of an assignment.
   The app demonstrates embedding a website, handling local notifications, and playing an HLS video stream, with navigation between pages.

# Features
   1. WebView Page
      Embeds a website inside the app.
      Two buttons are placed below the WebView.
      Each button triggers a different local notification with a short delay.

   2. Notifications
      Implemented using Expo Notifications
      Two distinct messages are scheduled locally.
      Local Notification triggered when webpage loads.

   3. Video Player Page
      Plays an HLS video stream using expo-video
      Test URL used: https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8
      
   4. Navigation
      Navigation handled with expo router
      Two main screens:
         - WebView with Notifications
         - Video Player

# Tech Stack
   Expo
   React Native
   expo-webview
   expo-notifications
   expo-video
   expo-router

# Implementation
   - Used expo-webview for embedding website (House of Edtech) since it is the standard way in Expo.
   - Notifications are scheduled with a small delay using Notifications.scheduleNotificationAsync().
   - HLS video playback using Expo’s video player : expo-video
   - Navigation between Webview and Video player page
   - Notification click will take you to video player screen

