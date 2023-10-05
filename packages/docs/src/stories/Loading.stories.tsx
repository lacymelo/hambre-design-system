import { Loading, LoadingProps } from "@hambre-ui/react";
import { Meta, StoryObj } from "@storybook/react";

export default {
    title: 'Effect/Loading',
    component: Loading,
    args: {

    },
    argTypes: {
        size: {
            options: ['xxs', 'xs', 'sm', 'md', 'lg', 'xl'],
            control: {
                type: 'inline-radio'
            }
        },
    }
} as Meta<LoadingProps>

export const Primary: StoryObj<LoadingProps> = {
    args: {

    }
}

export const Secondary: StoryObj<LoadingProps> = {
    args: {
        size: 'md',
        variant: 'gray'
    }
}