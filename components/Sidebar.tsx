import { FC } from 'react';
import Link from 'next/link';
// import { Button } from "@/components/ui/button";

const menuItems = [
  { title: 'Home', slug: '/' },
  { title: 'About', slug: '/about' },
  { title: 'Blog', slug: '/blog' },
  { title: 'Contact', slug: '/contact' },
];

const Sidebar: FC = () => {
  return (
    <nav className="w-64 bg-gray-100 p-4 h-full">
      <h1 className="text-2xl font-bold mb-4">My Blog</h1>
      <ul className="space-y-2">
        {menuItems.map((item) => (
          <li key={item.slug}>
            <Link href={item.slug} className="block w-full text-left px-4 py-2 hover:bg-gray-200">
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Sidebar;
