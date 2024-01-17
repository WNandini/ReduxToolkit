import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'; 

const UpdateUser = () => {
    const location = useLocation();
    const navigate = useNavigate()
    const updateUser = useSelector((state) => state.users);
    const dispatch = useDispatch()
    const currentId = location.state.updateId;
    const [name, setName] = useState(updateUser[currentId-1].name);
    const [email, setEmail] = useState(updateUser[currentId-1].email);

    const handleName = (e) => {
        setName(e.target.value)
    }

    const handleUpdate = (e) => {
        e.preventDefault();
        navigate('/')
    }
    return (
        <div>
            <input value={name} onChange={handleName}/>
            <button onClick={handleUpdate}>Save</button>
        </div>
    )
}

export default UpdateUser; 