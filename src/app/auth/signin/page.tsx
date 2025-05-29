'use client';

import { signIn } from 'next-auth/react';
import Image from 'next/image';

export default function SignIn() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-black p-4">
      <div className="card max-w-md w-full text-center">
        <h1 className="text-4xl font-bold mb-8">
          <span className="bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">Humm</span>
          ify
        </h1>
        
        <p className="text-lg mb-8 text-gray-300">
          Sign in to track your progress and compete on the leaderboard!
        </p>

        <button
          onClick={() => signIn('google', { callbackUrl: '/' })}
          className="w-full flex items-center justify-center gap-3 bg-white text-gray-800 font-semibold py-3 px-6 rounded-xl hover:bg-gray-100 transition-colors"
        >
          <Image
            src="/google-logo.png"
            alt="Google"
            width={24}
            height={24}
            className="w-6 h-6"
          />
          Continue with Google
        </button>
      </div>
    </div>
  );
} 