import React, { useEffect, useState } from "react";

const GoogleAuth = () => {
  // Signed in state
  const [isSignedIn, setSignedIn] = useState(null);
  // Render the signIn and signOut buttons accordingly
  const renderAuthButton = () => {
    let message = "";
    isSignedIn === null
      ? (message = <div>Idk if signed in or not</div>)
      : isSignedIn === true
      ? (message = <div>Signed In</div>)
      : (message = <div>Not signed In</div>);
    return message;
  };
  // listens to the callback .then() if auth.isSignedIn changes
  const onAuthChange = () => {
    const auth = window.gapi.auth2.getAuthInstance();
    setSignedIn(auth.isSignedIn.get());
  };
  // Work like ComponentDidMount
  useEffect(() => {
    window.gapi.load("client:auth", () => {
      window.gapi.client
        .init({
          // ClientId is id of the person creating the OAuth for its users
          clientId: "Your clientId here",
          // Scope is what do you want to access through OAuth. In our case we need email .
          scope: "email",
        })
        // Call back after gapi auth is loaded
        .then(() => {
          const auth = window.gapi.auth2.getAuthInstance();

          setSignedIn(onAuthChange());
          // Listener for change on auth.isSignedIn
          auth.isSignedIn.listen(onAuthChange);
        });
    });
  }, []);
  return (
    <div>
      <h3>{renderAuthButton()}</h3>
    </div>
  );
};

export default GoogleAuth;
