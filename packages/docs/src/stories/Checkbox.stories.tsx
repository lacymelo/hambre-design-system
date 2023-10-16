import { Box, Checkbox, CheckboxProps, Text } from "@hambre-ui/react";
import { Meta, StoryObj } from "@storybook/react";

export default {
    title: 'Form/Checkbox',
    component: Checkbox,
    args: {},
    argTypes: {
        disabled: {
            control: {
                type: 'boolean'
            }
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
} as Meta<CheckboxProps>

export const Primary: StoryObj<CheckboxProps> = {
    args: {

    }
}

export const Disabled: StoryObj<CheckboxProps> = {
    args: {
        disabled: true
    }
}