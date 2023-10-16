import * as Avatar from "@radix-ui/react-avatar"
import { styled } from "../../styles"

export const AvatarContainer = styled(Avatar.Root, {
    borderRadius: '$full',
    display: 'flex',
    overflow: 'hidden',

    variants: {
        variant: {},
        size: {
            sm: {
                width: '$6',
                height: '$6',
            },
            md: {
                width: '$12',
                height: '$12',
            },
            lg: {
                width: '$20',
                height: '$20',
            }
        }
    },

    defaultVariants: {
        size: 'md'
    }
})

// para uma imagem
export const AvatarImage = styled(Avatar.Image, {
    width: '100%',
    height: '100%',
    objectFit: 'cover', // para a imagem não distorcer
    borderRadius: 'inherit', // inherit para herdar do pai
})

// quando a imagem não for carregada
export const AvatarFallback = styled(Avatar.Fallback, {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: "$gray300",
    color: '$gray800',

    svg: {
        width: '$6',
        height: '$6'
    }
})