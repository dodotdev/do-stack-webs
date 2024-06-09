import Image from "next/image";
import { Button } from "@repo/ui/components/button";
import { CounterButton, Link } from "@repo/ui/index";

export default function Page(): JSX.Element {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24">
      <div className="flex flex-col items-center justify-between min-h-screen p-24 w-screen h-screen top-[0] absolute gradient blur-3xl opacity-30"></div>
      <div className="relative flex items-center">
        {/*   <div className="relative flex flex-col items-center p-6 leading-relaxed text-white bg-black border border-opacity-25 bg-opacity-40 border-slate-300 rounded-xl">
                Turborepo Docs with:{" "}
                <span className="text-base font-bold underline underline-offset-2">
                  tailwindcss
                </span>{" "}
                &{" "}
                <span className="text-base font-bold underline underline-offset-2">
                  shadcn/ui
                </span>{" "}
                pre-configured.
                <Button className="mt-8 bg-green-800">Shadcn/UI Button</Button>
              </div> */}
        <div className="container">
          <h1 className="title">
            webs <br />
            <span>Kitchen Sink</span>
          </h1>
          <CounterButton />
          <div className="description mb-0 pb-0 ">
            Built By{" "}
            <Link href="https://do.dev" newTab>
              Do.dev
            </Link>
          </div>
          <div>With</div>
          <div className="description mt-0 pt-0 ">
            <Link href="https://turbo.build/repo" newTab>
              Turborepo
            </Link>
            {" & "}
            <Link href="https://nextjs.org/" newTab>
              Next.js
            </Link>
            {" & "}
            <Link href="https://v2.tailwindcss.com/" newTab>
              Tailwindcss
            </Link>
            {" & "}
            <Link href="https://ui.shadcn.com/" newTab>
              shadcn/ui
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
