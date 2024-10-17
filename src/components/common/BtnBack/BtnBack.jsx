import React from 'react';
import { Btn } from './BtnBack.styled';
import icon from '../../../imgs/left-arrow.png'
export default function BtnBack() {
  return (
    <Btn href='/list'>
      <img src={icon} alt='left arrow' width={18}/>
      Back home
    </Btn>
  );
}
