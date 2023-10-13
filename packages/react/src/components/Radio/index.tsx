import { ComponentProps } from "react"
import { Indicator, RadioContainer, RadioItem } from "./styles"
import { Text } from "../Text"

type Item = {
    value: string,
    text: string,
}

export interface RadioProps extends ComponentProps<typeof RadioContainer> {
    name: string
    itens: Item[]
}

export function Radio({ name, itens, ...props }: RadioProps) {
    return (
        <RadioContainer {...props}>
            {
                itens.map((item, index) => (
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <RadioItem value={`${item.value}`} id={`radio-${index}`}>
                            <Indicator />
                        </RadioItem>

                        <Text>{item.text}</Text>
                    </div>
                ))
            }
        </RadioContainer>
    )
}

Radio.displayName = 'Radio'