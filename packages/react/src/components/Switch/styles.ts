import * as Switch from "@radix-ui/react-switch";
import { styled } from "../../styles";

export const SwitchContainer = styled(Switch.Root, {
    all: 'unset',
    width: '50px',
    height: '$6',
    borderRadius: '$full',
    position: 'relative',
    backgroundColor: '$gray100',
    boxShadow: '0px 2px 10px $gray50',
    cursor: 'pointer',

    '&:focus': {
        boxShadow: '0px 2px 10px $hambre300',
    },

    '&[data-state="checked"]': {
        backgroundColor: '$hambre300',

        variants: {
            variant: {
                green: {},
                yellow: {},
                red: {},
                blue: {}
            }
        }
    },

    '&:disabled': {
        cursor: 'not-allowed'
    }
})

export const Thumb = styled(Switch.Thumb, {
    display: 'block',
    backgroundColor: '$white',
    width: '$5',
    height: '$5',
    borderRadius: '$full',
    boxShadow: '0px 2px 2px $gray100',
    transition: 'transform 150ms',
    transform: 'translateX(2px)',
    willChange: 'transform',

    '&[data-state="checked"]': {
        transform: 'translateX(27px)'
    }
})