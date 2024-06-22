"use client";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
} from "@nextui-org/react";
import { usePathname } from "next/navigation";
import { SignOut } from "app/services/auth/signout";

export const Header = () => {
  const path = usePathname();

  

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [activeItem, setActiveItem] = React.useState(path);
  const menuItems = [
    { name: "Dashboard", link: "/dashboard" },
    { name: "Consumidor", link: "/consumer" },
    { name: "Proveedor", link: "/supplier" },
    { name: "Membresia", link: "/membership" },
    { name: "Log Out", link: "/login" },
  ];

  const handleClickLinks = (path: string) => {
    setActiveItem(path);
  };

  const handleSignOut = async () => {
    await SignOut();
  }


  if (path === "/login") {
    return <div></div>;
  }
  

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          {/* <AcmeLogo /> */}
          <p className="font-bold text-inherit">TUCONDOMINIO</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {/* <NavbarItem isActive={activeItem === "/dashboard"}>
          <Link
            onClick={() => {
              handleClickLinks("/dashboard");
            }}
            color={!(activeItem === "/dashboard") ? "foreground" : undefined}
            href="/dashboard"
          >
            Dashboard
          </Link>
        </NavbarItem> */}
        <NavbarItem isActive={activeItem === "/consumer"}>
          <Link
            onClick={() => {
              handleClickLinks("/consumer");
            }}
            color={!(activeItem === "/consumer") ? "foreground" : undefined}
            href="/consumer"
            aria-current="page"
          >
            Consumidores
          </Link>
        </NavbarItem>
        <NavbarItem isActive={activeItem === "/supplier"}>
          <Link
            onClick={() => {
              handleClickLinks("/supplier");
            }}
            color={!(activeItem === "/supplier") ? "foreground" : undefined}
            href="/supplier"
          >
            Proveedores
          </Link>
        </NavbarItem>
        <NavbarItem isActive={activeItem === "/membership"}>
          <Link
            onClick={() => {
              handleClickLinks("/membership");
            }}
            color={!(activeItem === "/membership") ? "foreground" : undefined}
            href="/membership"
          >
            Membresía
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="/login">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} onClick={handleSignOut} color="primary" href="/login" variant="flat">
            Sign Out
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              className="w-full"
              href={item.link}
              size="lg"
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};
