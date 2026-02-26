import * as React from "react";

import { cn } from "@/lib/utils";

function Input({ className, type, ...props }) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "flex h-[48px] rounded-md border border-border bg-background px-4 py-3 text-base font-light text-foreground placeholder:text-muted-foreground/70 outline-none focus:border-accent",
        className
      )}
      {...props}
    />
  );
}

export { Input };
