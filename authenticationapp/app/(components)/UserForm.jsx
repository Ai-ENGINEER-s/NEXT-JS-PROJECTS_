// "use client";
// import React, { useState } from 'react';
// import { useRouter } from 'next/navigation';

// const UserForm = () => {
//   const router = useRouter();
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: '',
//   });
//   const [errorMessage, setErrorMessage] = useState("");

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setErrorMessage("");
    
//     // Debug: Afficher les données du formulaire
//     console.log("Form Data:", formData);

//     try {
//       const res = await fetch("/api/User", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });

//       // Vérification de la réponse de l'API
//       if (!res.ok) {
//         const response = await res.json();
//         setErrorMessage(response.message || "An error occurred.");
//       } else {
//         router.refresh();
//         router.push("/");
//       }
//     } catch (error) {
//       console.error("Submission error:", error);
//       setErrorMessage("An error occurred while submitting the form.");
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} method='post' className='flex flex-col gap-3 w-1/2'>
//       <h1>Create New User</h1>

//       <label>Full Name </label>
//       <input 
//         id='name' 
//         name='name' 
//         type='text'
//         onChange={handleChange}
//         required={true}
//         value={formData.name}
//         className='m-2 bg-slate-400 rounded'
//       />

//       <label>Email</label>
//       <input 
//         id='email' 
//         name='email' 
//         type='email'
//         onChange={handleChange}
//         required={true}
//         value={formData.email}
//         className='m-2 bg-slate-400 rounded'
//       />

//       <label>Password</label>
//       <input 
//         id='password' 
//         name='password' 
//         type='password'
//         onChange={handleChange}
//         required={true}
//         value={formData.password}
//         className='m-2 bg-slate-400 rounded'
//       />

//       <input type="submit" value={"Create User"} className='bg-blue-300 hover:bg-blue-100' />

//       {errorMessage && <p className='text-red-500'>{errorMessage}</p>}
//     </form>
//   );
// }

// export default UserForm;








// "use client";
// import React, { useState } from 'react';
// import { useRouter } from 'next/navigation';

// const UserForm = () => {
//   const router = useRouter();
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: '',
//   });
//   const [errorMessage, setErrorMessage] = useState("");

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setErrorMessage("");
    
//     try {
//       const res = await fetch("/api/User", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });

//       if (!res.ok) {
//         const response = await res.json();
//         setErrorMessage(response.message || "An error occurred.");
//       } else {
//         router.refresh();
//         router.push("/");
//       }
//     } catch (error) {
//       console.error("Submission error:", error);
//       setErrorMessage("An error occurred while submitting the form.");
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} method="post" className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-8 space-y-6 m-60">
//       <h1 className="text-2xl font-semibold text-gray-800 text-center mb-4">Create New User</h1>

//       <div>
//         <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
//         <input 
//           id="name" 
//           name="name" 
//           type="text"
//           onChange={handleChange}
//           required
//           value={formData.name}
//           className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//           placeholder="Enter full name"
//         />
//       </div>

//       <div>
//         <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
//         <input 
//           id="email" 
//           name="email" 
//           type="email"
//           onChange={handleChange}
//           required
//           value={formData.email}
//           className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//           placeholder="Enter email address"
//         />
//       </div>

//       <div>
//         <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
//         <input 
//           id="password" 
//           name="password" 
//           type="password"
//           onChange={handleChange}
//           required
//           value={formData.password}
//           className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//           placeholder="Enter password"
//         />
//       </div>

//       <button type="submit" className="w-full py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
//         Create User
//       </button>

//       {errorMessage && <p className="text-center text-red-500 mt-4">{errorMessage}</p>}
//     </form>
//   );
// }

// export default UserForm;





// pages/auth/signin.js

"use client";
import { signIn, useSession } from "next-auth/react";

const UserForm = () => {
  const { data: session } = useSession();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-semibold text-gray-800 mb-6">
        Sign In
      </h1>

      {session ? (
        <div>
          <h2 className="text-xl mb-4">Welcome, {session.user.name}</h2>
          <button
            onClick={() => signOut()}
            className="px-6 py-2 mt-4 font-semibold text-white bg-red-600 rounded-lg hover:bg-red-700"
          >
            Sign Out
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          <button
            onClick={() => signIn("google")}
            className="px-6 py-2 font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 w-full max-w-xs"
          >
            Sign in with Google
          </button>

          <button
            onClick={() => signIn("github")}
            className="px-6 py-2 font-semibold text-white bg-gray-800 rounded-lg hover:bg-gray-900 w-full max-w-xs"
          >
            Sign in with GitHub
          </button>

          <div className="bg-white shadow-lg rounded-lg p-6 space-y-4 w-full max-w-xs">
            <h3 className="text-lg font-medium">Or Sign in with your Credentials</h3>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                signIn("credentials", {
                  redirect: false,
                  email: e.target.email.value,
                  password: e.target.password.value,
                });
              }}
              className="space-y-4"
            >
              <input
                name="email"
                type="text"
                placeholder="Your email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                required
              />
              <input
                name="password"
                type="password"
                placeholder="Your password"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                required
              />
              <button
                type="submit"
                className="w-full py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-md focus:outline-none"
              >
                Sign In
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserForm;
