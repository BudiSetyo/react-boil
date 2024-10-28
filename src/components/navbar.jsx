import { useEffect } from 'react';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import useGlobalHooks from '@/hooks';
import { baseUrl } from '@/utils';

const Navbar = () => {
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
      <div className="w-full h-10 p-2 flex justify-between items-center bg-gray-100 shadow-lg">
        <button
          className="text-gray-500 rounded hover:bg-gray-200 px-1"
          onClick={() => handlers.handleToggle('sidebar')}
        >
          {toggle.sidebar ? <MenuFoldOutlined /> : <MenuUnfoldOutlined />}
        </button>
      </div>
    </main>
  );
};

export default Navbar;
