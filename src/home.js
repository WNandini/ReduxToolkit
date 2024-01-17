import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {deleteUser} from './userReducer';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
    const user = useSelector((state) => state.users)
    const dispatch = useDispatch();
    const handleDelete = (id) => {
        dispatch(deleteUser(id))
    }
    const handleUpdateUser = (id) => {
        navigate('/update',{state: {updateId: id}})
    }
    return(
        <div>
            <Link to='/create'>
                <button className="btn btn-outline-success">Create</button>
            </Link>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col" className=".text-danger">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {user.map((item, index) => 
                        <tr>
                            <th scope="row">{item.id}</th>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>
                                <button className="btn btn-outline-info" onClick={() => handleUpdateUser(item.id)}>
                                    Update 
                                </button>
                                <Link to='#'>
                                    <button className="btn btn-outline-danger mx-3" onClick={() => handleDelete(item.id)}> 
                                        Delete 
                                    </button>
                                </Link>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default Home; 