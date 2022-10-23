import { Button } from "ui";
import { Logo } from "ui";
import Link from "next/link";

export default function Web() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center overflow-x-hidden">
      <svg
        className="fixed -z-10 animate-rotate"
        width="844"
        height="844"
        viewBox="0 0 844 844"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="422"
          cy="422"
          r="420.5"
          stroke="url(#paint0_linear_32_109)"
          strokeWidth="3"
        />
        <defs>
          <linearGradient
            id="paint0_linear_32_109"
            x1="422"
            y1="-1.09542e-06"
            x2="438.5"
            y2="85"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#4F46E5" />
            <stop offset="1" stopColor="#312E81" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
      <Logo />
      <p className="text-[1.5rem] text-gray-400">
        To make all your days easier
      </p>
      <Link href={"/motivations"}>
        <Button asChild className="mt-[44px]">
          <a>Read motivations</a>
        </Button>
      </Link>
    </div>
  );
}
