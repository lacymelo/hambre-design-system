import * as AlertDialog from "@radix-ui/react-alert-dialog";
import { Heading } from "../Heading";
import { Text } from "../Text";
import { keyframes, styled } from "../../styles";


export const Root = styled(AlertDialog.Root, {
})

export const Portal = styled(AlertDialog.Portal, {})

const overlayShow = keyframes({
    from: {
        opacity: 0
    },
    to: {
        opacity: 1
    }
})

export const Overlay = styled(AlertDialog.Overlay, {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    position: 'fixed',
    inset: 0,
    animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
})

const contentShow = keyframes({
    from: {
        opacity: 0,
        transform: 'translate(-50%, -48%) scale(0.96)'
    },
    to: {
        opacity: 1,
        transform: 'translate(-50%, -50%) scale(1)'
    }
})

export const Content = styled(AlertDialog.Content, {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    backgroundColor: '$white',
    top: '50%',
    left: '50%',
    position: 'fixed',
    transform: 'translate(-50%, -50%)',
    borderRadius: '$md',
    boxShadow: 'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
    padding: '$6',
    maxWidth: '500px',
    width: '90vw',
    maxHeight: '85vh',
    animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
})

export const Title = styled(Heading, {
    fontSize: '$xl',
})

export const Description = styled(Text, {
    color: '$gray400',
    textAlign: 'center',
})

export const ButtonContainer = styled('div', {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '$2',
    marginTop: '$7'
})

export const Cancel = styled(AlertDialog.Cancel, {})

export const Action = styled(AlertDialog.Action, {})




