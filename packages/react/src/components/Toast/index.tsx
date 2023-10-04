import { ComponentProps, ElementType, useEffect, useState } from "react"
import { Close, Description, Icon, ToastRoot, Provider, Viewport, Container, Progress } from "./styles"
import { X } from "phosphor-react"
import { Text } from "../Text"

export interface ToastProps extends ComponentProps<typeof ToastRoot> {
    duration?: number
    message: string
    icon?: JSX.Element | string
}

export function Toast({ duration = 6000, message, icon = '', ...props }: ToastProps) {
    const [progress, setProgress] = useState(100)
    const [isMouseOver, setIsMouseOver] = useState(false)

    useEffect(() => {
        let intervalId: NodeJS.Timeout

        const updateProgress = () => {
            setProgress(prevProgress => Math.max(0, prevProgress - (100 / (duration / 100))))
        }

        // Se o mouse estiver sobre o Toast, pausa a contagem
        if (!isMouseOver) {
            intervalId = setInterval(updateProgress, 100)
        }

        const timeoutId = setTimeout(() => {
            clearInterval(intervalId)
            // Adicione aqui a lógica para remover o Toast do DOM ou alterar o estado conforme necessário
        }, duration)

        return () => {
            clearInterval(intervalId)
            clearTimeout(timeoutId)
        };
    }, [duration, isMouseOver]);

    return (
        <Provider>
            <ToastRoot
                {...props}
                onMouseEnter={() => setIsMouseOver(true)}
                onMouseLeave={() => setIsMouseOver(false)}
                duration={duration}
                css={{ '--time-duration': duration }}>
                <Container>
                    {!!icon && <Icon variant={props.variant}>{icon}</Icon>}

                    <Text>
                        {message}
                    </Text>
                </Container>

                <Close>
                    <X />
                </Close>

                <Progress variant={props.variant} style={{ width: `${progress}%` }} />
            </ToastRoot>
            <Viewport />
        </Provider>
    )
}

Toast.displayName = "Toast"