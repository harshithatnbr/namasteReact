    // const heading=React.createElement("h1",
    // {id:"heading"},"Hello world from namaste dev");
    // const root=ReactDOM.createRoot(document.getElementById("root"));
    // root.render(heading);
    import React from 'react';
    import ReactDOM  from 'react-dom/client';
    const parent=React.createElement("div",{id:'parent'}
    ,React.createElement("div",{id:'child'}
    ,React.createElement("h1",{id:'content'},"sgdhjgdjagdfghjs!!")));
    const root=ReactDOM.createRoot(document.getElementById("root"));
    root.render(parent);
    console.log(parent);


