import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: { 
    width: '100%', 
    marginTop: 20 
  },
  title: { 
    fontSize: 20, 
    fontWeight: 'bold',
     marginBottom: 15, 
     textAlign: 'center' 
    },
  skillContainer: { 
    marginBottom: 15, 
    paddingHorizontal: 10 
  },
  skillName: { 
    fontSize: 16, 
    marginBottom: 5 
  },
  levelBar: { 
    flexDirection: 'row' 
  },
  levelBlock: {
    width: 20,
    height: 10,
    marginRight: 5,
    borderRadius: 2,
  },
});