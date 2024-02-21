import Link from "next/link";
import { ModeToggle } from "./ModeToggle";
import { Button } from "./ui/button";
import NavLogo from "./NavLogo";
import { CreateRoomDialog } from "./CreateRoomDialog";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-10 py-4 sticky top-0 backdrop-blur-md shadow-sm">
      <div className="flex items-center space-x-10">
        <NavLogo />
        <ul className="flex items-center space-x-4 text-lg">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
						<CreateRoomDialog />
          </li>
        </ul>
      </div>
      <div className="flex items-center space-x-4">
        <ul className="flex items-center space-x-4">
          <li>
            <Link href="/auth/login">
              <Button variant="ghost">Login</Button>
            </Link>
          </li>
          <li>
            <Link href="/auth/register">
              <Button>Register</Button>
            </Link>
          </li>
        </ul>
        <ModeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
