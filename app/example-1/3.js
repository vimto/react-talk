/** @jsx React.DOM */

var List = React.createClass({displayName: 'List',
  render: function() {
    return (
      React.DOM.ul(null, 
        React.DOM.li(null, "Item 1"),
        React.DOM.li(null, "Item 2")
      )
    );
  }
});

React.renderComponent(
  List(null ),
  document.getElementById('component-container')
);
