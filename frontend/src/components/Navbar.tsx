
import React from "react";
import { CiBellOn } from "react-icons/ci";
import { IoIosSearch } from "react-icons/io";
import { AvatarWithName } from "@/components/ui/avatar";

function Navbar() {
  return (
    <>

      <nav className="bg-inherit p-2 shadow-md">
        <div className="flex items-center container mx-5">
          <div className="flex gap-3 w-full">
            <div className="relative">
              <input
                type="text"
                placeholder="What are you looking for?"
                className="p-1 pl-8 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:shadow-lg w-64 bg-slate-100 rounded-sm"
              />
              <IoIosSearch
                size={20}
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-orange-600"
              />
            </div>
            <div className="ml-auto">
              <CiBellOn
                size={34}
                className="mt-1 mr-11 p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div className="mr-24">
              <AvatarWithName name="XYZ" imageUrl="https://github.com/shadcn.png" />
            </div>
          </div>
        </div>
      </nav>

    </>
  );
}

export default Navbar;
