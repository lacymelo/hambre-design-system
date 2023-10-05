import { ComponentProps } from "react";
import { TransitionContainer } from "./styles";

export interface TransitionProps extends ComponentProps<typeof TransitionContainer> {
    currentWidth: string
    currentHeight: string
}

export function Transition({ currentWidth, currentHeight, ...props }: TransitionProps) {
    return (
        <TransitionContainer
            css={{
                '--currentWidth': currentWidth,
                '--currentHeight': currentHeight
            }}
            {...props}
        >
        </TransitionContainer>
    )
}

TransitionContainer.displayName = 'Transition'