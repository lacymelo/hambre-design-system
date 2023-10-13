import { Radio, RadioProps } from "@hambre-ui/react";
import { Meta, StoryObj } from "@storybook/react";

export default {
    title: 'Form/Radio',
    component: Radio,
    args: {

    },
    argTypes: {
        checked: {
            control: {
                type: 'boolean'
            }
        },
    },
} as Meta<RadioProps>

export const Primary: StoryObj<RadioProps> = {
    args: {
        defaultValue: 'F',
        name: 'sexo',
        itens: [
            {
                value: 'F',
                text: 'Feminino'
            },
            {
                value: 'M',
                text: 'Masculino'
            },
        ]
    }
}

export const Secondary: StoryObj<RadioProps> = {
    args: {
        name: 'feedback',
        defaultValue: 'default',
        itens: [
            {
                value: 'default',
                text: 'Default'
            },
            {
                value: 'compact',
                text: 'Compact'
            },
            {
                value: 'comfortable',
                text: 'Comfortable'
            },
        ]
    }
}

export const Disabled: StoryObj<RadioProps> = {
    args: {
        name: 'feedback',
        defaultValue: 'compact',
        disabled: true,
        itens: [
            {
                value: 'compact',
                text: 'Compact'
            },
            {
                value: 'comfortable',
                text: 'Comfortable'
            },
        ]
    }
}