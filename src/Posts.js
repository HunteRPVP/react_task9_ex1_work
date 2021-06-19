import React, { Suspense, lazy } from "react";
import { fetchData } from "./Api";
import loading from "./1487.gif";

const ProfileDetails = lazy(() => import("./ProfileDetails"));
const ProfilePosts = lazy(() => import("./ProfilePosts"));

const Spinner = () => (
  <img
    src={loading}
    alt="loading..."
    loop="infinite"
    style={{ width: "50px", margin: "auto", display: "block" }}
  />
);

function Posts(props) {
  const queryParams = new URLSearchParams(props.location.search);

  const userId = queryParams.get("userId");

  const resource = fetchData(userId);

//   if (userId) {
//     setResource(fetchData(userId));
//   }

  return (
    <div>
      <Suspense fallback={<Spinner />}>
        {resource && (
          <p>
            <ProfileDetails resource={resource} />
            <ProfilePosts resource={resource} />
          </p>
        )}
      </Suspense>
    </div>
  );
}

export default Posts;
