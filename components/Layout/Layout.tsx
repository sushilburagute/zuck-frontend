import { ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

const Layout = ({ children }: IProps) => {
  return <div className="container flex flex-col px-8 mx-auto md:px-24">{children}</div>;
};

export default Layout;
