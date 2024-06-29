import '@fortawesome/fontawesome-free/css/all.css';

export default function Sidebar() {
  return (
    <div className="bg-[#1C2A33] w-96 h-screen text-white">
      <div className="bg-gradient-to-r from-[#F7C22A] to-[#F1D585] p-4 text-black">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold font-jacques">All journals</h1>
        <i className="fas fa-chevron-down ml-2"></i>
      </div>
    </div>
      <div className='flex items-center'>
      <div className="border rounded-[30px] bg-white flex items-center justify-between">
        <input
          type="text"
          placeholder="Search journals..."
          className="focus:outline-none focus:ring-2 focus:ring-indigo-500 mx-4"
        />
        <i className="fas fa-search fa-sm text-black mx-2"></i>
      </div>
      <i className="fas fa-cog"></i>
      </div>
      <div className="mb-4">
        <h2 className="font-semibold mb-2">View</h2>
        <div>
          <label htmlFor="hide-covers" className="ml-2">
            Hide covers
          </label>
        </div>
        <div>
          <label htmlFor="hide-bookmarks" className="ml-2">
            Hide bookmarks
          </label>
        </div>
        <div>
          <label htmlFor="title-overlays" className="ml-2">
            Title overlays
          </label>
        </div>
      </div>
      <div className="mb-4">
        <h2 className="font-semibold mb-2">Sort by</h2>
        <div>
          <label htmlFor="most-recent" className="ml-2">
            Most recent
          </label>
        </div>
        <div>
          <label htmlFor="alphabetical" className="ml-2">
            Alphabetical
          </label>
        </div>
        <div>
          <label htmlFor="most-completed" className="ml-2">
            Most completed
          </label>
        </div>
        <div>
          <label htmlFor="new-sort" className="ml-2">
            New Sort
          </label>
        </div>
      </div>
      <div className="mb-4">
        <h2 className="font-semibold mb-2">Tags</h2>
        <input
          type="text"
          placeholder="Search Tags..."
          className="w-full p-2 rounded border mb-2"
        />
        <div className="flex flex-col">
          <div>
            <span className="bg-red-500 text-white p-1 rounded m-1">
              Recommended
            </span>
          </div>
          <div>
            <span className="bg-yellow-500 text-white p-1 rounded m-1">
              Insightful
            </span>
          </div>
          <div>
            <span className="bg-green-500 text-white p-1 rounded m-1">
              Pricey
            </span>
          </div>
          <div>
            <span className="bg-blue-500 text-white p-1 rounded m-1">
              Unique
            </span>
          </div>
          <div>
            <span className="bg-purple-500 text-white p-1 rounded m-1">
              Twist
            </span>
          </div>
          <div>
            <span className="bg-gray-500 text-white p-1 rounded m-1">
              Read Again
            </span>
          </div>
          <div>
            <span className="bg-gray-300 text-black p-1 rounded m-1">
              All tags...
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
