import React from 'react';
import { View, Text, Image, TouchableOpacity, Linking, ScrollView } from 'react-native';
import { styles } from './MainStyles';
import { Perfil } from '../../components/Perfil';

export function Main({ navigation }: any) {
  const links = [
    { label: 'LinkedIn', url: 'https://linkedin.com/in/seu-usuario' },
    { label: 'GitHub', url: 'https://github.com/seu-usuario' },
    { label: 'Email', url: 'mailto:seuemail@exemplo.com' },
  ];
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Perfil/>
      

      <Text style={styles.name}>Arthur Cezar</Text>

      {links.map((link, index) => (
        <TouchableOpacity key={index} onPress={() => Linking.openURL(link.url)}>
          <Text style={styles.link}>{link.label}</Text>
        </TouchableOpacity>
      ))}

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Habilidades')}>
        <Text style={styles.buttonText}>Ver Habilidades</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}