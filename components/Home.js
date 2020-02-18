import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function Home() {
  return (
    <View style={styles.container}>
      <div>
        <Text style={styles.headingStyle}>
          Welcome to the Star Wars Info App
        </Text>
        <Separator />
      </div>
    </View>
  )
}

function Separator() {
  return <View style={styles.separator} />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
    backgroundColor: 'gray',
  },

  headingStyle: {
    color: 'white',
    fontSize: 40,
  },

  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});