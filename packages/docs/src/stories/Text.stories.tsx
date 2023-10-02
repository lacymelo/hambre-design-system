import { Text, TextProps } from '@hambre-ui/react'
import { Meta, StoryObj } from '@storybook/react'

export default {
    title: 'Typography/Text',
    component: Text,
    args: {
        children: (
            <>
                <p>Typography</p>
            </>
        )
    }
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
    args: {
        children: 'Strong text',
        as: 'strong'
    }
}