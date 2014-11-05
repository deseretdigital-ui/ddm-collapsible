# DDM Collapsible

Collapsible component for DDM projects.


## React

This library is written in [React.js](http://facebook.github.io/react/).


## JSX Example

```jsx
React.render(
  <CollapsibleGroup>
    <Collapsible>
      <CollapsibleHead>Collapsible 1</CollapsibleHead>
      <CollapsibleBody>
        ...
      </CollapsibleBody>
    </Collapsible>
    <Collapsible>
      <CollapsibleHead>Collapsible 2</CollapsibleHead>
      <CollapsibleBody>
        ...
      </CollapsibleBody>
    </Collapsible>
  </CollapsibleGroup>,
  DOMElement
);
```

## Reference


### `CollapsibleGroup`

A container for multiple `Collapsible` components.

#### Props

+ `open={true|false}`: Sets the initial state of child `Collapsible` components to open.
+ `accordion={true}`: Enables accordion behavior where only one `Collapsible` is open at a time.


### `Collapsible`

A component that expands and collapses.

#### Props

+ `open={true|false}`: Sets the initial state to open. Overrides `open` prop from `CollapsibleGroup`.

#### Requirements

Must contain exactly one `CollapsibleHead` and one `CollapsibleBody`.


### `CollapsibleHead`

The head of a `Collapsible` component. Acts as a toggle for collapsing and expanding the `Collapsible`.

#### Props

+ `href="..."`: Convenience for making text in `CollapsibleHead` into a link. Setting this eliminates
the need of typing out an anchor tag.


### `CollapsibleBody`

The body of a `Collapsible` component. Expands and collapses using CSS transitions and max-height.

#### Props

No props available.


## CSS Transform

To enable css transform on the `CollapsibleHead` arrow add the `csstransforms` class to the `html`
element using a library such as [Modernizr](http://modernizr.com/).
