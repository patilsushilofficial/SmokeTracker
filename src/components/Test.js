import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

const Test = () => {
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient>
        <Text style={{fontSize: 30, color: 'black'}}>Test</Text>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default Test;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
