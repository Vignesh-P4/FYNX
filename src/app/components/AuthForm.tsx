'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import HeroSlide from "./HeroSlide";


interface Props {
  mode: 'login' | 'signup';
}

export default function AuthForm({ mode }: Props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // ✅ Fake validation
    if (!email || !password) {
      alert('Please fill all fields');
      return;
    }

    // 🔐 Simulate login/signup success
    console.log(`${mode === 'login' ? 'Logged in' : 'Signed up'} with`, { email, password });

    // ✅ Redirect to dashboard or home
    router.push('/dashboard');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-8 rounded-xl shadow-md w-full max-w-md space-y-6"
    >
      <h2 className="text-2xl font-bold text-center text-black">
        {mode === 'login' ? 'Login to FYNX' : 'Create your FYNX account'}
      </h2>

      <input
        type="email"
        placeholder="Email"
        className="w-full p-3 border border-gray-300 rounded-md text-black"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        className="w-full p-3 border border-gray-300 rounded-md text-black"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        type="submit"
        className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-800 transition"
      >
        {mode === 'login' ? 'Login' : 'Sign Up'}
      </button>

      <p className="text-center text-sm">
        {mode === 'login' ? (
          <>
            Don’t have an account?{' '}
            <span
              onClick={() => router.push('/signup')}
              className="text-blue-600 cursor-pointer underline"
            >
              Sign up
            </span>
          </>
        ) : (
          <>
            Already have an account?{' '}
            <span
              onClick={() => router.push('/login')}
              className="text-blue-600 cursor-pointer underline"
            >
              Log in
            </span>
          </>
        )}
      </p>
    </form>
  );
}
