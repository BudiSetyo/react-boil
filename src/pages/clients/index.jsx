import { PageTitle } from "@/components";
import { ApartmentOutlined } from "@ant-design/icons";
import TableClient from "./components/table.client";

const Clients = () => {
  return (
    <main className="p-4 flex flex-col gap-4">
      <PageTitle title="Clients" icon={<ApartmentOutlined />} />

      <TableClient />
    </main>
  );
};

export default Clients;
