import { ComponentProps } from "react";
import { SwitchContainer, Thumb } from "./styles";

export interface SwitchProps extends ComponentProps<typeof SwitchContainer> { }

export function Switch(props: SwitchProps) {
    return (
        <SwitchContainer {...props}>
            <Thumb />
        </SwitchContainer>
    )
}

Switch.displayName = 'Switch'