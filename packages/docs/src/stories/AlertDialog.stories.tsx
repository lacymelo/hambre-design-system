// import { AlertDialog, AlertDialogProps, Box, Button, MessageIcon } from "@hambre-ui/react"
// import { Meta, StoryObj } from "@storybook/react"
// import { Check, Fire, WarningCircle } from "phosphor-react"

// export default {
//     title: 'Message/Alert Dialog',
//     component: AlertDialog,
//     args: {
//         open: false,
//     }
// } as Meta<AlertDialogProps>

// export const Success: StoryObj<AlertDialogProps> = {
//     args: {
//         open: true,
//         title: 'Success',
//         messageIcon: (
//             <MessageIcon
//                 icon={<Check />}
//                 variant='green'
//             />
//         ),
//         description: 'Are you sure you want to delete this post? This action cannot be this fire this fire undone.',
//         buttonCancel: (
//             <Button
//                 variant="secondary"
//                 size="sm"
//             >
//                 Cancelar
//             </Button>
//         ),
//         buttonActive: (
//             <Button

//                 variant="success"
//                 size="sm"
//             >
//                 Confirmar
//             </Button>
//         )
//     }
// }

// export const Warning: StoryObj<AlertDialogProps> = {
//     args: {
//         open: true,
//         messageIcon: (
//             <MessageIcon
//                 icon={<WarningCircle />}
//                 variant='orange'
//             />
//         ),
//         title: 'Warning',
//         description: 'Are you sure you want to delete this post? This action cannot be this fire this fire undone.',
//         buttonCancel: (
//             <Button
//                 variant="secondary"
//                 size="sm"
//             >
//                 Cancelar
//             </Button>
//         ),
//         buttonActive: (
//             <Button
//                 variant="warning"
//                 size="sm"
//             >
//                 Confirmar
//             </Button>
//         )
//     }
// }

// export const danger: StoryObj<AlertDialogProps> = {
//     args: {
//         open: true,
//         messageIcon: (
//             <MessageIcon
//                 icon={<Fire />}
//                 variant='red'
//             />
//         ),
//         title: 'Danger',
//         description: 'Are you sure you want to delete this post? This action cannot be this fire this fire undone.',
//         buttonCancel: (
//             <Button
//                 variant="secondary"
//                 size="sm"
//             >
//                 Cancelar
//             </Button>
//         ),
//         buttonActive: (
//             <Button
//                 variant="danger"
//                 size="sm"
//             >
//                 Confirmar
//             </Button>
//         )
//     }
// }

// export const info: StoryObj<AlertDialogProps> = {
//     args: {
//         open: true,
//         messageIcon: (
//             <MessageIcon
//                 icon={<WarningCircle />}
//                 variant='blue'
//             />
//         ),
//         title: 'Info',
//         description: 'Are you sure you want to delete this post? This action cannot be this fire this fire undone.',
//         buttonCancel: (
//             <Button
//                 variant="secondary"
//                 size="sm"
//             >
//                 Cancelar
//             </Button>
//         ),
//         buttonActive: (
//             <Button
//                 variant="info"
//                 size="sm"
//             >
//                 Confirmar
//             </Button>
//         )
//     }
// }