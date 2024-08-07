import { Input, Table } from "antd";
import { postCollumns } from "./hooks/posts.column.js";
import dataJson from "./hooks/data.json";

const onSearch = (value) => console.log(value);

const Posts = () => {
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
        columns={postCollumns}
        dataSource={dataJson.map((obj, index) => ({ key: index, ...obj }))}
      />
    </main>
  );
};

export default Posts;
