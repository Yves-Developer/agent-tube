import {
  SignedIn,
  SignedOut,
  SignIn,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";
import Logo from "./Logo";
import { Button } from "./ui/button";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="sticky flex items-center h-16 bg-white top-0 right-0 left-0 z-10 ">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <Logo />
        </Link>
        <div className="flex gap-2">
          <SignedIn>
            <Link href="/manage-plan">
              <Button variant="outline">Mange Plan</Button>
            </Link>
            <div className="w-10 h-10 rounded-full bg-blue-100 border-blue-200 p-2 flex flex-col justify-center items-center">
              <UserButton />
            </div>
          </SignedIn>
          <SignedOut>
            <Link href="/sign-in">
              <Button>Sign In</Button>
            </Link>
          </SignedOut>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
