import {Post} from "@/types/singlePost";
import React from "react";

const PostNewLabel = ({
  item,
  gridView,
}: {
  item: Post;
  gridView?: boolean | null;
}) => {
  const isLessThan24Hours = Date.now() - Number(item.date) < 86400000;
  if (isLessThan24Hours) {
    return (
      <>
        {gridView ? (
          <div className="absolute top-[12px] left-[12px] bg-green-600 text-[13px] px-[9px] py-[2px] rounded-sm text-white">
            NEW
          </div>
        ) : (
          <div className="absolute top-[12px] left-[12px] bg-green-600 w-3 h-3 rounded-full text-white"></div>
        )}
      </>
    );
  } else {
    return;
  }
};

export default PostNewLabel;
