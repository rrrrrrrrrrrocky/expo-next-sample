import React from "react";
import { Dimensions, SafeAreaView, StyleSheet } from "react-native";
import { WebView } from 'react-native-webview';

const deviceHeight = (Dimensions.get('window').height);
const deviceWidth = Dimensions.get('window').width;

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
    <WebView
        style={styles.webview}
        source={{ uri: 'https://market.tpirates.com' }} />
  </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  webview: {
    flex: 1,
    width: deviceWidth,
    height: deviceHeight,
  },
});