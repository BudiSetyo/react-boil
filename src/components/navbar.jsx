import useGlobalHooks from '@/hooks';
import { pageMenu, baseUrl } from '@/utils';
import { Link } from 'react-router-dom';
import Icon, { CloseOutlined, CaretRightFilled } from '@ant-design/icons';

const Navbar = () => {
  const { state, handlers } = useGlobalHooks();
  const { toggle } = state;

  return (
    <div
      className={`${toggle.navbar ? 'top-10' : 'top-[-2000px]'} absolute inset-x-0 bottom-0 z-10 duration-700 `}
    >
      <div
        className={`h-screen p-4 bg-gray-300 flex flex-col items-center text-lg font-semibold gap-2 text-gray-200`}
      >
        {pageMenu.map((item, index) => {
          return (
            <Link className="w-80" to={`/${baseUrl}/${item.name}`} key={index}>
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
  );
};

export default Navbar;
