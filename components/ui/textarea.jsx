import * as React from "react";

import { cn } from "@/lib/utils";

function Textarea({ className, ...props }) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "border-border bg-background text-foreground placeholder:text-muted-foreground/70 focus-visible:ring-accent flex min-h-[80px] rounded-md border px-4 py-3 text-base focus-visible:ring-1 focus-visible:outline-none",
        "focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    />
  );
}

export { Textarea };
