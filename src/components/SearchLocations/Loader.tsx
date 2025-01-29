export const Loader = () => (
  <div role="status" className="border-b-2 border-gray-300">
    <div className="cursor-pointer w-full px-2 py-4 text-left border-t-2 border-gray-300 flex gap-1 animate-pulse">
      <span className=" h-4 bg-gray-400 block w-32 rounded-sm"></span>
      <span className=" h-4 bg-gray-400 block w-16 rounded-sm"></span>
    </div>
    <div className="cursor-pointer w-full px-2 py-4 text-left border-t-2 border-gray-300 flex gap-1 animate-pulse">
      <span className=" h-4 bg-gray-400 block w-20 rounded-sm"></span>
      <span className=" h-4 bg-gray-400 block w-18 rounded-sm"></span>
    </div>
    <div className="cursor-pointer w-full px-2 py-4 text-left border-t-2 border-gray-300 flex gap-1 animate-pulse">
      <span className=" h-4 bg-gray-400 block w-34 rounded-sm"></span>
      <span className=" h-4 bg-gray-400 block w-10 rounded-sm"></span>
    </div>
    <span className="sr-only">Loading search results</span>
  </div>
);
