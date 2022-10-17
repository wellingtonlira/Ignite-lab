import { Meta, StoryObj } from '@storybook/react'
import { within, userEvent, waitFor } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import { SingIn } from './SingIn'

export default {
    title: 'components/SingIn',
    component: SingIn,
    args: {
        children: 'Create account',
    },
    argTypes: {}
} as Meta

export const Default: StoryObj = {
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement)

        userEvent.type(canvas.getByPlaceholderText('Digite seu e-mail'), 'well.inacio7@gmail.com')
        userEvent.type(canvas.getByPlaceholderText('*******'), '12345678')
        
        userEvent.click(canvas.getByRole('button'))
        
        await waitFor(() => {
            expect(canvas.getByText('Login realizado!')).toBeInTheDocument()
        })
        
    }
}