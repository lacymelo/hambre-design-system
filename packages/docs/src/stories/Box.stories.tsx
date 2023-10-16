import { Box, BoxProps, Text } from "@hambre-ui/react";
import { Meta, StoryObj } from "@storybook/react";

export default {
    title: 'Surfaces/Box',
    component: Box,
    args: {
        children: (
            <Text>Box</Text>
        )
    },
    argTypes: {
        children: {
            control: {
                type: null
            }
        }
    }
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {

}