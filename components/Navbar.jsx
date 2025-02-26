import Logo from "./Logo";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <header className="sticky flex items-center h-16 bg-white top-0 right-0 left-0 z-10 ">
      <div className="container mx-auto flex justify-between items-center">
        <Logo />
        <div className="flex gap-2">
          <Button>Sign Up</Button>
          <Button variant="outline">Sign In</Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
