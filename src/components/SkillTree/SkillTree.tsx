import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { styles } from './SkillTreeStyles';

// 1. Define a interface para a skill
interface Skill {
  name: string;
  level: number;
}

// 2. Define as props do componente
interface SkillTreeProps {
  skills: Skill[];
}

export function SkillTree({skills }: SkillTreeProps) {
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Árvore de Habilidades</Text>
      {skills.map((skill, index) => (
        <View key={index} style={styles.skillContainer}>
          <Text style={styles.skillName}>{skill.name}</Text>
          <View style={styles.levelBar}>
            {Array.from({ length: 5 }).map((_, i) => (
              <View
                key={i}
                style={[
                  styles.levelBlock,
                  { backgroundColor: i < skill.level ? '#2ecc71' : '#ccc' },
                ]}
              />
            ))}
          </View>
        </View>
      ))}
    </View>
  );
}