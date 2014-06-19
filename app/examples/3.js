/** @jsx React.DOM */

var Elements = React.createClass({displayName: 'Elements',
  render: function() {
    return (
      React.DOM.ol( {class:"element-list", id:"elements"}, 
        React.DOM.li(null, "Hydrogen"),
        React.DOM.li(null, "Lithium")
      )
    );
  }
});

React.renderComponent(
  Elements(null ),
  document.getElementById('component-container')
);
