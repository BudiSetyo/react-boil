import { PageTitle } from "@/components";
import { ClusterOutlined } from "@ant-design/icons";
import TableService from "./components/table.service";

const Services = () => {
  return (
    <main className="p-4 flex flex-col gap-4">
      <PageTitle title="Services" icon={<ClusterOutlined />} />
      <TableService />
    </main>
  );
};

export default Services;
