import React from "react";
import Rainbow from "../hoc/Rainbow";

const About = () => {
  return (
    <div className="container">
      <h4 className="center">About</h4>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto optio
        sit aliquam, animi, provident ab reprehenderit officia est pariatur
        officiis illo aperiam odio ipsum reiciendis aliquid, aut maxime debitis
        ex.
      </p>
    </div>
  );
};

export default Rainbow(About);
