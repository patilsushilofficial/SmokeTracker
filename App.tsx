import React from 'react';
import {StyleSheet, StatusBar, View} from 'react-native';
import {MD3LightTheme as DefaultTheme, PaperProvider} from 'react-native-paper';
import Toast from 'react-native-toast-message';
import ApplicationNavigator from './src/Navigators/Application';
const theme = {
  ...DefaultTheme,
  // Specify custom property in nested object
  colors: {
    ...DefaultTheme.colors,
  },
};

function App(): React.JSX.Element {
  return (
    <>
      <PaperProvider theme={theme}>
        <View style={styles.container}>
          <StatusBar barStyle={'dark-content'} backgroundColor={'#f5f5f5'} />
          <ApplicationNavigator />
          <Toast />
        </View>
      </PaperProvider>
    </>
  );
}
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EFF4FF',
  },
});
