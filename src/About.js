import React from "react";
import { Link } from "react-router-dom";

const About = (props) => {
  const { id, name, category, weight } = props.match.params;

  return (
    <div>
      <h4>About Me</h4>
      <p>
        Hi my name is <strong>Leanne Graham</strong> a.k.a Bret
      </p>
      <p>I'm working for "Romaguera-Crona" as engineer</p>
      <p>
        Please visit my site <a href="http://hildegard.org">hildegard.org</a>
      </p>
      <p>Don't hesitate to write me any questions on sincere@april.biz</p>
      <p>
        Идентификатор: {id}, имя: {name}, категория: {category}({weight})
      </p>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </div>
  );
};

export default About;
