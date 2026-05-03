import { cn } from "@/utils"
import React from "react"

const CardLayout = React.forwardRef<HTMLDivElement , React.HTMLAttributes<HTMLDivElement>>(
    ({ className , ...props} , ref) => (
        <div ref={ref}
        className={cn("bg-[#0E1012] rounded-2xl shadow-md  shadow-cyan-600", className)} 
        {...props}/>
    )
)
CardLayout.displayName = 'CardLayout';

export  {CardLayout}