import { useEffect, useState } from "react";
interface LinkType {
  [x: string]: any;
  title: string;
  id: string;
}

export default function useSkipLinks() {
  const [skipLinks, setSkipLinks] = useState<LinkType[]>([]);

  useEffect(() => {
    const skipLinkElements: NodeListOf<Element> = document.querySelectorAll(
      "[data-skip-link]:not(pre):not(code)"
    );
    //@ts-ignore
    const links = Array.from(skipLinkElements, (skipLink: LinkType) => ({
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
      title: skipLink.dataset.skipLink,
      id: skipLink.id,
    }));

    setSkipLinks(links);
  }, []);

  return { skipLinks };
}
