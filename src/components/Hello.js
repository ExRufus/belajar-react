import React from "react";

function Hello(props) {
  const { user } = props
  return(
    <>
      <h1>Hello, { user.name }! {user.age}, {user.status}</h1>
    </>
  )
}

export default Hello;