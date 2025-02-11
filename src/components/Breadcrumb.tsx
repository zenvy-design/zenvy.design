import React from "react";
import styled, { css } from "styled-components";

// Define the shape of each breadcrumb item.
export interface BreadcrumbItem {
  /** The display text of the breadcrumb item */
  text: string;
  /** Optional icon displayed to the left of the text */
  iconLeft?: React.ReactNode;
  /** Optional icon displayed to the right of the text */
  iconRight?: React.ReactNode;
}

// Define the props for the Breadcrumb component.
export interface BreadcrumbProps {
  /** An array of breadcrumb items */
  items: BreadcrumbItem[];
  /** A separator between items. Default is ">" */
  separator?: React.ReactNode;
  /** Variant styling for the items: "primary" shows a background; "default" is plain text */
  variant?: "primary" | "default";
}

// Container for the entire breadcrumb navigation.
const BreadcrumbContainer = styled.nav<{ variant: "primary" | "default" }>`
  display: flex;
  align-items: center;
  width: max-content;
  gap: 4px;
  font-size: 14px;
  ${({ variant }) =>
    variant === "primary"
      ? css`
          background: #f9fafb;
          color: #212529;
          border-radius: 8px;
          border: 1px solid #e5e6eb;
          padding: 12px;
        `
      : css`
          color: inherit;
        `}
`;

// Container for each breadcrumb item. Styles change based on the variant.
const BreadcrumbItemContainer = styled.span<{ variant: "primary" | "default" }>`
  display: flex;
  align-items: center;
  gap: 4px;
`;

// The separator element.
const BreadcrumbSeparator = styled.span`
  display: flex;
  align-items: center;
`;

// Styled container for the left icon.
const IconLeftContainer = styled.span`
  display: flex;
  align-items: center;
  width: 18px;
  height: 18px;
`;

// Styled container for the right icon.
const IconRightContainer = styled.span`
  display: flex;
  align-items: center;
`;

export const Breadcrumb: React.FC<BreadcrumbProps> = ({
  items,
  separator = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
    >
      <path
        d="M6.75 13.5L11.25 9L6.75 4.5"
        stroke="#212529"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  ),
  variant = "default",
}) => {
  return (
    <BreadcrumbContainer variant={variant} aria-label="breadcrumb">
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <BreadcrumbItemContainer variant={variant}>
            {item.iconLeft && (
              <IconLeftContainer>{item.iconLeft}</IconLeftContainer>
            )}
            <span>{item.text}</span>
            {item.iconRight && (
              <IconRightContainer>{item.iconRight}</IconRightContainer>
            )}
          </BreadcrumbItemContainer>
          {index < items.length - 1 && (
            <BreadcrumbSeparator>{separator}</BreadcrumbSeparator>
          )}
        </React.Fragment>
      ))}
    </BreadcrumbContainer>
  );
};
