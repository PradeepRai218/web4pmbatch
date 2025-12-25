import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function Sidebar() {
  let pathName = usePathname();
  return (
    <div className="dashNav w-full flex flex-col justify-center gap-2 border-r border-gray-300 pr-5">
      <ul className="flex flex-col gap-1">
        <Link href={"/Deshbord"}>
          <li
            className={
              pathName == "/Deshbord"
                ? "bg-[#C09578] p-[8px_20px] text-white cursor-pointer rounded "
                : "bg-black p-[8px_20px] text-white cursor-pointer rounded hover:bg-[#C09578]"
            }
          >
            My Dashboard
          </li>
        </Link>
        <Link href={"/Deshbord/orders"}>
          <li className="bg-black p-[8px_20px] text-white cursor-pointer rounded hover:bg-[#C09578]">
            Orders
          </li>
        </Link>
        <Link href={'/Deshbord/addresses'}>
        <li className="bg-black p-[8px_20px] text-white cursor-pointer rounded hover:bg-[#C09578]">
          Address
        </li>
        </Link>
        <Link href={'/Deshbord/myProfile'}>
        <li className="bg-black p-[8px_20px] text-white cursor-pointer rounded hover:bg-[#C09578]">
          My profile
        </li>
        </Link>
        <Link href={'/Deshbord/change-password'}>
        <li className="bg-black p-[8px_20px] text-white cursor-pointer rounded hover:bg-[#C09578]">
          Change Password
        </li>
        </Link>
        <li className="bg-black p-[8px_20px] text-white cursor-pointer rounded hover:bg-[#C09578]">
          Logout
        </li>
      </ul>
    </div>
  );
}
