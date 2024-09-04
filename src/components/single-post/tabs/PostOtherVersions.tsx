import React from "react";
import PostDownloadButton from "../PostDownloadButton";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";

const listOfVersions = [
  {
    date: "21 February, 2023",
    additionalInfo: "1.0.0 - Early Access",
    size: "18.97 МБ",
    link: "/post",
  },
  {
    date: "10 July, 2021",
    additionalInfo: "0.1.0 - Early Access",
    size: "18 МБ",
    link: "/post",
  },
];

const PostOtherVersions = () => {
  return (
    <div>
      <div className="flex flex-col gap-4">
        <h2 className="text-[22px] font-semibold ">Previous versions</h2>
        <div className="border border-[#4e4e4e] rounded-[12px] text-white/70">
          <Table>
            <TableHeader className="border-b border-[#4e4e4e] text-[15px]">
              <TableRow className="border-b border-[#4e4e4e]">
                <TableHead className="w-[155px]">Date</TableHead>
                <TableHead>Additional info</TableHead>
                <TableHead>Size</TableHead>
                <TableHead className="text-right">Link</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {listOfVersions.map((version) => (
                <TableRow
                  key={version.date}
                  className="border-b border-[#4e4e4e]">
                  <TableCell className="font-medium">{version.date}</TableCell>
                  <TableCell>{version.additionalInfo}</TableCell>
                  <TableCell>{version.size}</TableCell>

                  <TableCell className="text-right ">
                    <Link
                      href={version.link}
                      className="cursor-pointer hover:underline hover:text-white">
                      Download
                    </Link>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default PostOtherVersions;
