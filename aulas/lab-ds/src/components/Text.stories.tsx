import { Meta, StoryObj } from '@storybook/react'
import { Text, textProps } from './text'

export default {
    title: 'components/Text',
    component: Text,
    args: {
        children: 'text',
        size: 'md',
    },
    argTypes: {
        children: {
            options: ['sm', 'md', 'lg'],
            control: {
                type: 'inline-radio'
            },
        }
    }
} as Meta<textProps>

export const Default: StoryObj<textProps> = {}

export const Small: StoryObj<textProps> = {
    args: {
        size: 'sm'
    }
}

export const Large: StoryObj<textProps> = {
    args: {
        size: 'lg'
    }
    
}

export const CustomComponent: StoryObj<textProps> = {
    args: {
        asChild: true,
        children: (
            <p>Text with p tag</p>
        )
    },
    argTypes: {
        children: {
            table: {
                disable: true,
            }
        
        },
        asChild: {
            table: {
                disable: true,
            }
        }
    }

}