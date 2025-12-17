import {
  AiOutlineDownload,
  AiOutlineFileExcel,
  AiOutlineFileJpg,
} from "react-icons/ai";
export default function Sop() {
  const getFileIcon = (type: string) => {
    switch (type.toLowerCase()) {
      case "xls":
      case "xlsx":
        return <AiOutlineFileExcel size={32} className="text-[#9DC209] mb-4" />;

      case "jpg":
      case "jpeg":
      case "png":
        return <AiOutlineFileJpg size={32} className="text-[#9DC209] mb-4" />;

      default:
        return <AiOutlineFileExcel size={32} className="text-[#9DC209] mb-4" />;
    }
  };

  const files = [
    {
      title: "Flowchart JDIH Penambahan Fitur 2024",
      type: "XLS",
      url: "/files/flowchart-jdih-2024.xls",
    },
    {
      title: "Flowchart JDIH Penambahan Fitur 2024",
      type: "JPEG",
      url: "/files/flowchart-jdih-2024.jpeg",
    },
  ];
  return (
    <section id="sop-jdih" className="py-10 md:pt-0 md:pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 xl:px-0 ">
        <h2 className="text-[32px] leading-10 tracking-[-0.02em] text-[#097969] font-bold mb-10">
          SOP
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {files.map((file, index) => (
            <a
              key={index}
              href={file.url}
              download
              className="bg-white border border-black/10 rounded-[20px] px-10 py-6
                         cursor-pointer transition-all duration-300
                         hover:shadow-md hover:-translate-y-1"
            >
              {/* Icon dynamic */}
              {getFileIcon(file.type)}

              {/* Title */}
              <p className="font-inter text-base font-bold leading-6 text-black opacity-[0.6] mb-4">
                {file.title}
              </p>

              {/* Download */}
              <div className="flex items-center gap-2 text-black opacity-[0.6]">
                <AiOutlineDownload size={18} />
                <span className="font-inter text-sm font-medium">
                  .{file.type}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
