import { Table, Button, Input } from "antd";
import {
  DeleteOutlined,
  EditOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons";
import { ModalPermission } from "@/components";
import useTableTeam from "../hooks/useTableTeam";
import { teamColumns } from "../teams.column";
import DrawerTeam from "./drawer.team";
import DrawerEditTeam from "./drawerEdit.team";

const TableTeam = () => {
  const { states, handles, query } = useTableTeam();

  const dataSource = states.filteredData?.map((item, index) => ({
    key: index + 1,
    ...item,
  }));

  const initialData = query.data?.data.map((item, index) => ({
    key: index + 1,
    ...item,
  }));

  const columns = [
    ...teamColumns,
    {
      title: "Actions",
      render: (_, record) => (
        <div className="flex gap-2">
          <Button
            className="w-full"
            icon={<EditOutlined className="text-blue-500" />}
            onClick={() => {
              handles.handleToogle("edit");
              handles.handleSetTeamData(record);
            }}
          />

          <Button
            className="w-full"
            icon={<DeleteOutlined className="text-red-500" />}
            onClick={() => {
              handles.handleToogle("delete");
              handles.handleSetTeamData(record);
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

      <DrawerTeam
        open={states.toogle.drawer}
        onClose={() => handles.handleToogle("drawer")}
      />

      {states.toogle.edit && (
        <DrawerEditTeam
          open={states.toogle.edit}
          onClose={() => handles.handleToogle("edit")}
          teamData={states.teamData}
        />
      )}

      <ModalPermission
        open={states.toogle.delete}
        onCancel={() => {
          handles.handleToogle("delete");
          handles.handleSetTeamData({});
        }}
        content={
          <p>
            Are you sure to delete team{" "}
            <span className="text-blue-500">{states.teamData?.name}</span> ?
          </p>
        }
        onConfirm={handles.handleDeleteTeam}
      />
    </div>
  );
};

export default TableTeam;
