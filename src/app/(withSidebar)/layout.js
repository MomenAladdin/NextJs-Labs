import Sidebar from "@/components/Sidebar/Sidebar";

const layout = ({ children }) => {
  return (
    <>
      <div>
        <Sidebar />;
      </div>
      <div className="border">{children}</div>;
    </>
  );
};

export default layout;
