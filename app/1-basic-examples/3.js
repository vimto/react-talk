/** @jsx React.DOM */

var Menu = React.createClass({displayName: 'Menu',
  render: function() {
    return (
      React.DOM.ol( {class:"elements"}, 
        React.DOM.li(null, "Hydrogen"),
        React.DOM.li(null, "Lithium"),
        React.DOM.li(null, "Beryllium")
      )
    );
  }
});

React.renderComponent(
  Elements(null ),
  document.getElementById('component-container')
);
