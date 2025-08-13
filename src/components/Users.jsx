import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router';
import Swal from 'sweetalert2';

const Users = () => {
    const initialUsers = useLoaderData();
    console.log(initialUsers);
    const [users, setUsers] = useState(initialUsers);

    const handleDelete = (id) => {
      console.log(id);
     

Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  if (result.isConfirmed) {
    fetch(`http://localhost:5000/users/${id}`, {
  method : "DELETE",
 })
 .then(res => res.json())
 .then(data => {
  console.log("data after delete", data);
  if(data.deletedCount){
     Swal.fire({
                    title: "Deleted!",
                    text: "Your Coffee has been deleted.",
                    icon: "success"
                });
  }

  const remainingUser = users.filter(user=> user._id !== id);
  setUsers(remainingUser);
 })
  }
});
    }
    return (
        <div>
            <h2 className='text-3xl font-bold'> Users : {users.length}</h2>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
         No
        </th>
        <th>Name</th>
        <th>Email</th>
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
          {user.email}
          <br />
          <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
        </td>
        <td>{user.number}</td>
        <th>
          <button className="btn btn-ghost btn-xs">V</button>
          <Link to={`update/${user._id}`}><button className="btn btn-ghost btn-xs">E</button></Link>
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