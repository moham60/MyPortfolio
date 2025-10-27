"use client";
import clsx from "clsx";
import { usePathname, useRouter } from "next/navigation";

export default function LinkTransition({ href, children }) {
  const router = useRouter();
  const pathname = usePathname();//to get current path
  const handleClick = (e) => {
    e.preventDefault();
    document.startViewTransition(() => {
      router.push(href);
    });
  };
  const isActive = pathname == href;

  return (
    <a href={href} onClick={handleClick}
      className={clsx('transition-all duration-300 px-3 py-2 rounded-md text-sm font-medium',isActive?"dark:text-purple-400 text-purple-500 bg-purple-600/10 dark:bg-purple-500/10":"dark:text-gray-300 text-gray-600 dark:hover:text-purple-400 hover:text-purple-500 dark:hover:bg-gray-800/60")}
    >
      {children}
    </a>
  );
}
