import { ComponentProps, ElementType } from "react";
import { styled } from "../../styles";

export const TransitionContainer = styled('div', {
    display: 'grid',
    gridTemplateColumns: '1fr',
    alignItems: 'center',
    position: 'relative',
    borderRadius: '$md',
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    gap: '$2',
    cursor: 'pointer',
    padding: '$4',

    '&::after': {
        content: '',
        width: 'var(--currentWidth)',
        height: 'var(--currentHeight)',
        borderRadius: '$md',
        position: 'absolute',
        opacity: '.3',
        backgroundColor: '$yellow100',
        left: 0,
        bottom: 0,
        transition: 'all ease .35s'
    },

    '&:hover::after': {
        content: '',
        width: '100%',
        height: '100%',
        position: 'absolute',
        borderRadius: '$md',
        opacity: '1',
        backgroundColor: '$yellow100',
        left: 0,
        bottom: 0,
        transition: 'all ease .35s'
    }
})