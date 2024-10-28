import Icon from '@/assets/icon.png';
import { Image } from 'antd';

const SuspenseLoading = () => {
  return (
    <section className="w-full h-svh flex justify-center items-center">
      <div className="flex flex-col gap-4 w-full justify-center  items-center">
        <Image src={Icon} alt="logo" width={100} preview={false} />
        <h1 className="text-xl text-gray-500 italic capitalize font-semibold">
          Please wait ...
        </h1>
      </div>
    </section>
  );
};

export default SuspenseLoading;
