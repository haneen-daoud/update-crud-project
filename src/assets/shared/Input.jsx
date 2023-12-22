import React from 'react'
import '../components/css/creat-input.css'
export default function Input({id,type,name,value,titel,getUser,cust,errors}) {
  return (
    <div className="mb-3 form-group">
    <label htmlFor={id} className={`form-label ${cust}`}>{titel}</label>
    <input type={type} className="form-control" id={id} name={name} value={value} onChange={getUser} />
    {errors[name]&&<p className=' fs-6'>{errors[name]}</p>}
  </div>
  )
}