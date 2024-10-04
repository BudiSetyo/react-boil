import { Table, Button, Input } from "antd";
import {
  DeleteOutlined,
  EditOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons";
import { postColumns } from "../posts.column";
import useTablePosts from "../hooks/useTablePosts";
import DrawerEditPost from "./drawerEdit.post";
import DrawerPost from "./drawer.post";
import { ModalPermission } from "@/components";

const TablePost = () => {
  const { states, handles, query } = useTablePosts();

  const dataSource = states.filteredData?.map((item, index) => ({
    key: index + 1,
    ...item,
  }));

  const initialData = query.data?.data.map((item, index) => ({
    key: index + 1,
    ...item,
  }));

  const columns = [
    ...postColumns,
    {
      title: "Actions",
      render: (_, record) => (
        <div className="flex gap-2">
          <Button
            className="w-full"
            icon={<EditOutlined className="text-blue-500" />}
            onClick={() => {
              handles.handleToogle("edit");
              handles.handleSetPost(record.id);
            }}
          />

          <Button
            className="w-full"
            icon={<DeleteOutlined className="text-red-500" />}
            onClick={() => {
              handles.handleToogle("delete");
              handles.handleSetPostData(record);
            }}
          />
        </div>
      ),
      width: 10,
    },
  ];

  return (
    <div className="shadow rounded border bg-white p-4">
      <div className="bg-white mb-8">
        <Input.Search
          className="w-full"
          placeholder="input search text"
          allowClear
          enterButton="Search"
          onSearch={handles.handleSearch}
        />
      </div>

      <div className=" mb-2">
        <Button
          className="shadow"
          type="primary"
          icon={<PlusCircleOutlined />}
          onClick={() => handles.handleToogle("drawer")}
        >
          Add
        </Button>
      </div>

      <Table
        className="overflow-auto bg-white border rounded"
        columns={columns}
        dataSource={
          states.search || states.filteredData?.length
            ? dataSource
            : initialData
        }
        loading={query.isLoading}
      />

      <DrawerPost
        open={states.toogle.drawer}
        onClose={() => handles.handleToogle("drawer")}
      />

      <DrawerEditPost
        open={states.toogle.edit}
        onClose={() => handles.handleToogle("edit")}
        postId={states.postId}
      />

      <ModalPermission
        open={states.toogle.delete}
        onCancel={() => {
          handles.handleToogle("delete");
          handles.handleSetPostData({});
        }}
        content={
          <p>
            Are you sure to delete post{" "}
            <span className="text-blue-500">{states.postData?.title}</span> ?
          </p>
        }
        onConfirm={handles.handleDeletePost}
      />
    </div>
  );
};

export default TablePost;
