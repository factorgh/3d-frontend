import React from 'react'
import state from '../store'
import { useSnapshot } from 'valtio'

const CustomButton = ({type,title, customStyles, handleClick}) => {
    const snap = useSnapshot(state);

    const generateStyle = ()=>{
        if (type === "filled"){
            return {
                backgroundColor: snap.color,
                color:'#ffff'
            }
        }
    }
  return (
    <button
    className={`px-2 py-1.5 flex-1 rounded-md ${customStyles}`}
    style ={generateStyle(type)}
    onClick={handleClick}
    >
{title}
    </button>
  )
}

export default CustomButton