import { useEffect } from "react";

export function usePageTitle(title) {
  useEffect(() => {
    document.title = `${title} · Ronson Equipment sample catalog`;
  }, [title]);
}
