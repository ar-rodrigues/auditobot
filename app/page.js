"use client";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Form from './components/form.js';

const MainPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [name, setName] = useState('');
  const router = useRouter();

  useEffect(() => {
    const userName = localStorage.getItem('name');
    if (userName) {
      setIsLoggedIn(true);
      setName(userName);
    }
  }, []);

  return (
    <div className="max-w-md p-4 mx-auto">
      {isLoggedIn ? (
        <Form user={name} />
      ) : (
        <button
          onClick={() => router.push('/login')}
          className="px-4 py-2 text-white bg-blue-500 rounded-md"
        >
          Go to Login
        </button>
      )}
    </div>
  );
};

export default MainPage;
