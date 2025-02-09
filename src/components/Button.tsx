import React, { PropsWithChildren, ReactNode } from "react";
import styled, { css } from "styled-components";

// Define your button props
type ButtonProps = PropsWithChildren<{
  onClick?: () => void;
  variant?: "primary" | "base" | "solid" | "text";
  size?: "sm" | "md" | "lg";
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
}>;

// Helper functions for dynamic styles
const getSizeStyles = (size: "sm" | "md" | "lg") => {
  switch (size) {
    case "sm":
      return css`
        height: 32px;
        font-size: 12px;
        padding: 0px 12px;
      `;
    case "md":
      return css`
        height: 36px;
        font-size: 14px;
        padding: 0px 12px;
      `;
    case "lg":
      return css`
        height: 40px;
        font-size: 16px;
        padding: 0px 12px;
      `;
    default:
      return "";
  }
};

const getVariantStyles = (variant: "primary" | "base" | "solid" | "text") => {
  switch (variant) {
    case "primary":
      return css`
        border: 1px solid #3b82f6;
        background: linear-gradient(180deg, #2563eb 0%, #1d4ed8 100%);
        color: white;

        /* Hover effect */
        &:hover {
          border: 1px solid #60a5fa;
          box-shadow: 0px 0px 0px 2px #bfdbfe;
        }

        /* Disabled effect */
        &:disabled {
          border: 1px solid #e5e6eb;
          background: #e5e6eb;
          color: "#9CA3AF";
        }
      `;
    case "base":
      return css`
        border: 1px solid #e5e6eb;
        background: #f9fafb;
        color: #212529;

        /* Hover effect */
        &:hover {
          border: 1px solid #2563eb;
          box-shadow: 0px 0px 0px 2px #bfdbfe;
        }

        /* Disabled effect */
        &:disabled {
          border: 1px solid #e5e6eb;
          background: #e5e6eb;
          color: "#9CA3AF";
        }
      `;
    case "solid":
      return css`
        border: 1px solid #e5e6eb;
        background: #fff;
        color: #212529;

        /* Hover effect */
        &:hover {
          border: 1px solid #2563eb;
          box-shadow: 0px 0px 0px 2px #bfdbfe;
        }

        /* Disabled effect */
        &:disabled {
          border: 1px solid #e5e6eb;
          background: #e5e6eb;
          color: "#9CA3AF";
        }
      `;
    case "text":
      return css`
        border: 1px solid transparent;
        background-color: transparent;
        color: #212529;
        /* Hover effect */
        &:hover {
          border-radius: 8px;
          border: 1px solid #2563eb;
          background: transparent;
        }
        &:active {
          box-shadow: 0px 0px 0px 2px #bfdbfe;
        }

        /* Disabled effect */
        &:disabled {
          border: 1px solid #e5e6eb;
          color: "#9CA3AF";
        }
      `;
    default:
      return "";
  }
};

// Create a styled button component
const StyledButton = styled.button<{
  variant: "primary" | "base" | "solid" | "text";
  size: "sm" | "md" | "lg";
}>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 8px;
  cursor: pointer;
  gap: 8px;
  outline: none;
  transition: transform 0.1s ease, filter 0.1s ease, box-shadow 0.1s ease;
  transform-origin: center;

  /* Apply size and variant styles */
  ${({ size }) => getSizeStyles(size)}
  ${({ variant }) => getVariantStyles(variant)}


  /* Active (click) effect using scale for a smooth look */
  &:active {
    /* Force the height to remain the same to avoid rounding issues */
    height: ${({ size }) => {
      switch (size) {
        case "sm":
          return "32px";
        case "md":
          return "36px";
        case "lg":
          return "40px";
        default:
          return "36px";
      }
    }};
    transform: scale3d(0.98, 0.98, 1);
  }
`;

// Helper to determine the icon size based on button size
const getIconSize = (size: "sm" | "md" | "lg") => {
  switch (size) {
    case "sm":
      return "16px";
    case "md":
      return "18px";
    case "lg":
      return "20px";
    default:
      return "18px";
  }
};

// A styled span to wrap the icons
const IconContainer = styled.span<{
  margin?: string;
  size: "sm" | "md" | "lg";
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${({ size }) => getIconSize(size)};
  height: ${({ size }) => getIconSize(size)};
  ${({ margin }) => margin && `margin: ${margin};`}
`;

export const Button = ({
  children,
  onClick,
  variant = "primary",
  size = "md",
  iconLeft,
  iconRight,
}: ButtonProps) => {
  return (
    <StyledButton onClick={onClick} variant={variant} size={size}>
      {iconLeft && (
        <IconContainer size={size} margin="0 8px 0 0">
          {iconLeft}
        </IconContainer>
      )}
      {children}
      {iconRight && (
        <IconContainer size={size} margin="0 0 0 8px">
          {iconRight}
        </IconContainer>
      )}
    </StyledButton>
  );
};
