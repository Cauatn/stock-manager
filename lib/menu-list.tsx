import {
  Tag,
  Users,
  Settings,
  Bookmark,
  SquarePen,
  LayoutGrid,
  LucideIcon,
  Package,
} from "lucide-react";

type Submenu = {
  href: string;
  label: string;
  active: boolean;
};

type Menu = {
  href: string;
  label: string;
  active: boolean;
  icon: LucideIcon;
  submenus: Submenu[];
};

type Group = {
  groupLabel: string;
  menus: Menu[];
};

export function getMenuList(pathname: string): Group[] {
  return [
    {
      groupLabel: "",
      menus: [
        {
          href: "/stock",
          label: "Dashboard",
          active: pathname.includes("/"),
          icon: LayoutGrid,
          submenus: [],
        },
      ],
    },
    {
      groupLabel: "Ações",
      menus: [
        {
          href: "/stock/products",
          label: "Ver estoque",
          active: pathname.includes("/stock/products"),
          icon: Package,
          submenus: [],
        },
        {
          href: "/categories",
          label: "Adicionar novo produto",
          active: pathname.includes("/categories"),
          icon: Bookmark,
          submenus: [],
        },
        {
          href: "",
          label: "Teste",
          active: pathname.includes("/teste"),
          icon: SquarePen,
          submenus: [
            {
              href: "/teste",
              label: "Todos os funcionários",
              active: pathname === "/teste",
            },
            {
              href: "/teste",
              label: "Alguma açao",
              active: pathname === "/teste",
            },
          ],
        },
      ],
    },
    {
      groupLabel: "Configurações",
      menus: [
        {
          href: "/users",
          label: "Usuário",
          active: pathname.includes("/users"),
          icon: Users,
          submenus: [],
        },
        {
          href: "/account",
          label: "Configurações",
          active: pathname.includes("/account"),
          icon: Settings,
          submenus: [],
        },
      ],
    },
  ];
}
