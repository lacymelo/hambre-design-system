import { ComponentProps, ElementRef, forwardRef } from "react"
import { Icon, Input, Prefix, TextInputContainer } from "./styles"

export interface TextInputProps extends ComponentProps<typeof Input> {
    prefix?: string
    icon?: JSX.Element
}

export const TextInput = forwardRef<ElementRef<typeof Input>, TextInputProps>(
    ({ prefix, icon, ...props }: TextInputProps, ref) => {
        return (
            <TextInputContainer>
                {!!prefix && <Prefix>{prefix}</Prefix>}

                <Input ref={ref} {...props} />

                {!!icon && <Icon>{icon}</Icon>}
            </TextInputContainer>
        )
    },
)

TextInput.displayName = 'TextInput'