import React from 'react'
import cl from '../styles/Control.module.css'


const Modalochka = ({ children, visible, setVisible }) => {

  const rootClases = [cl.myControl]
  if (visible) {

    rootClases.push(cl.active,cl.loader);

  }
  

  function yobana() {
    setVisible(false)
  }
  return (
    <div className={rootClases.join(' ')} onClick={yobana}>
      <div className={cl.myControlContent} onClick={(e)=> e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};
export default Modalochka;