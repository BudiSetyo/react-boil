import moment from "moment";

export const userColumns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    width: 100,
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
    width: 200,
  },
  {
    title: "Updated",
    dataIndex: "updated_at",
    key: "updated_at",
    width: 100,
    render: (_, record) =>
      moment(record.updated_at).format("YYYY-MM-DD HH:mm:ss"),
  },
  {
    title: "Created",
    dataIndex: "created_at",
    key: "created_at",
    width: 100,
    render: (_, record) =>
      moment(record.created_at).format("YYYY-MM-DD HH:mm:ss"),
  },
];
