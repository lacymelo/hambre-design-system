import { AvatarImage } from "@radix-ui/react-avatar"
import { AvatarContainer, AvatarFallback } from "./styles"
import { User } from "phosphor-react"
import { ComponentProps } from "react"

export interface AvatarProps extends ComponentProps<typeof AvatarContainer> {
    src?: string
    alt?: string
}

export function Avatar({ src, alt, ...props }: AvatarProps) {
    return (
        <AvatarContainer {...props}>
            <AvatarImage src={src} alt={alt} />

            <AvatarFallback delayMs={600}>
                <User />
            </AvatarFallback>
        </AvatarContainer>
    )
}

Avatar.displayName = 'Avatar'
