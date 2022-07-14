import React from 'react'
import cl from './MyModule/MyModal.module.css'
import { useContext } from 'react';
import { AuthContext } from '../context';

const MyModal = ({children,visible,setVisible}) =>{
  let {setisAuth} = useContext(AuthContext);
  const rootClases = [cl.myModal]
  if(visible){
    rootClases.push(cl.active);
  } 
  function yobana(){
    setVisible(false)
    setisAuth(false)
  }
    return(
        <div className={rootClases.join(' ')} onClick={yobana}>
        <div className={cl.myModalContent} onClick={(e)=>e.stopPropagation()}>
         {children}
        </div>
        </div>
    );
};
export default MyModal;