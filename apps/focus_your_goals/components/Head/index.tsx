import { Link } from "@tanstack/react-router"
import { TbArrowBackUp } from "react-icons/tb"

export default function () {
  return (
    <div className="flex items-center">
      <Link to={"/"} className="mr-auto text-gray-500">
        <TbArrowBackUp />
      </Link>
      <Link to={"/setting"}>setting</Link>
    </div>
  )
}
