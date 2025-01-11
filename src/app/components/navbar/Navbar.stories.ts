import Navbar from "./navbar";
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

const meta = {
  title: 'Example/Navbar',
  component: Navbar,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Navbar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { children: 'Navbar' }, 
};
