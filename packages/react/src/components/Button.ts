import { ComponentProps, ElementType } from "react";
import { styled } from "../styles";

export const Button = styled('button', {
    all: 'unset', // limpa todos os estilos pré-configurados
    borderRadius: '$sm',
    fontSize: '$md',
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

    '&:focus': {
        boxShadow: '0 0 0 2px $colors$hambre300'
    },

    variants: {
        variant: {
            primary: {
                backgroundColor: '$hambre300',
                border: '1px solid $hambre300',
                color: '$gray600',

                '&:not(:disabled):hover': {
                    backgroundColor: '$hambre400',
                    transition: 'all ease .36s'
                },

                '&:disabled': {
                    background: '$yellow100',
                    border: '1px solid $yellow100',
                }
            },
            secondary: {
                backgroundColor: '$white',
                color: '$gray500',
                border: '1px solid $gray200',

                '&:not(:disabled):hover': {
                    backgroundColor: '$gray200',
                    color: '$white',
                    border: '1px solid $gray200',
                    transition: 'all ease .36s'
                },

                '&:disabled': {
                    background: '$yellow50',
                    border: '1px solid $yellow50',
                }
            },
            tertiary: {
                color: '$gray600',

                '&:not(:disabled):hover': {
                    color: '$hambre300',
                    transition: 'all ease .36s'
                },

                '&:disabled': {
                    color: '$white',
                    background: '$gray100',
                }
            },
            icon: {
                backgroundColor: '$hambre300',
                color: '$gray600',
                minWidth: 0,
                border: '1px solid $hambre300',

                '&:not(:disabled):hover': {
                    backgroundColor: '$hambre400',
                    transition: 'all ease .36s'
                },

                '&:disabled': {
                    background: '$yellow100',
                    border: '1px solid $yellow100',
                }
            },
            success: {
                backgroundColor: '$green400',
                border: '1px solid $green400',
                color: '$white',

                '&:not(:disabled):hover': {
                    backgroundColor: '$green600',
                    transition: 'all ease .36s'
                },

                '&:disabled': {
                    background: '$green100',
                    border: '1px solid $green100',
                }
            },
            warning: {
                backgroundColor: '$orange400',
                border: '1px solid $orange400',
                color: '$white',

                '&:not(:disabled):hover': {
                    backgroundColor: '$orange600',
                    transition: 'all ease .36s'
                },

                '&:disabled': {
                    background: '$orange100',
                    border: '1px solid $orange100',
                }
            },
            info: {
                backgroundColor: '$blue400',
                color: '$white',
                border: '1px solid $blue400',

                '&:not(:disabled):hover': {
                    backgroundColor: '$blue600',
                    transition: 'all ease .36s'
                },

                '&:disabled': {
                    background: '$blue100',
                    border: '1px solid $blue100',
                }
            },
            danger: {
                backgroundColor: '$red400',
                border: '1px solid $red400',
                color: '$white',

                '&:not(:disabled):hover': {
                    backgroundColor: '$red600',
                    transition: 'all ease .36s'
                },

                '&:disabled': {
                    background: '$red100',
                    border: '1px solid $red100',
                }
            },
        },

        size: {
            xs: {
                padding: '$2 $6'
            },
            sm: {
                padding: '$3 $6'
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