import * as Toast from "@radix-ui/react-toast"
import { keyframes, styled } from "../../styles"

export const Provider = styled(Toast.Provider, {
    position: 'absolute',
    top: 0,
    right: '$4',
})

export const Viewport = styled(Toast.Viewport, {
    position: 'absolute',
    top: 0,
    right: '$4',
})

export const Container = styled('div', {
    minWidth: 200,
    maxWidth: 250,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'justify',
    gap: '$2',
    alignItems: 'center'
})

const slideIn = keyframes({
    from: {
        transform: 'translateX(100%)'
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
        transform: 'translateX(100%)'
    }
})


export const ToastRoot = styled(Toast.Root, {
    all: 'unset',
    backgroundColor: '$white',
    position: 'relative',
    borderRadius: '$xs',
    padding: '$5',
    display: 'flex',
    flexDirection: 'column',
    gap: '$2',

    '&[data-state="open"]': {
        animation: `${slideIn} 200ms ease-out`
    },

    '&[data-state="closed"]': {
        animation: `${slideOut} 200ms ease-out`
    },

    variants: {
        variant: {
            success: {
                color: '$green600',
            },
            error: {
                color: '$red600',
            },
            warning: {
                color: '$yellow600',
            },
            info: {
                color: '$blue600',
            },
        }
    },
    defaultVariants: {
        variant: 'success'
    }
})

export const Progress = styled('div', {
    height: '$1',
    borderRadius: '$px',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    borderBottomLeftRadius: '$xs',

    variants: {
        variant: {
            success: {
                backgroundColor: '$green600',

            },
            error: {
                backgroundColor: '$red600',
            },
            warning: {
                backgroundColor: '$yellow600',
            },
            info: {
                backgroundColor: '$blue600',
            },
        }
    },
    defaultVariants: {
        variant: 'success'
    }
})

export const Description = styled(Toast.Description, {
    backgroundColor: '$gray600',
    fontFamily: '$default',
    fontSize: '$md'
})

export const Close = styled(Toast.Close, {
    all: 'unset',
    position: 'absolute',
    right: 0,
    top: 0,
    margin: '$1',
    cursor: 'pointer',

    '> svg': {
        width: '$4',
        height: '$4',
        color: '$gray600'
    },

    '> svg:hover': {
        fontWeight: '$bold',
    },

})

export const Icon = styled('span', {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',

    '> svg': {
        width: '$6',
        height: '$6',
        cursor: 'pointer',
    },

    variants: {
        variant: {
            success: {
                color: '$green600',
            },
            error: {
                color: '$red600',
            },
            warning: {
                color: '$yellow600',
            },
            info: {
                color: '$blue600',
            },
        }
    },
    defaultVariants: {
        variant: 'success'
    }
})