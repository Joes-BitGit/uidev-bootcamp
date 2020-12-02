// React without JSX

function Avatar(props) {
  // return (
  //   React.createElement(
  //     'img',
  //     {src=props.img},
  //   )
  // );
  return <img src={props.img} />
}

function Label(props) {
  // return (
  //   React.createElement(
  //     'h1',
  //     null,
  //     props.labels,
  //   )
  // );
  return <h1>Name: {props.labels}</h1>
}

function ScreenName(props) {
  // return (
  //   React.createElement(
  //     'h3',
  //     null,
  //     props.screen,
  //   )
  // );
  return <h3>Username: {props.screen}</h3>
}

function Badge(props) {
  return (
    <div>
      <Avatar img={props.user.img} />
      {/* Avator(props.user.img); */}
      <Label labels={props.user.name} />
      {/* Label(props.user.name); */}
      <ScreenName screen={props.user.username} />
      {/* ScreenName(props.user.username); */}
    </div>
  )
}

ReactDOM.render(
  <Badge user={{
    name: 'Tyler McGinnis',
    img: 'https://avatars0.githubusercontent.com/u/2933430?v=3&s=460',
    username: 'tylermcginnis'
  }} />,
  document.getElementById('app')
)