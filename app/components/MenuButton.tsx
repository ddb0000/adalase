
'use client';

import { useEffect, useState } from 'react';
import Menu from './Menu';

export default function Button() {
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const menuState = sessionStorage.getItem('menuState') === 'true';
    setShowMenu(menuState);
  }, []);

  const toggleMenu = () => {
    setShowMenu(prevState => {
      const newState = !prevState;
      sessionStorage.setItem('menuState', newState.toString()); // Save new state to session storage
      return newState;
    });
  };

  return (
    <div className="relative">
      <button
        className="m-4 p-2 border-black shadow-md hover:bg-white"
        onClick={toggleMenu}
      >
        &gt;
      </button>
      {showMenu && <Menu />}
    </div>
  );
}
