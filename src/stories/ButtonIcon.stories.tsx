import React from "react";
import { ButtonIcon } from "@/components/ButtonIcon";
import { Meta, StoryObj } from "@storybook/react";
import { ComponentProps } from "react";
import { fn } from "@storybook/test"; // Alternatively, use `action` from '@storybook/addon-actions'

// A simple sample icon as an inline SVG
const SampleWhiteIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
    <path
      d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
      stroke="white"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M20.2 20.2C22.24 18.17 20.22 12.84 15.7 8.30001C11.16 3.78001 5.82999 1.76001 3.79999 3.80001C1.75999 5.83001 3.77999 11.16 8.29999 15.7C12.84 20.22 18.17 22.24 20.2 20.2Z"
      stroke="white"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M15.7 15.7C20.22 11.16 22.24 5.83001 20.2 3.80001C18.17 1.76001 12.84 3.78001 8.29999 8.30001C3.77999 12.84 1.75999 18.17 3.79999 20.2C5.82999 22.24 11.16 20.22 15.7 15.7Z"
      stroke="white"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);
const SampleBlackIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
  >
    <path
      d="M10 10.8334C10.4602 10.8334 10.8333 10.4603 10.8333 10C10.8333 9.53979 10.4602 9.16669 10 9.16669C9.53976 9.16669 9.16666 9.53979 9.16666 10C9.16666 10.4603 9.53976 10.8334 10 10.8334Z"
      stroke="#212529"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M16.8333 16.8334C18.5333 15.1417 16.85 10.7 13.0833 6.91669C9.3 3.15003 4.85833 1.46669 3.16666 3.16669C1.46666 4.85836 3.15 9.30003 6.91666 13.0834C10.7 16.85 15.1417 18.5334 16.8333 16.8334Z"
      stroke="#212529"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M13.0833 13.0834C16.85 9.30003 18.5333 4.85836 16.8333 3.16669C15.1417 1.46669 10.7 3.15003 6.91666 6.91669C3.15 10.7 1.46666 15.1417 3.16666 16.8334C4.85833 18.5334 9.3 16.85 13.0833 13.0834Z"
      stroke="#212529"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);
type StoryProps = ComponentProps<typeof ButtonIcon>;

const meta: Meta<StoryProps> = {
  title: "Components/ButtonIcon",
  component: ButtonIcon,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      options: ["primary", "base", "solid", "text"],
      control: { type: "select" },
    },
    size: {
      options: ["sm", "md", "lg"],
      control: { type: "select" },
    },
  },
  args: {
    onClick: fn(),
  },
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Primary: Story = {
  args: {
    variant: "primary",
  },
  render: (args) => (
    <ButtonIcon {...args}>
      <SampleWhiteIcon />
    </ButtonIcon>
  ),
};

export const Base: Story = {
  args: {
    variant: "base",
  },
  render: (args) => (
    <ButtonIcon {...args}>
      <SampleBlackIcon />
    </ButtonIcon>
  ),
};

export const Solid: Story = {
  args: {
    variant: "solid",
  },
  render: (args) => (
    <ButtonIcon {...args}>
      <SampleBlackIcon />
    </ButtonIcon>
  ),
};

export const Text: Story = {
  args: {
    variant: "text",
  },
  render: (args) => (
    <ButtonIcon {...args}>
      <SampleBlackIcon />
    </ButtonIcon>
  ),
};
