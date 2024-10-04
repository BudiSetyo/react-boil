import { Table, Button, Input } from "antd";
import {
  DeleteOutlined,
  EditOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons";
import { userColumns } from "../user.column";
import useTableUsers from "../hooks/useTableUser";
import DrawerEditUser from "./drawerEdit.user";
import DrawerUser from "./drawer.user";
import { ModalPermission } from "@/components";

const TableUser = () => {
  const { states, query, handles } = useTableUsers();

  const dataSource = states.filteredData?.map((item, index) => ({
    key: index + 1,
    ...item,
  }));

  const initialData = query.data?.data.map((item, index) => ({
    key: index + 1,
    ...item,
  }));

  const columns = [
    ...userColumns,
    {
      title: "Actions",
      render: (_, record) => (
        <div className="flex gap-2">
          <Button
            className="w-full"
            icon={<EditOutlined className="text-blue-500" />}
            onClick={() => {
              handles.handleToogle("edit");
              handles.handleUserData(record);
            }}
          />

          <Button
            className="w-full"
            icon={<DeleteOutlined className="text-red-500" />}
            onClick={() => {
              handles.handleToogle("delete");
              handles.handleUserData(record);
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

      <DrawerUser
        open={states.toogle.drawer}
        onClose={() => handles.handleToogle("drawer")}
      />

      {states.toogle.edit && (
        <DrawerEditUser
          open={states.toogle.edit}
          onClose={() => handles.handleToogle("edit")}
          data={states.userData}
        />
      )}

      <ModalPermission
        open={states.toogle.delete}
        onCancel={() => handles.handleToogle("delete")}
        onConfirm={handles.handleDeleteUser}
        content={
          <p>
            Are you sure to delete user{" "}
            <span className="text-blue-500">{states.userData?.name}</span> ?
          </p>
        }
      />
    </div>
  );
};

export default TableUser;
