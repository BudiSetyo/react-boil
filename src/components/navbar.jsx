import useGlobalHooks from '@/hooks';
import { pageMenu, baseUrl } from '@/utils';
import { Link } from 'react-router-dom';
import Icon, {
  CloseOutlined,
  CaretRightFilled,
  LogoutOutlined,
} from '@ant-design/icons';

const Navbar = () => {
  const { state, handlers } = useGlobalHooks();
  const { toggle } = state;

  return (
    <div
      className={`${toggle.navbar ? 'top-10' : 'top-[-2000px]'} absolute inset-x-0 bottom-0 z-10 duration-700 `}
    >
      <div className="h-screen p-4 bg-gray-300 flex flex-col items-center text-lg font-semibold gap-2 text-gray-200">
        {pageMenu.map((item) => {
          return (
            <Link className="w-80" to={`/${baseUrl}/${item.name}`} key={item}>
              <button
                className="w-full flex items-center justify-between rounded bg-gray-400 px-4 py-2 capitalize"
                onClick={() => handlers.handleToggle('navbar')}
              >
                <div className="flex gap-4">
                  <Icon component={item.icon} />
                  <p>{item.name}</p>
                </div>

                <CaretRightFilled />
              </button>
            </Link>
          );
        })}

        <div className="flex flex-col gap-2 mt-10">
          <button
            className="w-80 flex gap-4 items-center justify-between rounded bg-gray-400 px-4 py-2 capitalize"
            onClick={() => console.log('Log out success')}
          >
            <div className="flex gap-4">
              <LogoutOutlined />
              <p>logout</p>
            </div>

            <CaretRightFilled />
          </button>

          <button
            className="w-80 flex gap-4 items-center justify-between rounded bg-gray-400 px-4 py-2 capitalize"
            onClick={() => handlers.handleToggle('navbar')}
          >
            <div className="flex gap-4">
              <CloseOutlined />
              <p>close</p>
            </div>

            <CaretRightFilled />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
