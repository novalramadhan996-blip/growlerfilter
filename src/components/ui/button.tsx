import * as React from "react";

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "signal" | "console";
  size?: "default" | "lg";
}

export function Button({
  className = "",
  variant = "default",
  size = "default",
  ...props
}: ButtonProps) {
  const variantStyles = {
    default:
      "bg-white text-black hover:bg-gray-200",
    signal:
      "bg-cyan-500 text-black hover:bg-cyan-400",
    console:
      "border border-white/20 bg-black text-white hover:bg-white/10",
  };

  const sizeStyles = {
    default: "px-4 py-2 text-sm",
    lg: "px-6 py-3 text-base",
  };

  return (
    <button
      className={`
        rounded-md
        transition-all
        duration-200
        font-medium
        ${variantStyles[variant]}
        ${sizeStyles[size]}
        ${className}
      `}
      {...props}
    />
  );
}