import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const StatsPanel = () => {
  return (
    <View style={styles.bottomContainer}>
      <View style={styles.textContainer}>
        <Text style={styles.textTitle}>Statistics</Text>
        <Text style={styles.textCorrection}>Correct/Incorrect</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomContainer: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'space-between',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  textContainer: {
    margin: 20,
    marginBottom: 0,
  },
  textTitle: {
    fontSize: 28,
    color: '#051E47',
    fontWeight: 'bold',
  },
  textCorrection: {
    fontSize: 28,
    color: '#3F6900',
    fontWeight: 'bold',
  }
});

export default StatsPanel;