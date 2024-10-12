import { Table, Button, Input } from "antd";
import {
  DeleteOutlined,
  EditOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons";
import { ModalPermission } from "@/components";
import useTableClient from "../hooks/useTableClient";
import { clientColumns } from "../clients.column";
import DrawerClient from "./drawer.client";
import DrawerEditClient from "./drawerEdit.client";

const TableClient = () => {
  const { states, handles, query } = useTableClient();

  const dataSource = states.filteredData?.map((item, index) => ({
    key: index + 1,
    ...item,
  }));

  const initialData = query.data?.data.map((item, index) => ({
    key: index + 1,
    ...item,
  }));

  const columns = [
    ...clientColumns,
    {
      title: "Actions",
      render: (_, record) => (
        <div className="flex gap-2">
          <Button
            className="w-full"
            icon={<EditOutlined className="text-blue-500" />}
            onClick={() => {
              handles.handleToogle("edit");
              handles.handleSetClientData(record);
            }}
          />

          <Button
            className="w-full"
            icon={<DeleteOutlined className="text-red-500" />}
            onClick={() => {
              handles.handleToogle("delete");
              handles.handleSetClientData(record);
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

      <DrawerClient
        open={states.toogle.drawer}
        onClose={() => handles.handleToogle("drawer")}
      />

      {states.toogle.edit && (
        <DrawerEditClient
          open={states.toogle.edit}
          onClose={() => handles.handleToogle("edit")}
          clientData={states.clientData}
        />
      )}

      <ModalPermission
        open={states.toogle.delete}
        onCancel={() => {
          handles.handleToogle("delete");
          handles.handleSetClientData({});
        }}
        content={
          <p>
            Are you sure to delete client{" "}
            <span className="text-blue-500">{states.clientData?.name}</span> ?
          </p>
        }
        onConfirm={handles.handleDeleteClient}
      />
    </div>
  );
};

export default TableClient;
