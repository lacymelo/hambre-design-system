import { Heading, HeadingProps } from "@hambre-ui/react"
import { Meta, StoryObj } from "@storybook/react"

export default {
    title: 'Typography/Heading',
    component: Heading,
    args: {
        children: 'Custom Title'
    }

} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}

export const CustomTag: StoryObj<HeadingProps> = {
    args: {
        children: 'H1 Heading',
        as: 'h1'
    },
    parameters: {
        docs: {
            description: {
                story: 'Por padrão o hading sempre será um `h2`, mas podemos alterar isso com a propriedade `as`'
            }
        }
    }
}
