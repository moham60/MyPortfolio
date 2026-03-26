"use client";
import clsx from "clsx";
import { usePathname, useRouter } from "next/navigation";

export default function LinkTransition({ href, children, className, style }) {
  const router = useRouter();
  const pathname = usePathname();
  const handleClick = (e) => {
    e.preventDefault();
    document.startViewTransition(() => {
      router.push(href);
    });
  };

  return (
    <a href={href} onClick={handleClick} className={clsx("transition-all duration-300", className)} style={style}>
      {children}
    </a>
  );
}
