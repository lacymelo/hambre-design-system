import { Box, Switch, SwitchProps, Text } from "@hambre-ui/react";
import { Meta, StoryObj } from "@storybook/react";

export default {
    title: 'Form/Switch',
    component: Switch,
    args: {

    },
    argTypes: {
        disabled: {
            control: {
                type: 'boolean'
            },
        },
    },
    decorators: [
        (Story) => {
            return (
                <Box
                    as="label"
                    css={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: '$2'
                    }}
                >
                    {Story()}

                    <Text
                        size="sm"
                    >
                        Accept terms of use
                    </Text>
                </Box>
            )
        }
    ]
} as Meta<SwitchProps>

export const Primary: StoryObj<SwitchProps> = {}

export const Disabled: StoryObj<SwitchProps> = {
    args: {
        disabled: true
    }
}