import { Button, ButtonProps } from "@hambre-ui/react"
import { Meta, StoryObj } from "@storybook/react"
import { ArrowArcRight, ArrowRight, Plus } from "phosphor-react"

export default {
    title: 'Form/Button',
    component: Button,
    args: {
        children: 'Send',
        variant: 'primary',
        size: 'md',
        disabled: false,
    },
    argTypes: {
        variant: {
            options: ['primary', 'secondary', 'tertiary'],
            control: {
                type: 'inline-radio'
            }
        },
        size: {
            options: ['sm', 'md', 'lg'],
            control: {
                type: 'inline-radio'
            }
        },
        disabled: {
            control: {
                type: 'boolean'
            }
        },
        onClick: {
            action: 'click',
        }
    }
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {}

export const Secondary: StoryObj<ButtonProps> = {
    args: {
        variant: 'secondary',
        children: 'Create New'
    }
}

export const Tertiary: StoryObj<ButtonProps> = {
    args: {
        variant: 'tertiary',
        children: 'Cancel'
    }
}

export const Small: StoryObj<ButtonProps> = {
    args: {
        size: 'sm'
    }
}

export const Large: StoryObj<ButtonProps> = {
    args: {
        size: 'lg'
    }
}

export const Icon: StoryObj<ButtonProps> = {
    args: {
        variant: 'icon',
        size: 'sm',
        children: (
            <>
                <Plus />
            </>
        )
    }
}

export const WithIcon: StoryObj<ButtonProps> = {
    args: {
        children: (
            <>
                Next
                <ArrowRight />
            </>
        )
    }
}

export const Disabled: StoryObj<ButtonProps> = {
    args: {
        variant: 'primary',
        disabled: true
    }
}