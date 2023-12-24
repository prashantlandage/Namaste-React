
//html structure
{/* <div id="parent">
    <div id="child1">
        <h1> I am an H1 Tag</h1>
    </div>
    <div id="child2">
        <h>i am h2 tag</h>
    </div>
</div> */}

//React structure
const parent=React.createElement("div",
{id:"parent"},
[React.createElement("div",{id:"child1"},
React.createElement("h1",{},"I am an H1 Tag"),
React.createElement("h2",{},"I am an H2 Tag")),

React.createElement("div",{id:"child2"},
React.createElement("h1",{},"I am an H1 Tag"),
React.createElement("h2",{},"I am an H2 Tag"))]
)


const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
