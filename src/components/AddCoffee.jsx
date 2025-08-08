import React from 'react';
import Swal from 'sweetalert2';

const AddCoffee = () => {

    const handleAddCoffee = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const newCoffee = Object.fromEntries(formData.entries());
        

        // Send data to the server

        fetch('http://localhost:5000/coffees', {
            method : "POST",
            headers : {
                "content-type" : "application/json",
            },
            body : JSON.stringify(newCoffee)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId)
            console.log('after adding data to db' ,data);
            
            Swal.fire({
            title: "Coffee added successfully ",
            icon: "success",
            draggable: true
            });
            form.reset();
        })
    }

    return (
        <div className='p-24'>
           <div className='p-12 text-center space-y-7'>
             <h1 className="text-6xl">Add Coffee</h1>
            <p>
                It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.
            </p>

            <form onSubmit={handleAddCoffee}>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                       
                        <label className="label">Name</label>
                        <input type="text" name='name' className="input w-full" placeholder="Coffee Name" />

                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                       
                        <label className="label">Quantity</label>
                        <input type="text" name='quantity' className="input w-full" placeholder="Quantity " />

                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                       
                        <label className="label">Supplier</label>
                        <input type="text" name='supplier' className="input w-full" placeholder="Supplier Name" />

                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                       
                        <label className="label">Price</label>
                        <input type="text" name='price' className="input w-full" placeholder="Price" />

                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                       
                        <label className="label">Category</label>
                        <input type="text" name='category' className="input w-full" placeholder="Category Name" />

                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                       
                        <label className="label">Details</label>
                        <input type="text" name='Details' className="input w-full" placeholder="Details" />

                    </fieldset>
                </div>
                
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4 my-6">
                       
                        <label className="label">PhotoUrl</label>
                        <input type="text" name='photoUrl' className="input w-full" placeholder="PhotoUrl" />

                    </fieldset>

                    <input type="submit" value="Add Coffee" className='btn w-full' />
                 
            </form>
           </div>
        </div>
    );
};

export default AddCoffee;