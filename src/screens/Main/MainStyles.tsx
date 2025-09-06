// screens/MainStyles.js
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: { 
    flexGrow: 1,
    alignItems: 'center', 
    justifyContent: 'center',
    paddingVertical: 40,
    backgroundColor: '#f9f9f9',
  },

  image: { 
    width: 160, 
    height: 160, 
    borderRadius: 80, 
    marginBottom: 25,
    borderWidth: 2,
    borderColor: '#ccc',
  },

  name: { 
    fontSize: 26, 
    fontWeight: 'bold', 
    marginBottom: 15,
    color: '#2c3e50',
  },

  link: { 
    color: '#1e90ff', 
    fontSize: 18, 
    marginBottom: 12,
    textDecorationLine: 'underline',
  },

  button: {
    marginTop: 35,
    backgroundColor: '#2ecc71',
    paddingHorizontal: 30,
    paddingVertical: 12,
    borderRadius: 8,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },

  buttonText: { 
    color: '#fff', 
    fontSize: 16,
    fontWeight: '600',
  },
});