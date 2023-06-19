import { useEffect, useState } from "react";
interface LinkType {
  title: string;
  id: string;
}

export default function useSkipLinks() {
  const [skipLinks, setSkipLinks] = useState<LinkType[]>([]);

  useEffect(() => {
    const skipLinkElements: NodeListOf<Element> = document.querySelectorAll(
      "[data-skip-link]:not(pre):not(code)"
    );
    const links = Array.from(skipLinkElements, (skipLink: LinkType) => ({
      title: skipLink.dataset.skipLink,
      id: skipLink.id,
    }));

    setSkipLinks(links);
  }, []);

  return { skipLinks };
}
