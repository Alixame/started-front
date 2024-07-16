import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Button } from '@/components/ui/button';

import { userEvent, within, expect } from '@storybook/test';

import '@/app/globals.css'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    variant: {
        options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link'],
        defaultValue: 'default',
        control: { type: 'select' },
    },
    size: {
        options: ['default', 'sm', 'lg', 'icon'],
        defaultValue: 'default',
        control: { type: 'select' },
    },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
    args: {
        variant: 'default',
        children: 'Botão',
    },
};

export const Secondary: Story = {
    args: {
        variant: 'secondary',
        children: 'Botão',
    },
};

export const Destructive: Story = {
    args: {
        variant: 'destructive',
        children: 'Botão',
    },
};

export const Outline: Story = {
    args: {
        variant: 'outline',
        children: 'Botão',
    },
};

export const Ghost: Story = {
    args: {
        variant: 'ghost',
        children: 'Botão',
    },
};

export const Link: Story = {
    args: {
        variant: 'link',
        children: 'Botão',
    },
};

export const Small: Story = {
    args: {
        size: 'sm',
        children: 'Botão',
    },
};

export const DefaultSize: Story = {
    args: {
        size: 'default',
        children: 'Botão',
    },
};

export const Large: Story = {
    args: {
        size: 'lg',
        children: 'Botão',
    },
};

export const Icon: Story = {
    args: {
        size: 'icon',
        children: 'B',
    },
};