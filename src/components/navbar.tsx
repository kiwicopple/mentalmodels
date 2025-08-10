'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from './ui/button';
import { Menu } from 'lucide-react';

interface NavbarProps {
  onMenuClick: () => void;
}

export function Navbar({ onMenuClick }: NavbarProps) {
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center px-4">
        {/* Mobile menu button */}
        <Button
          variant="ghost"
          size="icon"
          onClick={onMenuClick}
          className="md:hidden mr-2"
        >
          <Menu className="h-5 w-5" />
        </Button>

        {/* Logo */}
        <div className="flex items-center space-x-3">
          <Link href="/" className="hover:opacity-80 transition-opacity">
            <Image
              src="/mm-logo.svg"
              alt="Mental Models Logo"
              width={120}
              height={38}
              className="h-8 w-auto"
              priority
            />
          </Link>
        </div>

        {/* Spacer to push content to the right if needed */}
        <div className="flex-1" />

        {/* Optional: Add navigation items here */}
        <div className="hidden md:flex items-center space-x-4">
          {/* Future navigation items can go here */}
        </div>
      </div>
    </nav>
  );
}