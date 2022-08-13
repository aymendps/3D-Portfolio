import { useEffect } from "react";

function PlayerActionControls({ allowControls, eKeyAction }) {
  useEffect(() => {
    const handleAction = (e) => {
      if (allowControls.current === false || e.code !== "KeyE") return;
      if (eKeyAction.current) {
        eKeyAction.current();
      }
    };
    document.addEventListener("keyup", handleAction);
    return () => {
      document.removeEventListener("keyup", handleAction);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
}

export default PlayerActionControls;
