import { useEffect } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  MenuOutlined,
  CloseOutlined,
} from '@ant-design/icons';
import useGlobalHooks from '@/hooks';
import { baseUrl } from '@/utils';
import { Navbar } from '.';

const Header = () => {
  const token = localStorage.getItem('token');
  const { state, handlers } = useGlobalHooks();
  const { toggle } = state;

  useEffect(() => {
    if (!token) {
      window.location.href = `${baseUrl}/auth`;
    }
  }, [token]);

  return (
    <main className="sticky top-0 z-50 box-border">
      <div className="relative z-50 w-full h-10 p-2 flex justify-between items-center bg-gray-100 shadow-lg">
        <button
          className={`hidden lg:block rounded text-gray-500 hover:bg-gray-200 px-1`}
          onClick={() => handlers.handleToggle('sidebar')}
        >
          {toggle.sidebar ? <MenuFoldOutlined /> : <MenuUnfoldOutlined />}
        </button>

        <button
          className="block lg:hidden rounded text-gray-500 hover:bg-gray-200 px-1"
          onClick={() => handlers.handleToggle('navbar')}
        >
          {toggle.navbar ? <CloseOutlined /> : <MenuOutlined />}
        </button>
      </div>

      <Navbar />
    </main>
  );
};

export default Header;
