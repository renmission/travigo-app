import { User, getAuth, onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { NavLink, Navigate, Outlet } from "react-router-dom";

const AuthLayout = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const auth = getAuth();
    const listen = onAuthStateChanged(auth, (user: User | null) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => {
      listen();
    };
  }, []);
  
  if (user) {
    return <Navigate to="/pricing" replace />
  }

  return (
    <>
      <div className="min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8 mx-auto">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default AuthLayout;
