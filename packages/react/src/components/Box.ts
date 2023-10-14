import { ComponentProps, ElementType } from 'react'
import { styled } from '../styles'

export const Box = styled('div', {
    display: 'grid',
    gridTemplateColumns: '1fr',
    position: 'relative',
    padding: '$6',
    borderRadius: '$md',
    backgroundColor: '$white',
    border: '1px solid $gray100'
})

export interface BoxProps extends ComponentProps<typeof Box> {
    as?: ElementType
}

Box.displayName = 'Box'