import { ComponentProps } from 'react'
import { styled } from './styles'

export const Button = styled('button', {
    fontFamily: '$default',
    backgroundColor: '$hambre300',
    borderRadius: '$sm',
    fontSize: '$sm',
    padding: '$4 $8',
    border: 0,
    fontWeight: 'bold',

    variants: {
        size: {
            small: {
                fontSize: 14,
                padding: '$3 $6'
            },
            big: {
                fontSize: '$md',
                padding: '$5 $8'
            }
        }
    },

    defaultVariants: {
        size: 'small'
    }
})

export type ButtonProps = ComponentProps<typeof Button>