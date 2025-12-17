import { LuFileSpreadsheet, LuImage } from "react-icons/lu";
import { AiOutlineDownload } from "react-icons/ai";

const getFileIcon = (type: string) => {
  switch (type.toLowerCase()) {
    case "xls":
    case "xlsx":
      return <LuFileSpreadsheet size={32} className="text-[#9DC209] mb-4" />;

    case "jpg":
    case "jpeg":
    case "png":
      return <LuImage size={32} className="text-[#9DC209] mb-4" />;

    default:
      return <LuFileSpreadsheet size={32} className="text-[#9DC209] mb-4" />;
  }
};
