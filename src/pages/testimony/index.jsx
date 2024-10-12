import { PageTitle } from "@/components";
import { CommentOutlined } from "@ant-design/icons";
import TableTestimony from "./components/table.testimony";

const Testimonies = () => {
  return (
    <main className="p-4 flex flex-col gap-4">
      <PageTitle title="Testimonies" icon={<CommentOutlined />} />

      <TableTestimony />
    </main>
  );
};

export default Testimonies;
