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
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from '@/components/ui/sheet';
import { authOptions } from '@/lib/auth-options';
import { Menu } from 'lucide-react';
import { getServerSession } from 'next-auth';
import Link from 'next/link';

export default async function Navbar() {
    const session = await getServerSession(authOptions);
    const userName = session?.user?.name || "User";
    const userImage = session?.user?.image || null;
    const userInitials = userName
        .split(" ")
        .map((n) => n[0])
        .join("");

    return (
        <nav className="border-b bg-background sticky top-0 z-50">
            <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3">
                {/* Logo */}
                <Link href="/" className="text-xl font-bold tracking-tight">
                    ResuAI
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-6">
                    <Link href="/" className="text-sm hover:underline">Home</Link>
                    {session && (
                        <Link href="/dashboard" className="text-sm hover:underline">
                            Dashboard
                        </Link>
                    )}
                    <ModeToggle />
                    {session ? (
                        <DropdownMenu>
                            <DropdownMenuTrigger>
                                <Avatar className="h-8 w-8">
                                    <AvatarImage src={userImage ?? ''} />
                                    <AvatarFallback>{userInitials}</AvatarFallback>
                                </Avatar>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <DropdownMenuItem asChild>
                                    <Link href="/dashboard">Profile</Link>
                                </DropdownMenuItem>
                                <form method="POST" action="/api/auth/signout">
                                    <DropdownMenuItem asChild>
                                        <button type="submit" className="w-full text-left">
                                            Logout
                                        </button>
                                    </DropdownMenuItem>
                                </form>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    ) : (
                        <>
                            <Link href="/login">
                                <Button variant="outline" size="sm">Login</Button>
                            </Link>
                            <Link href="/signup">
                                <Button size="sm">Sign Up</Button>
                            </Link>
                        </>
                    )}
                </div>

                {/* Mobile Sidebar */}
                <div className="md:hidden flex items-center gap-2">
                    <ModeToggle />
                    <Sheet>
                        <SheetTrigger>
                            <Menu className="h-6 w-6" />
                        </SheetTrigger>
                        <SheetContent side="right" className="p-6">
                            <div className="flex flex-col gap-4">
                                <Link href="/" className="text-base" passHref>
                                    Home
                                </Link>
                                {session && (
                                    <Link href="/dashboard" className="text-base" passHref>
                                        Dashboard
                                    </Link>
                                )}
                                {session ? (
                                    <form method="POST" action="/api/auth/signout">
                                        <Button variant="ghost" type="submit" className="w-full">
                                            Logout
                                        </Button>
                                    </form>
                                ) : (
                                    <>
                                        <Link href="/login">
                                            <Button variant="ghost" className="w-full">Login</Button>
                                        </Link>
                                        <Link href="/signup">
                                            <Button className="w-full">Sign Up</Button>
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
