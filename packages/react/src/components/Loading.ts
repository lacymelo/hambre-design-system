import { ComponentProps, ElementType } from "react";
import { keyframes, styled } from "../styles";

const spin = keyframes({
    '0%': {
        transform: 'rotate(0deg)'
    },
    '100%': {
        transform: 'rotate(360deg)'
    }
})

export const Loading = styled('div', {
    width: '20px',
    height: '20px',
    borderRadius: '$full',
    border: '4px solid $gray400',
    borderTop: '4px solid $hambre300',
    animation: `${spin} 1s linear infinite`,

    variants: {
        size: {
            xxs: {
                width: '10px',
                height: '10px',
            },
            xs: {
                width: '12px',
                height: '12px',
            },
            sm: {
                width: '14px',
                height: '14px',
            },
            md: {
                width: '16px',
                height: '16px',
            },
            lg: {
                width: '18px',
                height: '18px',
            },
            xl: {
                width: '20px',
                height: '20px',
            },
        },
        variant: {
            gray: {
                borderTop: '4px solid $gray600',
            },
            yellow: {
                borderTop: '4px solid $hambre300',
            },
            red: {
                borderTop: '4px solid $red600',
            },
            blue: {
                borderTop: '4px solid $blue600',
            },
            green: {
                borderTop: '4px solid $green600',
            },
            orange: {
                borderTop: '4px solid $orange600',
            },
        }
    },
    defaultVariants: {
        variant: 'green',
        size: 'xxs'
    }
})

export interface LoadingProps extends ComponentProps<typeof Loading> {
    as?: ElementType
}

Loading.displayName = 'Loading'
