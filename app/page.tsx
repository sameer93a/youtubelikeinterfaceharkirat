import Image from "next/image";
import { Appbar } from "./components/Appbar";
import { Sidebar } from "./components/Sidebar";
import { Tagbar } from "./components/Tagbar";
import { Video } from "./components/Video";

export default function Home() {
  return (
    <div className=" bg-gray-600 h-screen">
      <Appbar />
      <div className="flex flex-row h-full">
        <Sidebar />
        <div className="p-4">
          <div className="flex flex-row gap-4">
            <Tagbar />
            <Tagbar />
            <Tagbar />
            <Tagbar />
          </div>
          <div className="flex flex-row gap-4 p-4">
            <Video />
            <Video />
            <Video />
          </div>
        </div>
      </div>
    </div>
  );
}
