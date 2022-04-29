import React, { useState } from "react";

function StaticBlock() {
  const [contents, setContents] = useState("No Contents!");

  return (
    <div>
      <p>Contents: {contents}</p>
    </div>
  );
}

export default StaticBlock;
