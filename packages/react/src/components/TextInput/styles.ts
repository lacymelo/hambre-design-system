import { styled } from "../../styles"

export const TextInputContainer = styled('div', {
    backgroundColor: '$white',
    padding: '$3 $4',
    borderRadius: '$full',
    boxSizing: 'border-box',
    border: '1px solid $gray100',
    display: 'flex',
    alignItems: 'center',
    position: 'relative',

    variants: {
        size: {
            sm: {
                padding: '$2 $3',
            },
            md: {
                padding: '$3 $4',
            },
        }
    },

    '&:has(input:focus)': {
        borderColor: '$hambre300'
    },

    '&:has(input:disabled)': {
        opacity: 0.5,
        cursor: 'not-allowed'
    },

    defaultVariants: {
        size: 'md'
    }
})

export const Prefix = styled('span', {
    fontFamily: '$default',
    fontSize: '$sm',
    color: '$gray400',
    fontWeight: 'regular'
})

export const Icon = styled('span', {
    right: 0,
    marginRight: '$4',
    paddingLeft: '$2',
    position: 'absolute',
    backgroundColor: '$white',

    svg: {
        width: '$4',
        fontWeight: 'regular',
        height: '$4',
        color: '$gray400'
    }
})

export const Input = styled('input', {
    all: 'unset',
    fontFamily: '$default',
    fontSize: '$sm',
    color: '$gray600',
    fontWeight: '$regular',
    backgroundColor: 'transparent',
    border: 0,
    width: '100%',
    position: 'relative',

    '&:focus': {
        outline: 0,
    },

    '&:disabled': {
        cursor: 'not-allowed'
    },

    '&::placeholder': {
        color: '$gray400'
    },
})

