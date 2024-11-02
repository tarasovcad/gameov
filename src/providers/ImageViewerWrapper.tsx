import React, {useRef, useEffect} from "react";
import {Fancybox as NativeFancybox} from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

function ImageViewerWrapper({
  children,
  delegate = "[data-fancybox]",
  options = {},
}: {
  children: React.ReactNode;
  delegate?: string;
  options?: Record<string, any>;
}) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    NativeFancybox.bind(container, delegate, options);

    return () => {
      NativeFancybox.unbind(container);
      NativeFancybox.close();
    };
  }, [options, delegate]);

  return <div ref={containerRef}>{children}</div>;
}

export default ImageViewerWrapper;
