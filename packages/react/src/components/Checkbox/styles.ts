import * as Checkbox from "@radix-ui/react-checkbox"
import { keyframes, styled } from "../../styles"

export const CheckboxContainer = styled(Checkbox.Root, {
    all: 'unset',
    width: '$6',
    height: '$6',
    backgroundColor: '$gray50',
    borderRadius: '$xs',
    lineHeight: 0,
    cursor: 'pointer',
    overflow: 'hidden',
    boxSizing: 'border-box',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: '2px solid $gray50',

    '&:focus, &[data-state="checked"]': {
        border: '2px solid $hambre300',
    },

    '&[data-state="checked"]': {
        border: '2px solid $hambre300',
        backgroundColor: '$hambre300',
    },

    '&:disabled': {
        cursor: 'not-allowed'
    }
})

const slideIn = keyframes({
    from: {
        transform: 'translateY(-100%)'
    },
    to: {
        transform: 'translate(0)'
    }
})

const slideOut = keyframes({
    from: {
        transform: 'translate(0)'
    },
    to: {
        transform: 'translateY(-100%)'
    }
})

export const CheckboxIndicator = styled(Checkbox.Indicator, {
    color: '$white',
    width: '$4',
    height: '$4',

    '&[data-state="checked"]': {
        animation: `${slideIn} 200ms ease-out`
    },

    '&[data-state="unchecked"]': {
        animation: `${slideOut} 200ms ease-out`
    },
})