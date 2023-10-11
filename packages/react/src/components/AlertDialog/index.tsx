import { ComponentProps } from "react"
import { Action, ButtonContainer, Cancel, Content, Description, Overlay, Portal, Root, Title } from "./styles"

export interface AlertDialogProps extends ComponentProps<typeof Root> {
    title: string
    description: string
    buttonCancel?: JSX.Element
    buttonActive: JSX.Element
    messageIcon?: JSX.Element
}

export function AlertDialog({ title, description, buttonCancel, buttonActive, messageIcon, ...props }: AlertDialogProps) {
    return (
        <Root {...props}>
            <Portal>
                <Overlay>
                    <Content>
                        {!!messageIcon && messageIcon}

                        <Title>{title}</Title>

                        <Description>{description}</Description>

                        <ButtonContainer>
                            <Cancel asChild {...props}>
                                {buttonCancel}
                            </Cancel>

                            <Action asChild>
                                {buttonActive}
                            </Action>
                        </ButtonContainer>
                    </Content>
                </Overlay>
            </Portal>
        </Root>
    )
}

AlertDialog.displayName = 'Avatar'