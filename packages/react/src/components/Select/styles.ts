import * as Select from "@radix-ui/react-select";
import { styled } from "../../styles";

export const Root = styled(Select.Root, {

})

export const Trigger = styled(Select.Trigger, {
    all: 'unset',
    backgroundColor: '$white',
    padding: '$3 $4',
    borderRadius: '$full',
    boxSizing: 'border-box',
    border: '1px solid $gray100',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    color: '$gray400',
    fontSize: '$sm',
    fontFamily: '$default',
    gap: '$2',

    '&:focus': {
        borderColor: '$hambre300',
    },
})

export const Value = styled(Select.Value, {

})

export const Icon = styled(Select.Icon, {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
})

export const Portal = styled(Select.Portal, {

})

export const Content = styled(Select.Content, {
    overflow: 'hidden',
    backgroundColor: '$white',
    borderRadius: '$sm',
    boxShadow: '0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2)',
    zIndex: 1,
})

export const ScrollUpButton = styled(Select.ScrollDownButton, {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '$6',
    backgroundColor: 'white',
    color: '$hambre600',
    cursor: 'pointer',
})

export const Viewport = styled(Select.Viewport, {
    padding: '$3 $5',
})

export const Item = styled(Select.Item, {
    fontFamily: '$default',
    fontSize: '$sm',
    color: '$gray400',
    display: 'flex',
    alignItems: 'center',
    height: '$6',
    padding: '$2',
    borderRadius: '$sm',
    marginBottom: '$1',
    userSelect: 'none',

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

    '&:focus': {
        outline: 0
    },

    '&[data-state="checked"]': {
        color: '$hambre600'
    },

    '&[data-state="unchecked"]': {
        paddingLeft: '$6',
    },

    '&:hover': {
        backgroundColor: '$yellow50',
        color: '$hambre600'
    },

    defaultVariants: {
        size: 'md'
    }
})

export const ItemText = styled(Select.ItemText, {

})

export const ItemIndicator = styled(Select.ItemIndicator, {
    left: 0,
    width: '$6',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    svg: {
        width: '$4',
        height: '$4',
    }
})

export const ScrollDownButton = styled(Select.ScrollDownButton, {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '$6',
    backgroundColor: '$white',
    color: '$hambre600',
    cursor: 'pointer',
})






