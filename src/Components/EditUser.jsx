import React, { useEffect, useState, useCallback } from 'react';
import { editUser, getallUsers } from '../service/api';
import { useHistory, useParams } from 'react-router-dom';

const initialValue = {
    name: "",
    username: "",
    email: "",
    phone: "",
}

const EditUser = () => {

    const [user, setUser] = useState(initialValue);
    const { name, username, email, phone } = user;

    const { id } = useParams();

    const history = useHistory();

    const loadUserData = useCallback(async () => {
        const response = await getallUsers(id);
        setUser(response.data);
    }, [id]);

    useEffect(() => {
        loadUserData();
    }, [loadUserData]);

    const onValueChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }

    const editUserDetails = async () => {
        await editUser(id, user);
        history.push('/all');
    }

    return (
        <div className="max-w-lg mx-auto my-10 p-6 bg-white rounded shadow-md">
            <h2 className="text-2xl font-bold text-center mb-6">Update User Details</h2>
            <div className="space-y-4">
                <div>
                    <label className="block text-gray-700">Name</label>
                    <input
                        type="text"
                        name="name"
                        value={name}
                        onChange={onValueChange}
                        className="w-full mt-1 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                </div>
                <div>
                    <label className="block text-gray-700">User Name</label>
                    <input
                        type="text"
                        name="username"
                        value={username}
                        onChange={onValueChange}
                        className="w-full mt-1 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                </div>
                <div>
                    <label className="block text-gray-700">Email Address</label>
                    <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={onValueChange}
                        className="w-full mt-1 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                </div>
                <div>
                    <label className="block text-gray-700">Phone Number</label>
                    <input
                        type="tel"
                        name="phone"
                        value={phone}
                        onChange={onValueChange}
                        className="w-full mt-1 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                </div>
                <div className="flex justify-center space-x-4">
                    <button
                        onClick={editUserDetails}
                        className="bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                        Update User
                    </button>
                    <button
                        onClick={() => history.push("/all")}
                        className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    )
}

export default EditUser;