import React, { useState } from "react";
import ApplicationViews from "./ApplicationViews";

const Park = () => {
//   const isAuthenticated = () => sessionStorage.getItem("credentials") !== null;

//   const [hasUser, setHasUser] = useState(isAuthenticated());


//   const setUser = user => {
//     sessionStorage.setItem("credentials", JSON.stringify(user));
//     setHasUser(isAuthenticated());
//   };

//   const clearUser = () => {
//     sessionStorage.clear();
//     setHasUser(isAuthenticated());
//   }

  return (
    <>
      <div id="App">
      <ApplicationViews/>
      </div>
    </>
  );
}

export default Park;