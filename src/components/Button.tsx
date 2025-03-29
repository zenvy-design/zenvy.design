import React from "react";
import clsx from "clsx";
import Ripple from "../utils/Ripple";

type ButtonProps = {
  text: string;
  width?: "full" | "fit";
  onClick?: () => void;
  variant?: "primary" | "base" | "solid" | "text";
  status?: "success" | "error" | "warning";
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  icon?: React.ReactNode;
  isIconOnly?: boolean;
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
};

const MainButton = ({
  text,
  width,
  onClick,
  variant = "primary",
  status,
  iconLeft,
  iconRight,
  icon,
  isIconOnly = false,
  size = "md",
  disabled,
}: ButtonProps) => {
  const { ripples, addRipple } = Ripple();

  const statusVariants = {
    primary:
      "from-primary-600 to-primary-700 border-primary-400 hover:outline-primary-200",
    error:
      "from-error-600 to-error-700 border-error-400 hover:outline-error-200",
    success:
      "from-success-600 to-success-700 border-success-400 hover:outline-success-200",
    warning:
      "from-warning-600 to-warning-700 border-warning-400 hover:outline-warning-200",
  };

  const getTypeClasses = () => {
    const buttonStatusClass = status
      ? statusVariants[status]
      : statusVariants.primary;
    const statusColor = status ? status : "primary";
    const borderColor = status ? `${statusColor}-400` : "border";

    const sizeClasses = {
      sm: isIconOnly
        ? "h-[32px] w-[32px] min-h-[32px] min-w-[32px]"
        : "h-[32px] min-h-[32px] max-h-[32px]",
      md: isIconOnly
        ? "h-[36px] w-[36px] min-h-[36px] min-w-[36px]"
        : "h-[36px] min-h-[36px] max-h-[36px]",
      lg: isIconOnly
        ? "h-[40px] w-[40px] min-h-[40px] min-w-[40px]"
        : "h-[40px] min-h-[40px] max-h-[40px]",
    };

    return clsx(
      "rounded-md whitespace-nowrap relative flex flex-row items-center justify-center gap-4 ease-in-out px-12 transition-transform active:scale-95 duration-150",
      {
        [`px-4 bg-gradient-to-b ${buttonStatusClass} border text-white hover:outline hover:outline-2`]:
          variant === "primary",
        [`px-4 bg-background border border-${borderColor} text-${statusColor}-700 hover:outline hover:outline-2 hover:outline-${statusColor}-200 hover:border-${statusColor}-600`]:
          variant === "solid",
        [`px-4 bg-elevation border border-${borderColor} text-${statusColor}-700 hover:outline hover:outline-2 hover:outline-${statusColor}-200 hover:border-${statusColor}-600`]:
          variant === "base",
        "opacity-50 pointer-events-none select-none grayscale cursor-not-allowed hover:outline-none hover:border-border filter saturate-50 bg-opacity-75":
          disabled,
        "cursor-pointer": !disabled,
        "w-full": width === "full" && !isIconOnly,
        "w-fit": (width === "fit" || !width) && !isIconOnly,
        [sizeClasses[size]]: true,
        "!p-0": isIconOnly,
      }
    );
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!disabled) {
      addRipple(e);
      onClick?.();
    }
  };

  return (
    <button
      className={clsx(getTypeClasses(), "overflow-hidden relative")}
      onClick={handleClick}
      disabled={disabled}
    >
      {isIconOnly ? (
        <span className="flex items-center justify-center w-full h-full">
          {icon}
        </span>
      ) : (
        <>
          {iconLeft && (
            <span className="flex items-center leading-none">{iconLeft}</span>
          )}
          <p
            className={clsx("whitespace-nowrap leading-none relative z-10", {
              "text-xs": size === "sm",
              "text-sm": size === "md",
              "text-md": size === "lg",
              "text-light": disabled,
            })}
          >
            {text}
          </p>
          {iconRight && (
            <span className="flex items-center leading-none">{iconRight}</span>
          )}
        </>
      )}
      {ripples}
    </button>
  );
};

export default MainButton;
