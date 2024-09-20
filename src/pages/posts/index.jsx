import { Input } from "antd";
import TablePost from "./components/table.post.jsx";

const Posts = () => {
  const onSearch = (value) => console.log(value);

  return (
    <main className="p-4 flex flex-col gap-4">
      <div className="bg-white flex gap-16 shadow p-2 rounded border">
        <Input.Search
          className="w-full"
          placeholder="input search text"
          allowClear
          enterButton="Search"
          onSearch={onSearch}
        />
      </div>

      <TablePost />
    </main>
  );
};

export default Posts;
