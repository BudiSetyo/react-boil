import { Table, Button, Input } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { ModalPermission } from "@/components";
import useTableTestimony from "../hooks/useTableTestimony";
import { testimonyColumns } from "../testimony.column";

const TableTestimony = () => {
  const { states, handles, query } = useTableTestimony();

  const dataSource = states.filteredData?.map((item, index) => ({
    key: index + 1,
    ...item,
  }));

  const initialData = query.data?.data.map((item, index) => ({
    key: index + 1,
    ...item,
  }));

  const columns = [
    ...testimonyColumns,
    {
      title: "Actions",
      render: (_, record) => (
        <div className="flex gap-2">
          {/* <Button
            className="w-full"
            icon={<EditOutlined className="text-blue-500" />}
            onClick={() => {
              handles.handleToogle("edit");
              handles.handleSetTestimonyData(record);
            }}
          /> */}

          <Button
            className="w-full"
            icon={<DeleteOutlined className="text-red-500" />}
            onClick={() => {
              handles.handleToogle("delete");
              handles.handleSetTestimonyData(record);
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

      <ModalPermission
        open={states.toogle.delete}
        onCancel={() => {
          handles.handleToogle("delete");
          handles.handleSetTestimonyData({});
        }}
        content={
          <p>
            Are you sure to delete testimony{" "}
            <span className="text-blue-500">{states.testimonyData?.name}</span>{" "}
            ?
          </p>
        }
        onConfirm={handles.handleDeleteTestimony}
      />
    </div>
  );
};

export default TableTestimony;
