import React from 'react';
import Button from './Button';

const ButtonList = () => {
  const btnNamesList = ['All', 'Live', 'Games', 'Coding', 'Marvel', 'Cooking', 'Comedy', 'Music', 'Travel', 'Chess', 'Sports', 'Movies'];

  return (
    <div className='flex gap-3 overflow-x-auto p-3 scrollbar-hidden'>
          {
            btnNamesList && btnNamesList.map(btn => <Button key={btn} name={btn}/>)
          }
    </div>
  );
}

export default ButtonList;
