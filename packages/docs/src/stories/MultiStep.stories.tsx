import { Box, MultiStep, MultiStepProps } from '@hambre-ui/react'
import { Meta, StoryObj } from '@storybook/react'

export default {
    title: 'Form/Multi Step',
    component: MultiStep,
    args: {
        currentStep: 1,
        size: 4,
    },
    decorators: [
        (Story) => {
            return (
                <Box
                    as="label"
                    css={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '$2'
                    }}>
                    {Story()}
                </Box>
            )
        },
    ]
} as Meta<MultiStepProps>

export const Primary: StoryObj<MultiStepProps> = {
    args: {
        currentStep: 1,
    }
}

export const Full: StoryObj<MultiStepProps> = {
    args: {
        currentStep: 4,
    }
}

