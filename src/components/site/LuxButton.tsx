import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

const variants = {
  gold: "bg-primary text-primary-foreground hover:bg-foreground hover:text-background",
  outline: "border border-foreground/40 text-foreground hover:border-primary hover:text-primary",
  ghost: "text-foreground underline-offset-8 hover:text-primary hover:underline",
};

type Props = { variant?: keyof typeof variants } & (
  | ({ href: string } & ComponentProps<"a">)
  | ({ href?: undefined } & ComponentProps<"button">)
);

export function LuxButton({ variant = "gold", className, ...props }: Props) {
  const cls = cn(
    "group inline-flex items-center justify-center gap-3 px-7 py-4 text-sm font-medium tracking-[0.14em] uppercase transition-all duration-500 disabled:opacity-60",
    variants[variant],
    className,
  );
  if (props.href !== undefined) return <a className={cls} {...(props as ComponentProps<"a">)} />;
  return <button className={cls} {...(props as ComponentProps<"button">)} />;
}
