import { PageTitle } from "@/components";
import { TeamOutlined } from "@ant-design/icons";
import TableTeam from "./components/table.team";

const Teams = () => {
  return (
    <main className="p-4 flex flex-col gap-4">
      <PageTitle title="Teams" icon={<TeamOutlined />} />

      <TableTeam />
    </main>
  );
};

export default Teams;
