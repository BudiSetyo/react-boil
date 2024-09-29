import TableUser from "./components/table.user.jsx";
import { PageTitle } from "@/components/index.js";

const Users = () => {
  return (
    <main className="p-4 flex flex-col gap-4">
      <PageTitle title="Users" />

      <TableUser />
    </main>
  );
};

export default Users;
