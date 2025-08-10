// components/Navbar.tsx
import ModeToggle from '@/components/mode-toggle';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import { authOptions } from '@/lib/auth-options';
import { Menu, LogOut, User as UserIcon, Home as HomeIcon, LayoutDashboard } from 'lucide-react';
import { getServerSession } from 'next-auth';
import Link from 'next/link';

export default async function Navbar() {
  const session = await getServerSession(authOptions);
  const userName = session?.user?.name || 'User';
  const userImage = session?.user?.image || '';
  const userInitials = userName
    .split(' ')
    .map((n) => n[0])
    .join('');

  const navLinks = [
    { name: 'Home', href: '/', icon: <HomeIcon className="h-4 w-4 mr-2" /> },
    ...(session
      ? [{ name: 'Dashboard', href: '/dashboard', icon: <LayoutDashboard className="h-4 w-4 mr-2" /> }]
      : []),
  ];

  return (
    <nav className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-extrabold tracking-tight text-foreground hover:text-primary transition-colors"
        >
          ResuAI
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-base font-medium flex items-center hover:text-primary transition-colors"
            >
              {link.icon}
              {link.name}
            </Link>
          ))}

          <ModeToggle />

          {session ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Avatar className="h-9 w-9 cursor-pointer">
                  <AvatarImage src={userImage} alt={userName} />
                  <AvatarFallback>{userInitials}</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem asChild>
                  <Link href="/dashboard" className="flex items-center">
                    <UserIcon className="h-4 w-4 mr-2" />
                    Profile
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <form method="POST" action="/api/auth/signout">
                  <DropdownMenuItem asChild>
                    <button
                      type="submit"
                      className="flex w-full items-center text-red-500"
                    >
                      <LogOut className="h-4 w-4 mr-2" />
                      Logout
                    </button>
                  </DropdownMenuItem>
                </form>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <>
              <Link href="/login">
                <Button variant="outline" size="sm" className="font-semibold">
                  Login
                </Button>
              </Link>
              <Link href="/signup">
                <Button size="sm" className="font-semibold">
                  Sign Up
                </Button>
              </Link>
            </>
          )}
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center gap-2">
          <ModeToggle />
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="p-6">
              <div className="flex flex-col gap-4 mt-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="flex items-center text-lg font-medium hover:text-primary transition-colors"
                  >
                    {link.icon}
                    {link.name}
                  </Link>
                ))}

                {session ? (
                  <form method="POST" action="/api/auth/signout">
                    <Button
                      variant="destructive"
                      type="submit"
                      className="flex items-center justify-center gap-2 mt-4"
                    >
                      <LogOut className="h-4 w-4" />
                      Logout
                    </Button>
                  </form>
                ) : (
                  <>
                    <Link href="/login">
                      <Button
                        variant="outline"
                        className="w-full font-semibold"
                      >
                        Login
                      </Button>
                    </Link>
                    <Link href="/signup">
                      <Button className="w-full font-semibold">Sign Up</Button>
                    </Link>
                  </>
                )}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
