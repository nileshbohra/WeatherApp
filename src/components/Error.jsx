import React from "react";
import Slide from '@material-ui/core/Slide'

export default function Error(props) {
  return (
    <Slide in={true} direction="up" timeout={2000}>
    <div className="Error">
      <h1>{props.data.cod}</h1>
      <p>{props.data.message}</p>
    </div>
    </Slide>
  );
}
