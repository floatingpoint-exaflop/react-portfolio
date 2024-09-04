import Navigation from "./Navigation";

export default function Header(props) {

    return (
      <header className="container-fluid">
        <Navigation creator={props.creator} title={props.title}/>
      </header>
    )
  }
