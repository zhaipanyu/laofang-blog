import { FC } from 'react';

interface ContentProps {
  slug?: string;
}

const Content: FC<ContentProps> = ({ slug }) => {
  return (
    <div className="flex-1 p-8 overflow-auto">
      <h2 className="text-3xl font-bold mb-4">
        {slug ? `${slug.charAt(0).toUpperCase()}${slug.slice(1)}` : 'Welcome'}
      </h2>
      <p className="text-gray-600">
        {slug
          ? `This is the ${slug} page content.`
          : 'Welcome to our NotionAI style blog. Select a page from the sidebar to view its content.'}
      </p>
    </div>
  );
};

export default Content;
