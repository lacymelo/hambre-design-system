import * as RadioGroup from '@radix-ui/react-radio-group'
import { keyframes, styled } from "../../styles"

export const RadioContainer = styled(RadioGroup.Root, {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
})

export const RadioItem = styled(RadioGroup.Item, {
    all: 'unset',
    width: '$6',
    height: '$6',
    backgroundColor: '$gray50',
    borderRadius: '$full',
    lineHeight: 0,
    cursor: 'pointer',
    overflow: 'hidden',
    boxSizing: 'border-box',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: '2px solid $gray50',
    marginRight: '$2',

    '&:hover': {
        backgroundColor: '$yellow50',
    },

    '&:focus': {
        border: '1px solid $hambre300',
    },
})


export const Indicator = styled(RadioGroup.Indicator, {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    position: 'relative',

    '&::after': {
        content: '',
        display: 'block',
        width: '11px',
        height: '11px',
        borderRadius: '50%',
        backgroundColor: '$hambre300',
    }
})
