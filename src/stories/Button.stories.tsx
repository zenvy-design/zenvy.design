import Button from "@/components/Button";
import { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { ArrowLeft, ArrowRight, Atom } from "lucide-react";
import { ComponentProps } from "react";

type StoryProps = ComponentProps<typeof Button>;

const meta: Meta<StoryProps> = {
  component: Button,
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
    status: {
      options: ["success", "error", "warning"],
      control: { type: "select" },
    },
    disabled: {
      control: "boolean",
    },
    width: {
      options: ["full", "fit"],
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
    text: "Hello",
    variant: "primary",
    size: "md",
  },
  render: (args) => <Button {...args} />,
};

export const Base: Story = {
  args: {
    text: "Hello",
    variant: "base",
    size: "md",
  },
  render: (args) => <Button {...args} />,
};

export const Solid: Story = {
  args: {
    text: "Hello",
    variant: "solid",
    size: "md",
  },
  render: (args) => <Button {...args} />,
};

export const Text: Story = {
  args: {
    text: "Hello",
    variant: "text",
    size: "md",
  },
  render: (args) => <Button {...args} />,
};

export const Error: Story = {
  args: {
    text: "Error Button",
    variant: "primary",
    status: "error",
  },
  render: (args) => <Button {...args} />,
};

export const Warning: Story = {
  args: {
    text: "Warning Button",
    variant: "primary",
    status: "warning",
  },
  render: (args) => <Button {...args} />,
};

export const WithLeftIcon: Story = {
  args: {
    text: "With Left Icon",
    variant: "primary",
    iconLeft: <ArrowRight size={16} />,
  },
  render: (args) => <Button {...args} />,
};

export const WithRightIcon: Story = {
  args: {
    text: "With Right Icon",
    variant: "primary",
    iconRight: <ArrowLeft size={16} />,
  },
  render: (args) => <Button {...args} />,
};

export const WithBothIcons: Story = {
  args: {
    text: "Both Icons",
    variant: "primary",
    iconLeft: <Atom size={16} />,
    iconRight: <ArrowRight size={16} />,
  },
  render: (args) => <Button {...args} />,
};

export const SolidError: Story = {
  args: {
    text: "Solid Error",
    variant: "solid",
    status: "error",
  },
  render: (args) => <Button {...args} />,
};

export const BaseWarning: Story = {
  args: {
    text: "Base Warning",
    variant: "base",
    status: "warning",
  },
  render: (args) => <Button {...args} />,
};

export const TextSuccess: Story = {
  args: {
    text: "Text Success",
    variant: "text",
    status: "success",
  },
  render: (args) => <Button {...args} />,
};

export const IconOnlySmall: Story = {
  args: {
    text: "",
    variant: "primary",
    size: "sm",
    isIconOnly: true,
    icon: <Atom size={14} />,
  },
  render: (args) => <Button {...args} />,
};

export const IconOnlyMedium: Story = {
  args: {
    text: "",
    variant: "primary",
    size: "md",
    isIconOnly: true,
    icon: <Atom size={16} />,
  },
  render: (args) => <Button {...args} />,
};

export const IconOnlyLarge: Story = {
  args: {
    text: "",
    variant: "primary",
    size: "lg",
    isIconOnly: true,
    icon: <Atom size={18} />,
  },
  render: (args) => <Button {...args} />,
};

export const IconPrimary: Story = {
  args: {
    isIconOnly: true,
    icon: <Atom size={16} className="text-text" />,
    variant: "primary",
    size: "md",
  },
};

export const IconSolid: Story = {
  args: {
    isIconOnly: true,
    icon: <Atom size={16} className="text-text" />,
    variant: "solid",
    size: "md",
  },
};

export const IconBase: Story = {
  args: {
    isIconOnly: true,
    icon: <Atom size={16} className="text-text" />,
    variant: "base",
    size: "md",
  },
};

export const IconText: Story = {
  args: {
    isIconOnly: true,
    icon: <Atom size={16} className="text-text" />,
    variant: "text",
    size: "md",
  },
};

// Status variations for each variant
export const IconPrimarySuccess: Story = {
  args: {
    ...IconPrimary.args,
    status: "success",
  },
};

export const IconPrimaryError: Story = {
  args: {
    ...IconPrimary.args,
    status: "error",
  },
};

export const IconPrimaryWarning: Story = {
  args: {
    ...IconPrimary.args,
    status: "warning",
  },
};

export const IconSolidSuccess: Story = {
  args: {
    ...IconSolid.args,
    status: "success",
  },
};

export const IconSolidError: Story = {
  args: {
    ...IconSolid.args,
    status: "error",
  },
};

export const IconSolidWarning: Story = {
  args: {
    ...IconSolid.args,
    status: "warning",
  },
};

export const IconBaseSuccess: Story = {
  args: {
    ...IconBase.args,
    status: "success",
  },
};

export const IconBaseError: Story = {
  args: {
    ...IconBase.args,
    status: "error",
  },
};

export const IconBaseWarning: Story = {
  args: {
    ...IconBase.args,
    status: "warning",
  },
};

export const IconTextSuccess: Story = {
  args: {
    ...IconText.args,
    status: "success",
  },
};

export const IconTextError: Story = {
  args: {
    ...IconText.args,
    status: "error",
  },
};

export const IconTextWarning: Story = {
  args: {
    ...IconText.args,
    status: "warning",
  },
};
