# React Component Lifecycle
- For class components that extend React.Component
  - When should you use class components vs functional components?

## Class Components
- you can have state
- you have lifecycle Methods
- Container components tend to be class
   - more like or going to contain state

## Functional Components
- Start off making your component functional -> refactor to class if needed
- Presentational components tend to be functional (dumb components)

## Available Methods
- http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
- https://reactjs.org/docs/react-component.html

## Pokemonstr
- Walk through

## Lifecycle Methods only for class components

### Creation
- `componentDidMount()`
 - fetch
 - add extra event listeners
 - set up timers
 - things that require the DOM

#### Setting Initial State using Props

### Update
- `render()`
 - has a return value
 - don't update state here
- `componentDidUpdate()`
 - fetch maybe?

### Deletion
 - `componentWillUnmount()`
  - called right before element is removed from DOM
  - clean up things from componentDidMount

#### Where to put fetch?
- ComponentDidMount
- ComponentDidUpdate
- Event handlers

### React Hooks?

### Less used methods
- `shouldComponentUpdate()`
- `getDerivedStateFromProps()`
- `getSnapshotBeforeUpdate()`

### Deprecated Methods
- `componentWillMount()`
- `componentWillReceiveProps()`
- `componentWillUpdate()`
