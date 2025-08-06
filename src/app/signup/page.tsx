'use client';

// Update the import path below if AuthForm is located elsewhere
import AuthForm from '../components/AuthForm';

export default function SignupPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-neutral-900">
      <AuthForm mode="signup" />
    </main>
  );
}
