import { useVideoPlayer, VideoView } from 'expo-video';
import { StyleSheet, View } from 'react-native';

export default function VideoPlayerScreen() {

  const video = "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8"

  const player = useVideoPlayer(
    video,
    (player) => {
      player.loop = true;   //loops video
      player.play();        //autoplays video
    }
  );

  return (
    <View style={styles.container}>
      <VideoView
        player={player}
        style={{ width: '100%', height: '100%' }}
        nativeControls={true}
        allowsFullscreen={true}
        contentFit="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
