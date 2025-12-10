import Link from "next/link";

export const Header = () => {
  return (
    <header className={"flex gap-4 wrapper py-2 bg-white border-b px-4"}>
      <Link href={"/"}>
        <button
          type="button"
          className="cursor-pointer flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
        >
          Main
        </button>
      </Link>
      <Link href={"/report"}>
        <button className="cursor-pointer flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]">
          Report 1
        </button>
      </Link>
    </header>
  );
};
