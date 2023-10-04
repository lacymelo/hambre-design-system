import { ComponentProps, ElementType } from "react";
import { styled } from "../styles";

export const Button = styled('button', {
    all: 'unset', // limpa todos os estilos pré-configurados
    borderRadius: '$sm',
    fontSize: '$sm',
    fontWeight: '$medium',
    fontFamily: '$default',
    textAlign: 'center',
    minWidth: 120,
    boxSizing: 'border-box',

    display: 'grid',
    gridTemplateColumns: '1fr auto',
    alignItems: 'center',
    cursor: 'pointer',

    '&:disabled': {
        cursor: 'not-allowed'
    },

    variants: {
        variant: {
            primary: {
                backgroundColor: '$hambre300',
                color: '$gray600',

                '&:not(:disabled):hover': {
                    backgroundColor: '$hambre400',
                    transition: 'all ease .32s'
                },

                '&:disabled': {
                    background: '$yellow100'
                }
            },
            secondary: {
                backgroundColor: '$white',
                color: '$gray600',
                border: '1px solid $gray600',

                '&:not(:disabled):hover': {
                    backgroundColor: '$hambre300',
                    transition: 'all ease .32s'
                },

                '&:disabled': {
                    background: '$yellow50'
                }
            },
            tertiary: {
                color: '$gray600',

                '&:not(:disabled):hover': {
                    color: '$hambre300',
                    transition: 'all ease .32s'
                },

                '&:disabled': {
                    background: '$gray600'
                }
            },
            icon: {
                backgroundColor: '$hambre300',
                color: '$gray600',
                minWidth: 0,

                '&:not(:disabled):hover': {
                    backgroundColor: '$hambre400',
                    transition: 'all ease .32s'
                },

                '&:disabled': {
                    background: '$yellow100'
                }
            }
        },

        size: {
            xs: {
                padding: '$3 $6'
            },
            sm: {
                padding: '$4 $6'
            },
            md: {
                padding: '$4 $7'
            },
            lg: {
                padding: '$5 $8'
            }
        }
    },

    defaultVariants: {
        variant: 'primary',
        size: 'md'
    }
})

export interface ButtonProps extends ComponentProps<typeof Button> {
    as?: ElementType
}

Button.displayName = 'Button'