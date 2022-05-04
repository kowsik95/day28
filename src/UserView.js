import React from "react";
import { useParams } from "react-router-dom";

function UserView() {
  let params = useParams();
  return (
    <div>
      UserView <h1>{params.id}</h1>
    </div>
  );
}

export default UserView;
