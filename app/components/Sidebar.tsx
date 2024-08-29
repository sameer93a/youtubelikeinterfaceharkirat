export const Sidebar = () => {
  return (
    <div className="max-w-5xl">
      <SidebarItems name={"Home"} />
      <SidebarItems name={"Shorts"} />
      <SidebarItems name={"Subscription"} />
    </div>
  );
};

function SidebarItems({ name }: { name: string }) {
  return <div className=" p-4 bg-blue-400">{name}</div>;
}
