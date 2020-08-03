import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import StreamCreate from "./streams/StreamCreate";
import StreamList from "./streams/StreamList";
import StreamEdit from "./streams/StreamEdit";
import StreamDelete from "./streams/StreamCreate";
import StreamShow from "./streams/StreamShow";

import Header from "./Header";

const App = () => {
  return (
    <div className="ui-container">
      <BrowserRouter>
        <Header />
        <div>
          <Route path="/" exact component={StreamList} />
          <Route path="/streams/show" component={StreamShow} />
          <Route path="/streams/create" component={StreamCreate} />
          <Route path="/streams/edit" component={StreamEdit} />
          <Route path="/streams/delete" component={StreamDelete} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
