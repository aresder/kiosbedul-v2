"use client";

import { usePathname } from "next/navigation";
import { SideBarLayoutComponent } from "@/components/workplace/sidebar/SideBar";
import SidebarContentComponent from "@/components/workplace/sidebar/Content";
import {
  LayoutDashboard,
  Wrench,
  UserRound,
  UsersRound,
  ShoppingCart,
  MousePointerClick,
  ClipboardPenLine,
  Zap,
  ClipboardList,
  Gamepad2,
  CreditCard,
  ScanLine,
  TicketPercent,
  MessageCircleMore,
} from "lucide-react";

const disbaleSidebar = ["/workplace/login"];

export default function SideBar() {
  const pathname = usePathname();
  if (disbaleSidebar.includes(pathname)) return null;
  return (
    <SideBarLayoutComponent>
      {/* Dashboard */}
      <SidebarContentComponent
        icon={<LayoutDashboard size={20} />}
        text="Dashboard"
        link="/workplace"
        active={pathname === "/workplace"}
      />
      {/* Configuration */}
      <SidebarContentComponent
        icon={<Wrench size={20} />}
        link="/workplace/configuration"
        text="Configuration"
        active={pathname === "/workplace/configuration"}
      />
      {/* Admin account */}
      <SidebarContentComponent
        icon={<UserRound size={20} />}
        link="/workplace/admin"
        text="Admin account"
        active={pathname === "/workplace/admin"}
      />
      {/* Users account */}
      <SidebarContentComponent
        icon={<UsersRound size={20} />}
        link="/workplace/users"
        text="Users account"
        active={pathname === "/workplace/users"}
      />
      {/* Orders */}
      <SidebarContentComponent
        icon={<ShoppingCart size={20} />}
        link="/workplace/orders"
        text="Manage orders"
        active={pathname === "/workplace/orders"}
      />
      {/* Auto products */}
      <SidebarContentComponent
        icon={<MousePointerClick size={20} />}
        link="/workplace/auto"
        text="Auto products"
        active={pathname === "/workplace/auto"}
      />
      {/* Manage products */}
      <SidebarContentComponent
        icon={<ClipboardPenLine size={20} />}
        link="/workplace/mproducts"
        text="Manage products"
        active={pathname === "/workplace/mproducts"}
      />
      {/* Flash sale */}
      <SidebarContentComponent
        icon={<Zap size={20} />}
        link="/workplace/flashsale"
        text="Flash sale"
        active={pathname === "/workplace/flashsale"}
      />
      {/* Games categories */}
      <SidebarContentComponent
        icon={<ClipboardList size={20} />}
        link="/workplace/categories"
        text="Games categories"
        active={pathname === "/workplace/categories"}
      />
      {/* Manage games */}
      <SidebarContentComponent
        icon={<Gamepad2 size={20} />}
        link="/workplace/games"
        text="Manage games"
        active={pathname === "/workplace/games"}
      />
      {/* Payments method */}{" "}
      <SidebarContentComponent
        icon={<CreditCard size={20} />}
        link="/workplace/payments"
        text="Payments method"
        active={pathname === "/workplace/payments"}
      />
      {/* Top up method */}
      <SidebarContentComponent
        icon={<ScanLine size={20} />}
        link="/workplace/topup"
        text="Top up method"
        active={pathname === "/workplace/topup"}
      />
      {/* Voucher */}
      <SidebarContentComponent
        icon={<TicketPercent size={20} />}
        link="/workplace/voucher"
        text="Voucher"
        active={pathname === "/workplace/voucher"}
      />
      {/* Whatsapp notif */}
      <SidebarContentComponent
        icon={<MessageCircleMore size={20} />}
        link="/workplace/whatsapp"
        text="Whatsapp notif"
        active={pathname === "/workplace/whatsapp"}
      />
    </SideBarLayoutComponent>
  );
}
