import { useVideoPlayer, VideoView } from 'expo-video';
import { Button, StyleSheet, View } from 'react-native';

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
        nativeControls={false}
        allowsFullscreen={true}
        contentFit="contain"
      />
      <View style={styles.controls}>
        <Button title="Play" onPress={() => player.play()} />
        <Button title="Pause" onPress={() => player.pause()} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#030712"
  },
  controls: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 20,
    position: "absolute",
    bottom: 50
  },
});
