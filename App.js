const parent = React.createElement("div",{id:"parent"},[React.createElement("div",{id:"child"},[React.createElement("h1",{},"I'm H1 Tag"),React.createElement("h2",{},"I,m H2 Tag"),]),
React.createElement("div",{id:"child2"},[
React.createElement("h1",{},"I'm H1 in Child2"),React.createElement("h2",{},"I'm h1 child2"),
]),
])


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
