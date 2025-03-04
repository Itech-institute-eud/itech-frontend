import { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

const Container: React.FC<ContainerProps> = ({ children, className = "" }) => {
  return (
    <div className={`mx-auto  w-full p-1 lg:p-5  sm:p-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
};

export default Container;
