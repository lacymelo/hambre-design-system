import { ComponentProps } from "react"
import { Action, ButtonContainer, Cancel, Content, Description, Overlay, Root, Title } from "./styles"
import { Box } from "../Box"

export interface AlertDialogProps extends ComponentProps<typeof Root> {
    title: string
    description: string
    buttonCancel?: JSX.Element
    buttonActive: JSX.Element
}

export function AlertDialog({ title, description, buttonCancel, buttonActive, ...props }: AlertDialogProps) {
    return (
        <Root {...props}>
            <Overlay>
                <Content>
                    <Title>{title}</Title>

                    <Description>{description}</Description>

                    <ButtonContainer>
                        <Cancel asChild>
                            {buttonCancel}
                        </Cancel>

                        <Action asChild>
                            {buttonActive}
                        </Action>
                    </ButtonContainer>
                </Content>
            </Overlay>
        </Root>
    )
}

AlertDialog.displayName = 'Avatar'