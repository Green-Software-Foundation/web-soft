import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const NavigationComponent = () => {
  const navigationItems = [
    { href: "#overview", label: "Overview" },
    { href: "#why-soft-matters", label: "Why SOFT Matters" },
    { href: "#read-the-docs", label: "Explore the Framework" },
    { href: "#take-the-course", label: "Take the course" },
    { href: "#get-involved", label: "Get Involved" },
    {
      href: "https://directory.greensoftware.foundation/projects/sustainable-organisational-framework-for-technology-(soft)/",
      label: "Directory",
    },
  ];

  return (
    <div className="flex items-center">
      {/* Desktop navigation */}
      <div className="hidden lg:block">
        <NavigationMenu className="flex justify-center">
          <NavigationMenuList className="flex">
            {navigationItems.map((item) => (
              <NavigationMenuItem key={item.href}>
                <NavigationMenuLink
                  href={item.href}
                  className={navigationMenuTriggerStyle()}
                  {...(item.href.startsWith("http")
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                >
                  {item.label}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      {/* Mobile hamburger menu */}
      <div className="lg:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" className="p-2 text-gray-darker">
              <Menu className="size-2" />
            </Button>
          </SheetTrigger>
          <SheetContent className="overflow-y-auto">
            <nav className="mt-16 flex flex-col gap-2 p-2">
              {navigationItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="px-2 py-2 text-2xl font-semibold text-primary-darker"
                  {...(item.href.startsWith("http")
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default NavigationComponent;
