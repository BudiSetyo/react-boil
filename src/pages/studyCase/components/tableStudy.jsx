import { Table, Button, Input } from "antd";
import { studyColumn } from "../study.column";
import useTableStudy from "../hooks/useTableStudy";
import {
  DeleteOutlined,
  EditOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons";
import DrawerStudy from "./drawer.study";
import { ModalPermission } from "@/components";

const TableStudy = () => {
  const { states, handles, query } = useTableStudy();

  const dataSource = states.filteredData?.map((item, index) => ({
    key: index + 1,
    ...item,
  }));

  const initialData = query.data?.data.map((item, index) => ({
    key: index + 1,
    ...item,
  }));

  const columns = [
    ...studyColumn,
    {
      title: "Actions",
      render: (_, record) => (
        <div className="flex gap-2">
          <Button
            className="w-full"
            icon={<EditOutlined className="text-blue-500" />}
            onClick={() => {
              handles.handleToogle("edit");
              handles.handleSetStudy(record);
            }}
          />

          <Button
            className="w-full"
            icon={<DeleteOutlined className="text-red-500" />}
            onClick={() => {
              handles.handleToogle("delete");
              handles.handleSetStudy(record);
            }}
          />
        </div>
      ),
      width: 100,
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

      <div className="mb-2">
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

      <DrawerStudy
        open={states.toogle.drawer}
        onClose={() => handles.handleToogle("drawer")}
      />

      <ModalPermission
        open={states.toogle.delete}
        onCancel={() => handles.handleToogle("delete")}
        onConfirm={handles.handleDeleteStudy}
        content={
          <div>
            <p>
              Are you sure you want to delete this study case? <br />
              <span className="text-blue-500">{states.studyData.title}</span>
            </p>
          </div>
        }
      />
    </div>
  );
};

export default TableStudy;
