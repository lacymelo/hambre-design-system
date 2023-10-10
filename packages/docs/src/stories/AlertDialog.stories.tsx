import { AlertDialog, AlertDialogProps, Box, Button } from "@hambre-ui/react"
import { Meta, StoryObj } from "@storybook/react"

export default {
    title: 'Message/Alert Dialog',
    component: AlertDialog,
    args: {
        open: false
    }
} as Meta<AlertDialogProps>

export const Success: StoryObj<AlertDialogProps> = {
    args: {
        open: true,
        title: 'Success',
        description: 'Are you sure you want to delete this post? This action cannot be this fire this fire undone.',
        buttonCancel: (
            <>
                <Button
                    variant="secondary"
                    size="sm"
                >
                    Cancelar
                </Button>
            </>
        ),
        buttonActive: (
            <>
                <Button

                    variant="success"
                    size="sm"
                >
                    Confirmar
                </Button>
            </>
        )
    }
}

export const Warning: StoryObj<AlertDialogProps> = {
    args: {
        open: true,
        title: 'Success',
        description: 'Are you sure you want to delete this post? This action cannot be this fire this fire undone.',
        buttonCancel: (
            <>
                <Button
                    variant="secondary"
                    size="sm"
                >
                    Cancelar
                </Button>
            </>
        ),
        buttonActive: (
            <>
                <Button
                    variant="warning"
                    size="sm"
                >
                    Confirmar
                </Button>
            </>
        )
    }
}

export const danger: StoryObj<AlertDialogProps> = {
    args: {
        open: true,
        title: 'Success',
        description: 'Are you sure you want to delete this post? This action cannot be this fire this fire undone.',
        buttonCancel: (
            <>
                <Button
                    variant="secondary"
                    size="sm"
                >
                    Cancelar
                </Button>
            </>
        ),
        buttonActive: (
            <>
                <Button
                    variant="danger"
                    size="sm"
                >
                    Confirmar
                </Button>
            </>
        )
    }
}

export const info: StoryObj<AlertDialogProps> = {
    args: {
        open: true,
        title: 'Success',
        description: 'Are you sure you want to delete this post? This action cannot be this fire this fire undone.',
        buttonCancel: (
            <>
                <Button
                    variant="secondary"
                    size="sm"
                >
                    Cancelar
                </Button>
            </>
        ),
        buttonActive: (
            <>
                <Button
                    variant="info"
                    size="sm"
                >
                    Confirmar
                </Button>
            </>
        )
    }
}