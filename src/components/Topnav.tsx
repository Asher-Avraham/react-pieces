import Link from "next/link";
import { ModeToggle } from "~/components/ModeToggle";
import { Button } from "~/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "~/components/ui/sheet";

export default function Component() {
  return (
    <header className="flex h-20 w-full shrink-0 items-center border-b border-gray-200 px-4 dark:border-gray-800 md:px-6">
      <Link href="/" className="mr-6 flex items-center">
        <MountainIcon />
        <span className="sr-only">Acme Inc</span>
      </Link>
      <nav className="ml-auto hidden gap-4 lg:flex">
        <Link
          href="/"
          className="text-sm font-medium underline-offset-4 hover:underline"
        >
          Home
        </Link>
        <Link
          href="/about"
          className="text-sm font-medium underline-offset-4 hover:underline"
        >
          About
        </Link>
        <Link
          href="/services"
          className="text-sm font-medium underline-offset-4 hover:underline"
        >
          Services
        </Link>
        <Link
          href="/contact"
          className="text-sm font-medium underline-offset-4 hover:underline"
        >
          Contact
        </Link>
        <ModeToggle />
      </nav>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="ml-auto lg:hidden">
            <div className="h-6 w-6">
              <MenuIcon />
            </div>
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <div className="grid gap-4 p-4">
            <Link
              href="/"
              className="text-sm font-medium underline-offset-4 hover:underline"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium underline-offset-4 hover:underline"
            >
              About
            </Link>
            <Link
              href="/services"
              className="text-sm font-medium underline-offset-4 hover:underline"
            >
              Services
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium underline-offset-4 hover:underline"
            >
              Contact
            </Link>
            <ModeToggle />
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
}

function MenuIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function MountainIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}
