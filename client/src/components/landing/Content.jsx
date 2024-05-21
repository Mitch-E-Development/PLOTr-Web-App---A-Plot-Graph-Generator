import React from "react";

import EntryCard from "./EntryCard";

const Content = () => {

  return (
    <div
      className="
        flex 
        h-[100vh]
        p-20 
        justify-center 
        items-center
        bg-[url('https://optiver.com/wp-content/uploads/2023/11/AdobeStock_626180909-scaled.jpeg')]"
    >
      <EntryCard />
    </div>
  );
};

export default Content;
