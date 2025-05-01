import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { useState } from 'react';
import UnlockModal from '../dashboard/UnlockModal';

const Layout = () => {
  const [isUnlockModalOpen, setIsUnlockModalOpen] = useState(false);

  const openUnlockModal = () => {
    setIsUnlockModalOpen(true);
  };

  const closeUnlockModal = () => {
    setIsUnlockModalOpen(false);
  };

  return (
    <div className="flex flex-col min-h-screen bg-dark-300 text-gray-100">
      <Navbar openUnlockModal={openUnlockModal} />
      <main className="flex-grow">
        <Outlet context={{ openUnlockModal }} />
      </main>
      <Footer />
      <UnlockModal isOpen={isUnlockModalOpen} onClose={closeUnlockModal} />
    </div>
  );
};

export default Layout;