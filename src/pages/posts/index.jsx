import { Input, Table } from "antd";
import { postColumns } from "./hooks/posts.column.js";
import dataJson from "./hooks/data.json";
// import { usePosts } from "@/hooks/post.query";

const Posts = () => {
  // const { data, error, isLoading } = usePosts();

  // console.log(data, error, isLoading);

  const onSearch = (value) => console.log(value);

  return (
    <main className="p-4 flex flex-col gap-4">
      <div className="bg-white flex justify-between">
        <Input.Search
          placeholder="input search text"
          allowClear
          enterButton="Search"
          onSearch={onSearch}
        />
      </div>

      <Table
        className="overflow-auto"
        columns={postColumns}
        dataSource={dataJson.map((obj, index) => ({ key: index, ...obj }))}
      />
    </main>
  );
};

export default Posts;
