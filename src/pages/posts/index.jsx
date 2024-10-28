import TablePost from './components/table.post.jsx';
import { PageTitle } from '@/components/index.js';
import { FileAddOutlined } from '@ant-design/icons';

const Posts = () => {
  return (
    <main className="flex flex-col gap-4">
      <PageTitle title="Posts" icon={<FileAddOutlined />} />
      <TablePost />
      <TablePost />
    </main>
  );
};

export default Posts;
