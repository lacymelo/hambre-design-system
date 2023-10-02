import { ComponentProps, ElementType } from "react"
import { styled } from "../styles"

export const TextArea = styled('textarea', {
    all: 'unset',
    backgroundColor: '$white',
    padding: '$3 $4',
    borderRadius: '$lg',
    border: '1px solid $gray100',
    fontFamily: '$default',
    fontSize: '$sm',
    color: '$gray600',
    fontWeight: '$regular',
    minHeight: 80,
    resize: 'vertical',

    '&:focus': {
        outline: 0,
        borderColor: '$hambre300'
    },

    '&:disabled': {
        opacity: 0.5,
        cursor: 'not-allowed',
        backgroundColor: '$yellow50'
    },

    '&:placeholder': {
        color: '$gray400'
    }
})

export interface TextAreaProps extends ComponentProps<typeof TextArea> {
    as?: ElementType
}

TextArea.displayName = 'TextArea'