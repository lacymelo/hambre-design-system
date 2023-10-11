import { MessageIcon, MessageIconProps } from "@hambre-ui/react";
import { Meta, StoryObj } from "@storybook/react";
import { Check, Fire, WarningCircle } from "phosphor-react";

export default {
    title: 'Message/Message Icon',
    component: MessageIcon,
    args: {

    },
    argTypes: {
        variant: {
            options: ['green', 'red', 'orange', 'blue'],
            control: {
                type: 'inline-radio'
            }
        }
    }
} as Meta<MessageIconProps>

export const Success: StoryObj<MessageIconProps> = {
    args: {
        icon: <Check />,
        variant: 'green'
    }
}

export const Danger: StoryObj<MessageIconProps> = {
    args: {
        icon: <Fire />,
        variant: 'red'
    }
}

export const Warning: StoryObj<MessageIconProps> = {
    args: {
        icon: <WarningCircle />,
        variant: 'orange'
    }
}

export const Info: StoryObj<MessageIconProps> = {
    args: {
        icon: <WarningCircle />,
        variant: 'blue'
    }
}