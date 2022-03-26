import { ReactNode } from "react";
import { motion } from "framer-motion";

interface IProps {
  children: ReactNode;
}

const Layout = ({ children }: IProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container flex flex-col px-8 mx-auto md:px-24"
    >
      {children}
    </motion.div>
  );
};

export default Layout;
