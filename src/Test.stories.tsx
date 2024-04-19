import type { Meta, StoryObj } from "@storybook/react";

import Test from "./v2/Test";

const meta: Meta<typeof Test> = {
  title: "Components/Quick Menu",
  component: Test,
};

export default meta;

type Story = StoryObj<typeof Test>;

export const Default: Story = {
  render: () => {
    return <Test name="Marti" />;
  },
};

Default.storyName = "Test";
