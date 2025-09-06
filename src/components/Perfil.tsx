import React from 'react';
import { View, Image } from 'react-native';
import perfil from '../../assets/icon.png'
export function Perfil() {
  return (
    <>
        <Image 
        source={perfil}
        style ={{
          resizeMode: 'contain',
          height: 180}}
        />
            

    </>
  );
}