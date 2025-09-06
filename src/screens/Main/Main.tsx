import React from 'react';
import { View, Text, Image, TouchableOpacity, Linking, ScrollView } from 'react-native';
import { styles } from './MainStyles';
import { Perfil } from '../../components/Perfil';


export function Main({ navigation }: any) {
  const links = [
    { label: 'LinkedIn', url: 'https://linkedin.com/in/arthur-cezar-28b45b266' },
    { label: 'GitHub', url: 'https://github.com/UpSnow' },
    { label: 'Email', url: 'mailto:Arthurcel14@gmail.com' },
    { label: 'Instagram', url: 'https://www.instagram.com/arthurjcezar/' },
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

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Skills')}>
        <Text style={styles.buttonText}>Ver Skills</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}