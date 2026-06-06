import * as React from "react";

import { cn } from "@/lib/utils";

function Input({ className, type, ...props }) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "border-border bg-background text-foreground placeholder:text-muted-foreground/70 focus:border-accent flex h-[48px] rounded-md border px-4 py-3 text-base font-light outline-none",
        className
      )}
      {...props}
    />
  );
}

export { Input };
