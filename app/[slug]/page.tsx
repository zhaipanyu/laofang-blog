import Sidebar from '../../components/Sidebar';
import Content from '../../components/Content';

export default function DynamicPage({ params }: { params: { slug: string } }) {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <Content slug={params.slug} />
    </div>
  );
}
