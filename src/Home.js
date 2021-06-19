import React from "react";
import { Link } from "react-router-dom";

export default function Home(state) {
  return (
    <div>
      <img
        style={{ maxWidth: "100%" }}
        src="https://www.logodesign.net/logo/abstract-cuboid-building-4519ld.png"
        alt="d"
      />
      <h4>Домашняя страница</h4>
      <nav>
        <Link to="/about">About</Link>
        <br />
        <Link to="/about/1/Вадим">About/1/Вадим</Link>
        <br />
        <Link to="/about/2/Артем">About/2/Артем</Link>
        <br />
        <Link to="/about/3/Александр">About/3/Александр</Link>
        <br />
        <Link to="/about/3/Василий/худой-60">About/3/Василий/худой-60</Link>
        <br />
        <Link
          to={{
            pathname: "/about/3/Василий/худой-60",
            search: "?sort=name",
            hash: "#the-hash15",
            state: { fieldstate: "smth" },
          }}
          onClick={() => console.log(state)}
        >
          About/3/Василий/худой-60*
        </Link>
        <br />
        <Link to="/location">Location</Link>
        <br />
        <Link to="/posts">Posts</Link>
      </nav>
      <p>
        Это домашняя страница моего сайта. Тут можно найти основную информацию
      </p>
    </div>
  );
}
