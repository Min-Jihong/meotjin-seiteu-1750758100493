'use client';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { LucideHome, LucideInfo } from 'lucide-react';

const navigation = [
  { name: '메인', href: '/', icon: LucideHome },
  { name: '소개', href: '/about', icon: LucideInfo },
];

export const Sidebar = () => {
  return (
    <nav className="border-r border-gray-200 px-6 py-4 w-64">
      <ul>
        {navigation.map((item) => (
          <li key={item.name} className={cn('mb-2')}>
            <Link
              href={item.href}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
            >
              <item.icon className="h-4 w-4" />
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
