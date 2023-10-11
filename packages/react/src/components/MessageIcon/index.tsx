import React, { ComponentProps } from "react"
import { Container, Content } from "./styles"

export interface MessageIconProps extends ComponentProps<typeof Container> {
    icon: JSX.Element
}

export function MessageIcon({ icon, ...props }: MessageIconProps) {
    return (
        <Container {...props}>
            <Content  {...props} css={{ '--icon-variant': props.variant }}>
                {icon}
            </Content>
        </Container>
    )
}

MessageIcon.displayName = 'MessageIcon' 