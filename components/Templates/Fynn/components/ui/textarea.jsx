import * as React from "react"

import { cn } from "../../lib/utils"

const Textarea = React.forwardRef(({ className, onChange, value,...props }, ref) => {
  return (
    (<textarea
      className={cn(
        "flex min-h-[80px] w-full rounded-md border border-white/10 bg-primary px-3 py-2 text-[14px] placeholder:text-white/60 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      ref={ref}
      {...props} 
      onChange={onChange}
      value={value}/>)
  );
})
Textarea.displayName = "Textarea"

export { Textarea }
