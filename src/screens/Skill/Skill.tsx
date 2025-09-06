import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { styles } from './SkillStyles';

import {SkillTree} from '../../components/SkillTree/SkillTree';
import { Perfil } from '../../components/Perfil';

export  function Skill({ navigation }: any) {
  const skills = [
    { name: 'JavaScript', level: 5 },
    { name: 'React Native', level: 4 },
    { name: 'Node.js', level: 4 },
    { name: 'TypeScript', level: 3 },
    { name: 'UI/UX Design', level: 2 },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Perfil/>
      <Text style={styles.name}>Arthur Cezar</Text>
      <SkillTree skills={skills} />
      
       <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Main')}>
              <Text style={styles.buttonText}>Ver Skills</Text>
            </TouchableOpacity>
    </ScrollView>
  );
}
