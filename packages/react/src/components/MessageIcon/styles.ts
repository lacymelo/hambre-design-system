import { styled } from "../../styles"

export const Container = styled('div', {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '$12',
    height: '$12',
    borderRadius: '$full',
    margin: '$3',

    variants: {
        variant: {
            green: {
                backgroundColor: '$green50',
            },
            red: {
                backgroundColor: '$red50',
            },
            orange: {
                backgroundColor: '$orange50',
            },
            blue: {
                backgroundColor: '$blue50',
            },
        }
    },

    defaultVariants: {
        variant: 'green'
    }
})

export const Content = styled('span', {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '$8',
    height: '$8',
    borderRadius: '$full',

    variants: {
        variant: {
            green: {
                backgroundImage: 'linear-gradient(104deg, $green100, $green50)',
            },
            red: {
                backgroundImage: 'linear-gradient(104deg, $red100, $red50)',
            },
            orange: {
                backgroundImage: 'linear-gradient(104deg, $orange100, $orange50)',
            },
            blue: {
                backgroundImage: 'linear-gradient(104deg, $blue100, $blue50)',
            },
        }
    },

    defaultVariants: {
        variant: 'green'
    },

    svg: {
        width: '$6',
        height: '$6',
        color: 'var(--icon-variant)',
    }
})