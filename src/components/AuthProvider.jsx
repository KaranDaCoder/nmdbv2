"use client"
import React from 'react'
import { SessionProvider } from 'next-auth/react';
import FiterContext from '@/app/contexts/FiterContext';

const AuthProvider = ({ children, session }) => {
  return (
    <SessionProvider session={session}>
      <FiterContext>

     {children}
      </FiterContext>
    </SessionProvider>
  );
};

export default AuthProvider;