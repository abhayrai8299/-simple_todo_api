import React from 'react'

const Input = ({toggle,text,setText}) => {
    const Changehandler = (e) => {
          e.preventDefault();
          setText(e.target.value);
        };
  return (
    <div>
         <input type="text" className={toggle===true?"addred":"addblank"} onChange={Changehandler} value={text} />
    </div>
  )
}

export default Input