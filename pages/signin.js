'use client'
import { useState } from 'react';
import { signIn } from 'next-auth/react';


const SignInPage = () => {
  const [email, setEmail] = useState("");

  const onSubmit = async(e) => {
    e.preventDefault();
    await signIn("email", { email, callbackUrl: 'https://todoapp.io/dashboard' });
  };
    return (
      <main>
        <h1> Sign in to your dashboard! </h1>
        <form onSubmit={onSubmit}>
          <div className="w-full">
            <input
            id='email'
            name='email'
            type='email'
            placeholder='youremail@me.com'
            autoComplete='email'
            required
            onChange={(e) => setEmail(e.target.value)}
            />                 
          </div>
          <button
            className="border border-zinc-200 py-3 w-[300px] rounded-lg text-lg cursor-pointer hover:text-slate-900 hover:border-violet-900"
            type="submit"
            >
            Sign In
          </button>
        </form>
      </main>
    );
}

export default SignInPage;
