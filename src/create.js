import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from './userReducer';
import { useNavigate } from 'react-router-dom';

const Create = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const users = useSelector((state) => state.users)

  const handleName = (e) => {
    setName(e.target.value)
  }

  const handleEmail = (e) => {
    setEmail(e.target.value)
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch(addUser({id: users[users.length-1].id+1,name , email }))
    const a = '12321'
    const b = a.split().reverse()
    console.log('b',b)
    navigate('/');
  }
 
  return (
    <form onSubmit={handleFormSubmit}>
      <input placeholder='Name' onChange={handleName}/>
      <input placeholder='Email' onChange={handleEmail}/>
      <button>
        Submit
      </button>
    </form>
  )
}

export default Create