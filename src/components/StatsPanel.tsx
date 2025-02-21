import React, { useEffect } from 'react';
import {View, Text, StyleSheet} from 'react-native';
import * as THREE from 'three';

const StatsPanel = () => {
  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 5;

    const animate = function () {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      renderer.dispose();
    };
  }, []);

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