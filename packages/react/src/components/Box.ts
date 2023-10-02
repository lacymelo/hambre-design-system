import { ComponentProps, ElementType } from 'react'
import { styled } from '../styles'

export const Box = styled('div', {
    display: 'grid',
    gridTemplateColumns: '1fr',
    position: 'relative',
    padding: '$4',
    borderRadius: '$md',
    backgroundColor: '$white',
    border: '1px solid $gray100'
    // boxShadow: 'rgba(99, 99, 99, 0.14) 0px 0px 4px 0px',

    // '::after': {
    //     content: '',
    //     width: '100%',
    //     height: '70%',
    //     position: 'absolute',
    //     backgroundImage: 'linear-gradient(90deg, $orange200, $hambre200)',
    //     left: 0,
    //     bottom: 0,
    //     borderRadius: '$md',
    //     opacity: .7,
    //     transition: 'all ease .35s'
    // },

    // ':hover::after': {
    //     content: '',
    //     width: '100%',
    //     height: '100%',
    //     position: 'absolute',
    //     backgroundColor: '$hambre400',
    //     left: 0,
    //     bottom: 0,
    //     borderRadius: '$md',
    //     opacity: 1,
    //     transition: 'all ease .35s'
    // },
})

export interface BoxProps extends ComponentProps<typeof Box> {
    as?: ElementType
}

Box.displayName = 'Box'