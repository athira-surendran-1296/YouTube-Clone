import React from 'react';
import Button from './Button';
import { BTN_NAMES_LIST } from '../utils/constants';

const ButtonList = () => {

  return (
    <div className='flex p-1 w-full justify-center'>
      <div className='flex p-1 gap-1 overflow-x-auto w-[22rem] md:w-[40rem]'>
        {BTN_NAMES_LIST.map((btn) => (
          <Button key={btn.id} name={btn.name} />
        ))}
      </div>
    </div>
  );
}

export default ButtonList;
