export const Appbar = () => {
  return (
    <div className="bg-red-400">
      <div className="flex justify-between">
        <LeftMenu />
        <SearchBar />
        <RightMenu />
      </div>
    </div>
  );
};

function LeftMenu() {
  return (
    <div className="flex flex-row p-4 gap-4">
      <div className="">Icon</div>
      <div>logo Youtube</div>
    </div>
  );
}
function SearchBar() {
  return <div className="flex flex-row p-4">Search Bard</div>;
}

function RightMenu() {
  return (
    <div className="flex flex-row p-4 gap-4">
      <div>A</div>
      <div>B</div>
      <div>C</div>
    </div>
  );
}
