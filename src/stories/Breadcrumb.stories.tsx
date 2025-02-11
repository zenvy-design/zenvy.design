import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Breadcrumb, BreadcrumbProps } from "@/components/Breadcrumb";

const meta: Meta<BreadcrumbProps> = {
  title: "Components/Breadcrumb",
  component: Breadcrumb,
  tags: ["autodocs"],
  argTypes: {
    items: {
      control: "object",
      description:
        "Array of breadcrumb items (each with text and optional icons)",
    },
    separator: {
      description: "Separator displayed between items",
    },
    variant: {
      control: "radio",
      options: ["default", "primary"],
      description: "Visual variant of the breadcrumb items",
    },
  },
  args: {
    separator: (
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
    variant: "default",
    items: [
      { text: "Song", iconLeft: "🎵" },
      { text: "Sing", iconRight: "🎤" },
      { text: "Singer" },
      { text: "Artist", iconLeft: "🌟", iconRight: "✨" },
    ],
  },
};

export default meta;

type Story = StoryObj<BreadcrumbProps>;

export const Default: Story = {
  args: {
    variant: "default",
  },
};

export const Primary: Story = {
  args: {
    variant: "primary",
  },
};
