export const BlogGameCartSkeleton = ({
  gridView = true,
}: {
  gridView?: boolean | null;
}) => {
  return (
    <div
      className={`bg-white dark:bg-bg animate-pulse overflow-hidden relative
        ${
          gridView
            ? "flex flex-col w-full h-full border-border/40 border rounded-lg"
            : "flex flex-row items-center gap-4 p-4 h-[80px] border-b border-x border-border/40"
        }`}>
      {/* Image skeleton */}
      <div
        className={`bg-gray-200 dark:bg-gray-700 ${
          gridView
            ? "aspect-[339/176] w-full max-[850px]:aspect-auto max-[850px]:h-[200px]"
            : "h-full aspect-square rounded-md"
        }`}
      />

      {/* Content skeleton */}
      <div
        className={`${
          gridView
            ? "p-4 flex flex-col flex-grow"
            : "flex flex-grow justify-between items-center"
        }`}>
        <div className={`${!gridView && "flex-grow"}`}>
          {/* Title skeleton */}
          <div
            className={`bg-gray-200 dark:bg-gray-700 rounded ${
              gridView ? "h-6 w-3/4 mb-2 max-[1200px]:h-5" : "h-5 w-2/3 mb-0"
            }`}
          />

          {/* Description skeleton (only in grid view) */}
          {gridView && (
            <div className="space-y-2 mb-6">
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full" />
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-4/5" />
            </div>
          )}
        </div>

        {/* Footer skeleton */}
        <div
          className={`flex ${gridView ? "justify-between" : "gap-8"} mt-auto`}>
          <div className="flex gap-4">
            <div className="h-4 w-16 bg-gray-200 dark:bg-gray-700 rounded" />
            <div className="h-4 w-16 bg-gray-200 dark:bg-gray-700 rounded" />
          </div>
          <div className="h-4 w-24 bg-gray-200 dark:bg-gray-700 rounded" />
        </div>
      </div>
    </div>
  );
};
