import React, { useState } from "react";
import PopupMenu from "./PopupMenu";

const Click = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);

  return (
    <div>
      <PopupMenu isOpen={isPopupOpen} onClose={() => setPopupOpen(false)} />
    </div>
  );
};

export default Click;
