  function logOpen() {
    console.log('The collapsible opened and we heard about it despite being in a collapsible group!');
  }

  ReactDOM.render(
    <CollapsibleGroup className="my-collapsible-group">
      <Collapsible open={true} className="my-collapsible">
        <CollapsibleHead className="my-collapsible__head" href="http://google.com">Hello World</CollapsibleHead>
        <CollapsibleBody className="my-collapsible__body">
          <ul>
            <li>Item 1</li>
            <li>Item 1</li>
            <li>Item 1</li>
            <li>Item 1</li>
            <li>Item 1</li>
          </ul>
        </CollapsibleBody>
      </Collapsible>
      <Collapsible onOpen={logOpen}>
        <CollapsibleHead>Hello World</CollapsibleHead>
        <CollapsibleBody>
          <ul>
            <li>Item 1</li>
            <li>Item 1</li>
            <li>Item 1</li>
            <li>Item 1</li>
            <li>Item 1</li>
          </ul>
        </CollapsibleBody>
      </Collapsible>
    </CollapsibleGroup>,
    document.getElementById('react-example-1')
  );

  ReactDOM.render(
      <CollapsibleGroup accordion={true}>
        <Collapsible open={true}>
          <CollapsibleHead href="http://google.com">Hello World</CollapsibleHead>
          <CollapsibleBody>
            <ul>
              <li>Item 1</li>
              <li>Item 1</li>
              <li>Item 1</li>
              <li>Item 1</li>
              <li>Item 1</li>
            </ul>
          </CollapsibleBody>
        </Collapsible>
        <Collapsible>
          <CollapsibleHead>Hello World</CollapsibleHead>
          <CollapsibleBody>
            <ul>
              <li>Item 1</li>
              <li>Item 1</li>
              <li>Item 1</li>
              <li>Item 1</li>
              <li>Item 1</li>
            </ul>
          </CollapsibleBody>
        </Collapsible>
        <Collapsible>
          <CollapsibleHead>Hello World</CollapsibleHead>
          <CollapsibleBody>
            <ul>
              <li>Item 1</li>
              <li>Item 1</li>
              <li>Item 1</li>
              <li>Item 1</li>
              <li>Item 1</li>
            </ul>
          </CollapsibleBody>
        </Collapsible>
        <Collapsible>
          <CollapsibleHead>Hello World</CollapsibleHead>
          <CollapsibleBody>
            <ul>
              <li>Item 1</li>
              <li>Item 1</li>
              <li>Item 1</li>
              <li>Item 1</li>
              <li>Item 1</li>
            </ul>
          </CollapsibleBody>
        </Collapsible>
      </CollapsibleGroup>,
      document.getElementById('react-example-2')
    );

    ReactDOM.render(
      <Collapsible>
        <CollapsibleHead href="http://google.com">Freedom!</CollapsibleHead>
        <CollapsibleBody>
          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
            <li>Item 4</li>
            <li>Item 5</li>
          </ul>
        </CollapsibleBody>
      </Collapsible>,
      document.getElementById('react-example-3')
    );

    ReactDOM.render(
      <Collapsible open={true}>
        <CollapsibleHead href="http://google.com">Freedom!</CollapsibleHead>
        <CollapsibleBody>
          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
            <li>Item 4</li>
            <li>Item 5</li>
          </ul>
        </CollapsibleBody>
      </Collapsible>,
      document.getElementById('react-example-4')
    );

    ReactDOM.render(
      <CollapsibleGroup open={true}>
        <Collapsible>
          <CollapsibleHead href="http://google.com">Hello World</CollapsibleHead>
          <CollapsibleBody>
            <ul>
              <li>Item 1</li>
              <li>Item 1</li>
              <li>Item 1</li>
              <li>Item 1</li>
              <li>Item 1</li>
            </ul>
          </CollapsibleBody>
        </Collapsible>
        <Collapsible>
          <CollapsibleHead>Hello World</CollapsibleHead>
          <CollapsibleBody>
            <ul>
              <li>Item 1</li>
              <li>Item 1</li>
              <li>Item 1</li>
              <li>Item 1</li>
              <li>Item 1</li>
            </ul>
          </CollapsibleBody>
        </Collapsible>
      </CollapsibleGroup>,
      document.getElementById('react-example-5')
    );

    ReactDOM.render(
      <CollapsibleGroup open={true}>
        <Collapsible>
          <CollapsibleHead href="http://google.com">Collapsible Head 1</CollapsibleHead>
          <CollapsibleBody>
            <CollapsibleGroup open={true}>
              <Collapsible>
                <CollapsibleHead href="http://google.com">Nested Collapsible Head 1</CollapsibleHead>
                <CollapsibleBody>
                  <ul>
                    <li>Item 1</li>
                    <li>Item 1</li>
                    <li>Item 1</li>
                    <li>Item 1</li>
                    <li>Item 1</li>
                  </ul>
                </CollapsibleBody>
              </Collapsible>
              <Collapsible>
                <CollapsibleHead>Nested Collapsible Head 2</CollapsibleHead>
                <CollapsibleBody>
                  <ul>
                    <li>Item 1</li>
                    <li>Item 1</li>
                    <li>Item 1</li>
                    <li>Item 1</li>
                    <li>Item 1</li>
                  </ul>
                </CollapsibleBody>
              </Collapsible>
            </CollapsibleGroup>
          </CollapsibleBody>
        </Collapsible>
        <Collapsible>
          <CollapsibleHead>Collapsible Head 2</CollapsibleHead>
          <CollapsibleBody>
            <ul>
              <li>Item 1</li>
              <li>Item 1</li>
              <li>Item 1</li>
              <li>Item 1</li>
              <li>Item 1</li>
            </ul>
          </CollapsibleBody>
        </Collapsible>
      </CollapsibleGroup>,
      document.getElementById('react-example-6')
    );

    var Example7 = React.createClass({
      render: function () {
        return (
          <div className="useless-react-example-7-wrapper">
            <button onClick={this.close}>Close Em</button>
            <CollapsibleGroup open={true} ref="collapsibles">
              <Collapsible>
                <CollapsibleHead href="http://google.com">Hello World</CollapsibleHead>
                <CollapsibleBody>
                  <ul>
                    <li>Item 1</li>
                    <li>Item 1</li>
                    <li>Item 1</li>
                    <li>Item 1</li>
                    <li>Item 1</li>
                  </ul>
                </CollapsibleBody>
              </Collapsible>
              <Collapsible>
                <CollapsibleHead>Hello World</CollapsibleHead>
                <CollapsibleBody>
                  <ul>
                    <li>Item 1</li>
                    <li>Item 1</li>
                    <li>Item 1</li>
                    <li>Item 1</li>
                    <li>Item 1</li>
                  </ul>
                </CollapsibleBody>
              </Collapsible>
              <Collapsible>
                <CollapsibleHead>Hello World</CollapsibleHead>
                <CollapsibleBody>
                  <ul>
                    <li>Item 1</li>
                    <li>Item 1</li>
                    <li>Item 1</li>
                    <li>Item 1</li>
                    <li>Item 1</li>
                  </ul>
                </CollapsibleBody>
              </Collapsible>
              <Collapsible>
                <CollapsibleHead>Hello World</CollapsibleHead>
                <CollapsibleBody>
                  <ul>
                    <li>Item 1</li>
                    <li>Item 1</li>
                    <li>Item 1</li>
                    <li>Item 1</li>
                    <li>Item 1</li>
                  </ul>
                </CollapsibleBody>
              </Collapsible>
            </CollapsibleGroup>
          </div>
        );
      },

      close: function () {
        this.refs.collapsibles.close();
      }
    });

    ReactDOM.render(
      <Example7 />,
      document.getElementById('react-example-7')
    );

