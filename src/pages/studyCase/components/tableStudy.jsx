import { Table } from "antd";
import { studyColumn } from "../study.column";

const TableStudy = () => {
  return (
    <div className="shadow rounded border bg-white p-4">
      <Table columns={studyColumn} />
    </div>
  );
};

export default TableStudy;
