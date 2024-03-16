import { useEffect, useMemo, ReactNode } from "react";
import { createPortal } from "react-dom";

const modalRootElement = document.querySelector("#modal")!;

export const CreateModal = ({
  children,
  id,
}: {
  children: ReactNode;
  id: string;
}) => {
  // const element = useMemo(() => document.createElement("div"), []);
  // useEffect(() => {
  //   modalRootElement.appendChild(element);
  //   return () => {
  //     modalRootElement.removeChild(element);
  //   };
  // });
  return createPortal(<div id={id}>{children}</div>, modalRootElement);
};
