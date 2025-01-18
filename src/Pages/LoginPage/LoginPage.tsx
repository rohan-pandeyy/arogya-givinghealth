import React, { useState } from 'react';
import { TextInput, Text, View, Alert, TouchableOpacity } from 'react-native';
import { auth } from '../../../firebaseConfig';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import styles from './styles';

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
    <View style={styles.container}>
      {user ? (
        <>
          <Text>Welcome, {user.email}</Text>
          <TouchableOpacity style={styles.button} onPress={handleSignOut}>
            <Text style={styles.buttonText}>Sign Out</Text>
          </TouchableOpacity>
        </>
      ) : (
        <>
          <TextInput
            placeholder="Email"
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
          <TouchableOpacity style={styles.button} onPress={handleSignUp}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.signInButton]} onPress={handleSignIn}>
            <Text style={styles.buttonText}>Sign In</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

export default LoginPage;
