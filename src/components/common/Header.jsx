import { useState } from 'react';

import { FaSearch } from 'react-icons/fa';

const Header = () => {
  const [isSeachModalOpen, setIsSearchModalOpen] = useState(false);
  const toggleSearchModal = () => {
    setIsSearchModalOpen(!isSeachModalOpen);
  };
  return (
    <header>
      {isSeachModalOpen && (
        <>
          <div
            className="fixed inset-0 bg-black opacity-50 z-0"
            onClick={() => setIsSearchModalOpen(false)}
            role="presentation" // 의미 없음 명시
          ></div>
          <div className="bg-white p-4 rounded shadow-lg z-10 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96">
            <h2 className="text-lg font-bold">Search</h2>
            <input
              type="text"
              placeholder="포켓몬 이름을 입력하세요"
              className="border border-gray-300 p-2 rounded w-full"
            />
            <button
              onClick={() => setIsSearchModalOpen(false)}
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
            >
              Close
            </button>
          </div>
        </>
      )}
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white text-lg font-bold">Pokemon Wiki</div>
          <ul className="flex space-x-4">
            <li>
              <a href="/" className="text-white hover:text-gray-300">
                Home
              </a>
            </li>
            <li>
              <button
                onClick={() => toggleSearchModal()}
                className="text-white hover:text-gray-300"
              >
                <FaSearch className="inline-block text-xl" />
              </button>
            </li>
          </ul>
        </div>
      </nav>
      <div className="bg-gray-200 p-4 text-center">
        <h1 className="text-2xl font-bold">포켓몬 위키</h1>
        <p className="text-gray-700">최애 포켓몬을 찾아라!</p>
      </div>
    </header>
  );
};

export default Header;
