'use client';

import AuthForm from '../components/AuthForm';

export default function LoginPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-neutral-900">
      <AuthForm mode="login" />
    </main>
  );
}
