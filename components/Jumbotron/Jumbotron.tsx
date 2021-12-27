import { Children, ReactElement, ReactNode } from "react";
import clsx from "clsx";

interface IProps {
  children: ReactNode;
  gradient: string;
}

const Jumbotron = ({ children, gradient }: IProps) => {
  return <div className={clsx(" px-24 py-8 mx-auto", gradient)}>{children}</div>;
};

export default Jumbotron;
