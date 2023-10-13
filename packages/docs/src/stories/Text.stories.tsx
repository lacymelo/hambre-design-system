import { Text, TextProps } from '@hambre-ui/react'
import { Meta, StoryObj } from '@storybook/react'

export default {
    title: 'Typography/Text',
    component: Text,
    args: {
        children: (
            <p>Typography</p>
        )
    },
    argTypes: {
        size: {
            options: ['xxs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', '4xl', '5xl', '6xl', '7xl', '8xl', '9xl'],
            control: {
                type: 'inline-radio'
            }
        }
    }
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
    args: {
        children: 'Strong text',
        as: 'strong'
    }
}