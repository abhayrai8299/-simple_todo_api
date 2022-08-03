import React from 'react'

const Input = ({toggle,text,setText}) => {
    const Changehandler = (e) => {
          e.preventDefault();
          setText(e.target.value);
        };
        console.log("Input")
  return (
    <div>
         <input type="text" className={toggle===true?"addred":"addblank"} onChange={Changehandler} value={text} />
    </div>
  )
}

export default Input