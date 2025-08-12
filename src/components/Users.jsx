import React, { useState } from 'react';
import { useLoaderData } from 'react-router';

const Users = () => {
    const initialUsers = useLoaderData();
    console.log(initialUsers);
    const [users, setUsers] = useState(initialUsers);

    const handleDelete = (id) => {

    }
    return (
        <div>
            <h2 className='text-3xl font-bold'> Users : {initialUsers.length}</h2>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
         No
        </th>
        <th>Name</th>
        <th>Job</th>
        <th>Phone</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
    
        {users.map((user, index )=>  <tr key={user._id}>
        <th>
          {index + 1}
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src={user.photoUrl} />
              </div>
            </div>
            <div>
              <div className="font-bold">{user.name}</div>
              <div className="text-sm opacity-50">{user.address}</div>
            </div>
          </div>
        </td>
        <td>
          Zemlak, Daniel and Leannon
          <br />
          <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
        </td>
        <td>{user.number}</td>
        <th>
          <button className="btn btn-ghost btn-xs">V</button>
          <button className="btn btn-ghost btn-xs">E</button>
          <button className="btn btn-ghost btn-xs" onClick={()=> handleDelete(user._id  )}>X</button>
        </th>
      </tr>)}
  
    </tbody>
  
  </table>
</div>
        </div>
    );
};

export default Users;