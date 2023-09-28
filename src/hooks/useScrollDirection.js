import { useEffect, useState } from "react";

const useScrollDirection = () => {
  const [dir, setDir] = useState("up");

  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const handleScroll = () => {
      const scrollY = window.pageYOffset;
      const direction = scrollY > lastScrollY ? "down" : "up";

      if (
        direction !== dir &&
        (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)
      )
        setDir(direction);

      lastScrollY = scrollY > 0 ? scrollY : 0;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [dir]);

  return { dir };
};

export default useScrollDirection;
