import { CaretDown, CaretUp, Check } from "phosphor-react"
import { Content, Icon, Item, ItemIndicator, ItemText, Portal, Root, ScrollDownButton, ScrollUpButton, Trigger, Value, Viewport } from "./styles"
import { ComponentProps, ElementType } from "react"

type Item = {
    value: string
    text: string
}

export interface SelectProps extends ComponentProps<typeof Root> {
    as?: ElementType
    placeholder: string
    items: Item[]
}

export function Select({ placeholder, items, ...props }: SelectProps) {
    return (
        <Root {...props}>
            <Trigger>
                <Value placeholder={placeholder} />
                <Icon>
                    <CaretDown />
                </Icon>
            </Trigger>

            <Portal>
                <Content>
                    <ScrollUpButton>
                        <CaretUp />
                    </ScrollUpButton>

                    <Viewport>
                        {
                            items.map((item, index) => (
                                <Item value={item.value} key={index}>
                                    <ItemIndicator>
                                        <Check />
                                    </ItemIndicator>

                                    <ItemText>{item.text}</ItemText>
                                </Item>
                            ))
                        }

                    </Viewport>

                    <ScrollDownButton>
                        <CaretDown />
                    </ScrollDownButton>
                </Content>
            </Portal>
        </Root>
    )
}

Select.displayName = 'Select'