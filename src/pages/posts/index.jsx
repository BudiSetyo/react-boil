import { Input } from "antd";

const onSearch = (value, _e, info) => console.log(info?.source, value);

const Posts = () => {
  return (
    <main className="p-4 flex flex-col gap-2">
      <div className="bg-white flex justify-between">
        <Input.Search
          placeholder="input search text"
          allowClear
          enterButton="Search"
          onSearch={onSearch}
        />
      </div>
    </main>
  );
};

export default Posts;
