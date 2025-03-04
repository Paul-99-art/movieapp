import React from 'react';
import { WebView } from 'react-native-webview';

const WebScreen = ({ route }) => {
  const { url } = route.params;
  return <WebView source={{ uri: url }} />;
};

export default WebScreen;