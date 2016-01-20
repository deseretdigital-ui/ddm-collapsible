"use strict";

function logOpen() {
  console.log('The collapsible opened and we heard about it despite being in a collapsible group!');
}

ReactDOM.render(React.createElement(
  CollapsibleGroup,
  { className: "my-collapsible-group" },
  React.createElement(
    Collapsible,
    { open: true, className: "my-collapsible" },
    React.createElement(
      CollapsibleHead,
      { className: "my-collapsible__head", href: "http://google.com" },
      "Hello World"
    ),
    React.createElement(
      CollapsibleBody,
      { className: "my-collapsible__body" },
      React.createElement(
        "ul",
        null,
        React.createElement(
          "li",
          null,
          "Item 1"
        ),
        React.createElement(
          "li",
          null,
          "Item 1"
        ),
        React.createElement(
          "li",
          null,
          "Item 1"
        ),
        React.createElement(
          "li",
          null,
          "Item 1"
        ),
        React.createElement(
          "li",
          null,
          "Item 1"
        )
      )
    )
  ),
  React.createElement(
    Collapsible,
    { onOpen: logOpen },
    React.createElement(
      CollapsibleHead,
      null,
      "Hello World"
    ),
    React.createElement(
      CollapsibleBody,
      null,
      React.createElement(
        "ul",
        null,
        React.createElement(
          "li",
          null,
          "Item 1"
        ),
        React.createElement(
          "li",
          null,
          "Item 1"
        ),
        React.createElement(
          "li",
          null,
          "Item 1"
        ),
        React.createElement(
          "li",
          null,
          "Item 1"
        ),
        React.createElement(
          "li",
          null,
          "Item 1"
        )
      )
    )
  )
), document.getElementById('react-example-1'));

ReactDOM.render(React.createElement(
  CollapsibleGroup,
  { accordion: true },
  React.createElement(
    Collapsible,
    { open: true },
    React.createElement(
      CollapsibleHead,
      { href: "http://google.com" },
      "Hello World"
    ),
    React.createElement(
      CollapsibleBody,
      null,
      React.createElement(
        "ul",
        null,
        React.createElement(
          "li",
          null,
          "Item 1"
        ),
        React.createElement(
          "li",
          null,
          "Item 1"
        ),
        React.createElement(
          "li",
          null,
          "Item 1"
        ),
        React.createElement(
          "li",
          null,
          "Item 1"
        ),
        React.createElement(
          "li",
          null,
          "Item 1"
        )
      )
    )
  ),
  React.createElement(
    Collapsible,
    null,
    React.createElement(
      CollapsibleHead,
      null,
      "Hello World"
    ),
    React.createElement(
      CollapsibleBody,
      null,
      React.createElement(
        "ul",
        null,
        React.createElement(
          "li",
          null,
          "Item 1"
        ),
        React.createElement(
          "li",
          null,
          "Item 1"
        ),
        React.createElement(
          "li",
          null,
          "Item 1"
        ),
        React.createElement(
          "li",
          null,
          "Item 1"
        ),
        React.createElement(
          "li",
          null,
          "Item 1"
        )
      )
    )
  ),
  React.createElement(
    Collapsible,
    null,
    React.createElement(
      CollapsibleHead,
      null,
      "Hello World"
    ),
    React.createElement(
      CollapsibleBody,
      null,
      React.createElement(
        "ul",
        null,
        React.createElement(
          "li",
          null,
          "Item 1"
        ),
        React.createElement(
          "li",
          null,
          "Item 1"
        ),
        React.createElement(
          "li",
          null,
          "Item 1"
        ),
        React.createElement(
          "li",
          null,
          "Item 1"
        ),
        React.createElement(
          "li",
          null,
          "Item 1"
        )
      )
    )
  ),
  React.createElement(
    Collapsible,
    null,
    React.createElement(
      CollapsibleHead,
      null,
      "Hello World"
    ),
    React.createElement(
      CollapsibleBody,
      null,
      React.createElement(
        "ul",
        null,
        React.createElement(
          "li",
          null,
          "Item 1"
        ),
        React.createElement(
          "li",
          null,
          "Item 1"
        ),
        React.createElement(
          "li",
          null,
          "Item 1"
        ),
        React.createElement(
          "li",
          null,
          "Item 1"
        ),
        React.createElement(
          "li",
          null,
          "Item 1"
        )
      )
    )
  )
), document.getElementById('react-example-2'));

