import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.2)', // Semi-transparent background for the blur effect
    borderRadius: 15,
    padding: 20,
    margin: 20,
    backdropFilter: 'blur(15px)', // Add blur effect
    shadowColor: '#fff', // White shadow for the glow
    shadowOpacity: 0.8,
    shadowRadius: 20,
    elevation: 10, // Shadow on Android
  },
  backgroundImage: {
    flex: 1, // Occupy the entire screen
    resizeMode: 'cover', // Ensure the image covers the whole area
    justifyContent: 'center', // Center the content vertically
    alignItems: 'center', // Center the content horizontally
  },
  logoContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#D9D9D9',
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#fff', // White shadow for glow effect
    shadowOpacity: 0.8,
    shadowRadius: 10,
  },
  logoText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#000',
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    marginBottom: 10,
    width: 300,
  },
  socialButtonText: {
    fontSize: 16,
    marginLeft: 10,
    color: '#000',
  },
  separator: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#ccc',
  },
  orText: {
    marginHorizontal: 10,
    color: '#888',
    fontSize: 14,
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    paddingHorizontal: 10,
    width: 300,
    backgroundColor: '#fff',
    shadowColor: '#fff', // Glow effect for input borders
    shadowOpacity: 0.8,
    shadowRadius: 10,
  },
  button: {
    backgroundColor: '#2196F3',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    width: 300,
    shadowColor: '#fff', // White shadow for glow effect
    shadowOpacity: 0.8,
    shadowRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  footer: {
    marginTop: 20,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 14,
    color: '#000',
  },
  footerLink: {
    fontWeight: 'bold',
    color: '#000',
    textDecorationLine: 'underline',
  },
});

export default styles;
