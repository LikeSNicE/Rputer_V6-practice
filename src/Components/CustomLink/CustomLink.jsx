
import React from 'react';
import { Link,NavLink,useMatch } from "react-router-dom";

const CustomLink = ({to,children,className,...props}) => {

  const match = useMatch({
    path: to,
    end: to.length === 1
  });

  return (
    <Link
      to={to}
      style={{
        color: match ? "#485fc7" : "#4a4a4a",
      }}
      className={className}
      {...props}
    >
      {children}
    </Link>
  );
};

export default CustomLink;