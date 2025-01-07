import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { LinkIcon, LogOut } from "lucide-react";
import { Button } from "./ui/button";
const Header = () => {
  const navigate = useNavigate();

  const user = false;
  return (
    <nav className=" py-10 flex justify-around ">
      <Link to="/">
        <img src=" logo.png" alt="" className="h-16 " />
      </Link>
      <div>
        {!user ? (
          <Button onClick={() => navigate("/auth")}>Login</Button>
        ) : (
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>BIPUL</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>BIPUL</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-blue-600">
                <LinkIcon className="h-2" />
                My links
              </DropdownMenuItem>
              <DropdownMenuItem className="text-red-500">
                <LogOut className="h-4 w-4" />
                Lagout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )}
      </div>
    </nav>
  );
};

export default Header;
