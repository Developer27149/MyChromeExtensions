import { Link,  useNavigate } from "@tanstack/react-router"
import { GoTasklist } from "react-icons/go";
import { CiCalendarDate } from "react-icons/ci";
import { CiTrash } from "react-icons/ci";
import { useEffect } from "react";

export default function () {
  const navigate = useNavigate()
  
  useEffect(() => {
    navigate({
      to: "/",
    })
  },  [])
  
  return (
    <div className="flex flex-col items-center h-full bg-white text-[32px] py-[8px] gap-4">
      <Link className="[&.active]:text-sky-500" to={"/"}>
        <GoTasklist />
      </Link>
      <Link className="[&.active]:text-sky-500" to={"/history"}>
        <CiCalendarDate/>
      </Link>
      <Link className="[&.active]:text-sky-500" to={"/trash"}>
        <CiTrash />
      </Link>
      <Link to="/profile" className="mt-auto">
        <img src="https://avatars.githubusercontent.com/u/1?v=4" alt="profile" className="w-[48px] rounded-full" />
      </Link>
    </div>
  )
}
