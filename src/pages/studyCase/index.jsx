import { PageTitle } from "@/components";
import { BookOutlined } from "@ant-design/icons";
import TableStudy from "./components/tableStudy";

const StudyCase = () => {
  return (
    <main className="p-4 flex flex-col gap-4">
      <PageTitle title="study case" icon={<BookOutlined />} />

      <TableStudy />
    </main>
  );
};

export default StudyCase;
