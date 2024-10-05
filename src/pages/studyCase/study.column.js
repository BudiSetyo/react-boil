import moment from "moment";

export const studyColumn = [
  {
    title: "Title",
    dataIndex: "title",
    key: "title",
    width: 100,
  },
  {
    title: "Company",
    dataIndex: "company",
    key: "company",
    width: 100,
  },
  {
    title: "Objective",
    dataIndex: "objective",
    key: "objective",
    width: 200,
  },
  {
    title: "Challenge",
    dataIndex: "challenge",
    key: "challenge",
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
