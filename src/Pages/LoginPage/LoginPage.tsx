import React, { useState } from 'react';
import { TextInput, Text, View, Alert, TouchableOpacity } from 'react-native';
import { auth } from '../../../firebaseConfig';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import styles from './styles';
import { FontAwesome } from '@expo/vector-icons';
import { ImageBackground } from 'react-native';
import { BlurView } from 'expo-blur';
import backgroundImage from '../../../assets/leaves.jpg';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState<null | { email: string }>(null);

  const handleSignUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setUser({ email: userCredential.user.email || '' });
        Alert.alert('Success', 'Account created successfully!');
      })
      .catch((error) => {
        console.log('Sign Up Error:', error.message);
        Alert.alert('Error', error.message);
      });
  };

  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setUser({ email: userCredential.user.email || '' });
        Alert.alert('Success', 'Logged in successfully!');
      })
      .catch((error) => {
        console.log('Sign In Error:', error.message);
        Alert.alert('Error', error.message);
      });
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUser(null);
        Alert.alert('Success', 'Signed out successfully!');
      })
      .catch((error) => {
        console.log('Sign Out Error:', error.message);
        Alert.alert('Error', error.message);
      });
  };

  return (
    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
    <BlurView intensity={50} style={styles.container}>
      {user ? (
        <>
          <Text>Welcome, {user.email}</Text>
          <TouchableOpacity style={styles.button} onPress={handleSignOut}>
            <Text style={styles.buttonText}>Sign Out</Text>
          </TouchableOpacity>
        </>
      ) : (
        <>
          <View style={styles.logoContainer}>
            <Text style={styles.logoText}>Logo</Text>
          </View>
          <Text style={styles.title}>Sign in to your account</Text>
          <TextInput
            placeholder="Email address"
            value={email}
            onChangeText={setEmail}
            style={styles.input}
          />
          <TextInput
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            style={styles.input}
          />
          <TouchableOpacity style={styles.button} onPress={handleSignIn}>
            <Text style={styles.buttonText}>Sign in</Text>
          </TouchableOpacity>
          <View style={styles.separator}>
            <View style={styles.line} />
            <Text style={styles.orText}>Or continue with</Text>
            <View style={styles.line} />
          </View>
          <TouchableOpacity style={styles.socialButton}>
            <FontAwesome name="google" size={20} color="black" />
            <Text style={styles.socialButtonText}>Sign in with Google</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <FontAwesome name="apple" size={20} color="black" />
            <Text style={styles.socialButtonText}>Sign in with Apple</Text>
          </TouchableOpacity>
          <View style={styles.footer}>
            <Text style={styles.footerText}>
              No existing account?{' '}
              <Text style={styles.footerLink} onPress={handleSignUp}>
                Create an account
              </Text>
            </Text>
          </View>
        </>
      )}
    </BlurView>
    </ImageBackground>
  );
};

export default LoginPage;