ReactDOM.render(React.createElement(
  Collapsible,
  null,
  React.createElement(
    CollapsibleHead,
    { href: "http://google.com" },
    "Freedom!"
  ),
  React.createElement(
    CollapsibleBody,
    null,
    React.createElement(
      "ul",
      null,
      React.createElement(
        "li",
        null,
        "Item 1"
      ),
      React.createElement(
        "li",
        null,
        "Item 2"
      ),
      React.createElement(
        "li",
        null,
        "Item 3"
      ),
      React.createElement(
        "li",
        null,
        "Item 4"
      ),
      React.createElement(
        "li",
        null,
        "Item 5"
      )
    )
  )
), document.getElementById('react-example-3'));

ReactDOM.render(React.createElement(
  Collapsible,
  { open: true },
  React.createElement(
    CollapsibleHead,
    { href: "http://google.com" },
    "Freedom!"
  ),
  React.createElement(
    CollapsibleBody,
    null,
    React.createElement(
      "ul",
      null,
      React.createElement(
        "li",
        null,
        "Item 1"
      ),
      React.createElement(
        "li",
        null,
        "Item 2"
      ),
      React.createElement(
        "li",
        null,
        "Item 3"
      ),
      React.createElement(
        "li",
        null,
        "Item 4"
      ),
      React.createElement(
        "li",
        null,
        "Item 5"
      )
    )
  )
), document.getElementById('react-example-4'));

ReactDOM.render(React.createElement(
  CollapsibleGroup,
  { open: true },
  React.createElement(
    Collapsible,
    null,
    React.createElement(
      CollapsibleHead,
      { href: "http://google.com" },
      "Hello World"
    ),
    React.createElement(
      CollapsibleBody,
      null,
      React.createElement(
        "ul",
        null,
        React.createElement(
          "li",
          null,
          "Item 1"
        ),
        React.createElement(
          "li",
          null,
          "Item 1"
        ),
        React.createElement(
          "li",
          null,
          "Item 1"
        ),
        React.createElement(
          "li",
          null,
          "Item 1"
        ),
        React.createElement(
          "li",
          null,
          "Item 1"
        )
      )
    )
  ),
  React.createElement(
    Collapsible,
    null,
    React.createElement(
      CollapsibleHead,
      null,
      "Hello World"
    ),
    React.createElement(
      CollapsibleBody,
      null,
      React.createElement(
        "ul",
        null,
        React.createElement(
          "li",
          null,
          "Item 1"
        ),
        React.createElement(
          "li",
          null,
          "Item 1"
        ),
        React.createElement(
          "li",
          null,
          "Item 1"
        ),
        React.createElement(
          "li",
          null,
          "Item 1"
        ),
        React.createElement(
          "li",
          null,
          "Item 1"
        )
      )
    )
  )
), document.getElementById('react-example-5'));

ReactDOM.render(React.createElement(
  CollapsibleGroup,
  { open: true },
  React.createElement(
    Collapsible,
    null,
    React.createElement(
      CollapsibleHead,
      { href: "http://google.com" },
      "Collapsible Head 1"
    ),
    React.createElement(
      CollapsibleBody,
      null,
      React.createElement(
        CollapsibleGroup,
        { open: true },
        React.createElement(
          Collapsible,
          null,
          React.createElement(
            CollapsibleHead,
            { href: "http://google.com" },
            "Nested Collapsible Head 1"
          ),
          React.createElement(
            CollapsibleBody,
            null,
            React.createElement(
              "ul",
              null,
              React.createElement(
                "li",
                null,
                "Item 1"
              ),
              React.createElement(
                "li",
                null,
                "Item 1"
              ),
              React.createElement(
                "li",
                null,
                "Item 1"
              ),
              React.createElement(
                "li",
                null,
                "Item 1"
              ),
              React.createElement(
                "li",
                null,
                "Item 1"
              )
            )
          )
        ),
        React.createElement(
          Collapsible,
          null,
          React.createElement(
            CollapsibleHead,
            null,
            "Nested Collapsible Head 2"
          ),
          React.createElement(
            CollapsibleBody,
            null,
            React.createElement(
              "ul",
              null,
              React.createElement(
                "li",
                null,
                "Item 1"
              ),
              React.createElement(
                "li",
                null,
                "Item 1"
              ),
              React.createElement(
                "li",
                null,
                "Item 1"
              ),
              React.createElement(
                "li",
                null,
                "Item 1"
              ),
              React.createElement(
                "li",
                null,
                "Item 1"
              )
            )
          )
        )
      )
    )
  ),
  React.createElement(
    Collapsible,
    null,
    React.createElement(
      CollapsibleHead,
      null,
      "Collapsible Head 2"
    ),
    React.createElement(
      CollapsibleBody,
      null,
      React.createElement(
        "ul",
        null,
        React.createElement(
          "li",
          null,
          "Item 1"
        ),
        React.createElement(
          "li",
          null,
          "Item 1"
        ),
        React.createElement(
          "li",
          null,
          "Item 1"
        ),
        React.createElement(
          "li",
          null,
          "Item 1"
        ),
        React.createElement(
          "li",
          null,
          "Item 1"
        )
      )
    )
  )
), document.getElementById('react-example-6'));

