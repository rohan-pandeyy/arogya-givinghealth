import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 30,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 12,
    borderRadius: 5,
    marginBottom: 10,
    alignItems: 'center',
  },
  signInButton: {
    backgroundColor: '#2196F3',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default styles;
