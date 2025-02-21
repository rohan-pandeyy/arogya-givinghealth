import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import ModelViewer from '../components/ModelViewer';
import StatsPanel from '../components/StatsPanel';

const KneeJoint = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ModelViewer />
      <StatsPanel />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F7FB',
  },
});

export default KneeJoint;