var Example7 = React.createClass({
  displayName: "Example7",

  render: function render() {
    return React.createElement(
      "div",
      { className: "useless-react-example-7-wrapper" },
      React.createElement(
        "button",
        { onClick: this.close },
        "Close Em"
      ),
      React.createElement(
        CollapsibleGroup,
        { open: true, ref: "collapsibles" },
        React.createElement(
          Collapsible,
          null,
          React.createElement(
            CollapsibleHead,
            { href: "http://google.com" },
            "Hello World"
          ),
          React.createElement(
            CollapsibleBody,
            null,
            React.createElement(
              "ul",
              null,
              React.createElement(
                "li",
                null,
                "Item 1"
              ),
              React.createElement(
                "li",
                null,
                "Item 1"
              ),
              React.createElement(
                "li",
                null,
                "Item 1"
              ),
              React.createElement(
                "li",
                null,
                "Item 1"
              ),
              React.createElement(
                "li",
                null,
                "Item 1"
              )
            )
          )
        ),
        React.createElement(
          Collapsible,
          null,
          React.createElement(
            CollapsibleHead,
            null,
            "Hello World"
          ),
          React.createElement(
            CollapsibleBody,
            null,
            React.createElement(
              "ul",
              null,
              React.createElement(
                "li",
                null,
                "Item 1"
              ),
              React.createElement(
                "li",
                null,
                "Item 1"
              ),
              React.createElement(
                "li",
                null,
                "Item 1"
              ),
              React.createElement(
                "li",
                null,
                "Item 1"
              ),
              React.createElement(
                "li",
                null,
                "Item 1"
              )
            )
          )
        ),
        React.createElement(
          Collapsible,
          null,
          React.createElement(
            CollapsibleHead,
            null,
            "Hello World"
          ),
          React.createElement(
            CollapsibleBody,
            null,
            React.createElement(
              "ul",
              null,
              React.createElement(
                "li",
                null,
                "Item 1"
              ),
              React.createElement(
                "li",
                null,
                "Item 1"
              ),
              React.createElement(
                "li",
                null,
                "Item 1"
              ),
              React.createElement(
                "li",
                null,
                "Item 1"
              ),
              React.createElement(
                "li",
                null,
                "Item 1"
              )
            )
          )
        ),
        React.createElement(
          Collapsible,
          null,
          React.createElement(
            CollapsibleHead,
            null,
            "Hello World"
          ),
          React.createElement(
            CollapsibleBody,
            null,
            React.createElement(
              "ul",
              null,
              React.createElement(
                "li",
                null,
                "Item 1"
              ),
              React.createElement(
                "li",
                null,
                "Item 1"
              ),
              React.createElement(
                "li",
                null,
                "Item 1"
              ),
              React.createElement(
                "li",
                null,
                "Item 1"
              ),
              React.createElement(
                "li",
                null,
                "Item 1"
              )
            )
          )
        )
      )
    );
  },

  close: function close() {
    this.refs.collapsibles.close();
  }
});

ReactDOM.render(React.createElement(Example7, null), document.getElementById('react-example-7'));