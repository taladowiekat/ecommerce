import React from 'react'

function Inputs({type='text',name,id,title,onChange,value,errors,onBlur,touched}) {
  console.log(touched);
  return (
    <>
    <div className='input-group mb-3'>
        <label htmlFor='id'>{title}</label>
        <input type={type} className="form-control" id={id} name={name} onChange={onChange} value={value} onBlur={onBlur} />
        { touched[name]&&errors[name]&&<p className='text text-danger'>{errors[name]}</p>}
    </div>

    </>
  )
}

export default Inputs