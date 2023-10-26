import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Location } from "history"; // Import Location type from 'history' library

function ScrollToTop() {
  const location: Location = useLocation(); // Type-annotate the location object
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return null;
}

export default ScrollToTop;
