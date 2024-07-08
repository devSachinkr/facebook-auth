import { useAuth } from "../provider/auth-provider";

const Dropdown = ({ pages }) => {
  const { setPageId, fetchPageInsights, pageId,setPageAccessToken } = useAuth();
  return (
    <div>
      <select
        name="Pages"
        className="w-60 flex items-center justify-center h-11 rounded-md bg-gradient-to-r from-red-500 via-blue-500 to-blue-700 font-semibold border-[2px] border-white "
        onChange={(e) => {
          setPageId(e.target.value);
        }}
        
      >
        <option value="pages" disabled selected>
          Pages
        </option>
        {pages ? (
          pages.data?.map((page) => {
            return (
              <option value={page.id} 
               key={page.id}
             className="font-semibold">
                {page.name}
              </option>
            );
          })
        ) : (
          <option value="">No pages</option>
        )}
      </select>
      {pages && (
        <div className="flex mt-4 justify-center w-full ">
          <button
            className="bg-black text-white font-semibold rounded-md   p-3 px-4 
        "
            onClick={() => fetchPageInsights    (pageId)}
          >
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
