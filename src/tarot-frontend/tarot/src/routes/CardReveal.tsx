import React from "react";
function CardReveal() {
  const [disable, setDisable] = React.useState(false);

  return (
    <button disabled={disable} onClick={() => setDisable(true)}>
      Reveal!
    </button>
  );
}
export default CardReveal