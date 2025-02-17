import React from "react";
import { CiBellOn } from "react-icons/ci";
import { IoIosSearch } from "react-icons/io";
import { AvatarWithName } from "@/components/ui/avatar";

function Navbar() {
  return (

    <nav className="bg-white rounded-lg p-2 shadow-md w-full">

      <div className="flex items-center justify-between w-full px-7">
        <div className="flex gap-3 w-full">
          {/* Search Bar */}
          <div className="relative flex-grow">
            <input
              type="text"
              placeholder="What are you looking for?"

              className="p-1 pl-8 border border-gray-300 focus:outline-none ring-2 ring-orange-500 focus:shadow-lg w-full max-w-xs bg-white rounded-sm"

            />
            <IoIosSearch
              size={20}
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-orange-600"
            />
          </div>

          {/* Notification Icon */}
          <div className="ml-3">
            <CiBellOn
              size={34}
              className="mt-1 p-2 border border-gray-300 rounded-md"
            />
          </div>

          {/* Avatar */}
          <div className="ml-3">
            <AvatarWithName name="XYZ" imageUrl="https://github.com/shadcn.png" />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;