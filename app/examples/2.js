/** @jsx React.DOM */
// Again, we need the doc definition first

// A simple React component definition
var helloWorld = React.createClass({

  // It needs to at least define a render function, which returns Virtual Dom elements
  render: function() {
    return <h1>Hello world, form a seperate file</h1>
  }

});

React.renderComponent(
  // We can reference the component as if it were a HTML tag
  <helloWorld />,
  document.getElementById('component-container')
);

// Referencing the component in a HTML tag is the same as calling the function
console.log(<helloWorld />);
console.log(helloWorld());

