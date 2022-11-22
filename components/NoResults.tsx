import React from 'react'
import { NextPage } from 'next'
import { MdOutlineVideocamOff } from 'react-icons/md';
import { IoPlanetOutline } from 'react-icons/io5'
interface IProps {
  text: string;
}
const NoResults = ({ text }: IProps) => {
  return (
    <div className='flex flex-col justify-center items-center h-full w-full'>
      <p className='text-8xl'>
        {text.includes("unexplored") ?
          <IoPlanetOutline /> :
          <MdOutlineVideocamOff />}
      </p>
      <p className='text-2xl text-center'>{text}</p>
    </div>
  )
}

export default NoResults