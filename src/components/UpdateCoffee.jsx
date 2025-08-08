import React from 'react';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';

const UpdateCoffee = () => {
    const coffee = useLoaderData();
    const {name, quantity, supplier, Details, price, category, photoUrl, _id} = coffee;

    const handleUpdateCoffee = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const updatedCoffee = Object.fromEntries(formData.entries());
      

        //send updated Coffee to the database

        fetch(`http://localhost:5000/coffees/${_id}`, {
            method : "PUT",
            headers : {
                "content-type" : "application/json"
            },
            body : JSON.stringify(updatedCoffee)
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount){
                    Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Coffee Updated Successfully",
                showConfirmButton: false,
                timer: 1500
            });
            }
           
        })

    }

    return (
        <div> 
             <div className='p-24'>
           <div className='p-12 text-center space-y-7'>
             <h1 className="text-6xl font-bold">Update Coffee</h1>
           

            <form onSubmit={handleUpdateCoffee}>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                       
                        <label className="label">Name</label>
                        <input type="text" name='name' defaultValue={name} className="input w-full" placeholder="Coffee Name" />

                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                       
                        <label className="label">Quantity</label>
                        <input type="text" name='quantity'defaultValue={quantity} className="input w-full" placeholder="Quantity " />

                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                       
                        <label className="label">Supplier</label>
                        <input type="text" name='supplier' defaultValue={supplier} className="input w-full" placeholder="Supplier Name" />

                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                       
                        <label className="label">Price</label>
                        <input type="text" name='price' defaultValue={price} className="input w-full" placeholder="Price" />

                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                       
                        <label className="label">Category</label>
                        <input type="text" name='category' defaultValue={category} className="input w-full" placeholder="Category Name" />

                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                       
                        <label className="label">Details</label>
                        <input type="text" name='details' defaultValue={Details} className="input w-full" placeholder="Details" />

                    </fieldset>
                </div>
                
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4 my-6">
                       
                        <label className="label">PhotoUrl</label>
                        <input type="text" name='photoUrl' defaultValue={photoUrl} className="input w-full" placeholder="PhotoUrl" />

                    </fieldset>

                    <input type="submit" value="Update Coffee" className='btn w-full' />
                 
            </form>
           </div>
        </div>
        </div>
    );
};

export default UpdateCoffee;