import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: { 
    alignItems: 'center', 
    padding: 20 
  },
  image: { 
    width: 150, 
    height: 150, 
    borderRadius: 75, 
    marginBottom: 20 
  },
  name: { 
    fontSize: 24, 
    fontWeight: 'bold', 
    marginBottom: 20 
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