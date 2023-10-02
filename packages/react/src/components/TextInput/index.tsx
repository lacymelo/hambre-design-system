import { ComponentProps } from "react"
import { Icon, Input, Prefix, TextInputContainer } from "./styles"

export interface TextInputProps extends ComponentProps<typeof Input> {
    prefix?: string
    icon?: JSX.Element
}

export function TextInput({ prefix, icon, ...props }: TextInputProps) {
    return (
        <TextInputContainer>
            {!!prefix && <Prefix>{prefix}</Prefix>}

            <Input {...props} />

            {!!icon && <Icon>{icon}</Icon>}
        </TextInputContainer>
    )
}

TextInput.displayName = 'TextInput'