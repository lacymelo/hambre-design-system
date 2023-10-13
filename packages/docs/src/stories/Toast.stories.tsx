import { Toast, ToastProps } from "@hambre-ui/react"
import { Meta, StoryObj } from "@storybook/react"
import { Article, Check, CheckCircle, CircleHalfTilt, Fire, Lightbulb, WarningCircle } from "phosphor-react"

export default {
    title: 'Message/Toast',
    component: Toast,
    args: {
        message: "No momento você está sem internet! tente mais tarde",
        variant: 'success'
    },
} as Meta<ToastProps>

export const Success: StoryObj<ToastProps> = {
    args: {
        icon: <CheckCircle />,
        message: 'Created Success!'
    }
}

export const Error: StoryObj<ToastProps> = {
    args: {
        icon: <Fire />,
        message: 'Page not found!',
        variant: 'error'
    },
}
export const Warning: StoryObj<ToastProps> = {
    args: {
        icon: <WarningCircle />,
        message: 'expiration token!',
        variant: 'warning'
    },
}
export const Info: StoryObj<ToastProps> = {
    args: {
        icon: <Lightbulb />,
        message: 'User profile incomplete!',
        variant: 'info'
    },
}

export const SuccessOpen: StoryObj<ToastProps> = {
    args: {
        message: 'Created Success!',
        variant: 'success',
        open: true,
        duration: 0
    },
}

export const ErrorOpen: StoryObj<ToastProps> = {
    args: {
        message: 'Page not found!',
        icon: <Fire />,
        variant: 'error',
        open: true,
        duration: 0
    },
}

export const WarningOpen: StoryObj<ToastProps> = {
    args: {
        message: 'expiration token!',
        icon: <WarningCircle />,
        variant: 'warning',
        open: true,
        duration: 0
    },
}

export const InfoOpen: StoryObj<ToastProps> = {
    args: {
        message: 'User profile incomplete!',
        icon: <Lightbulb />,
        variant: 'info',
        open: true,
        duration: 0
    },
}