import { fireEvent, render, screen } from '@testing-library/react'
import { mocked } from 'ts-jest/utils'
import { SubscribeButton } from '.'
import { signIn, useSession } from 'next-auth/client'
import { useRouter } from 'next/router'

jest.mock('next-auth/client')
jest.mock('next/router')

describe('SubscribeButton component', () => {
  it('renders correctly', () => {
    const useSessionMocked = mocked(useSession)

    useSessionMocked.mockReturnValueOnce([null, false])
    
    render(
      <SubscribeButton />
    )
  
    expect(screen.getByText('Subscribe now')).toBeInTheDocument()
  })
  
  it('redirects user to sign in when not authenticated', () => {
    const signInMocked = mocked(signIn)
    const useSessionMocked = mocked(useSession)

    useSessionMocked.mockReturnValueOnce([null, false])
    
    render(<SubscribeButton />)

    const subscribeButton = screen.getByText('Subscribe now')

    fireEvent.click(subscribeButton)

    expect(signInMocked).toHaveBeenCalled()
  })

  it('redirects to posts when user already has subscription', () => {
    const useRouterMocked = mocked(useRouter)
    const useSessionMocked = mocked(useSession)
    const pushMocked = jest.fn()

    useSessionMocked.mockReturnValueOnce([
      {
        user: { 
          name: 'John Doe', 
          email: 'john.doe@example.com' 
        }, 
        expires: 'fake-expires',
        activeSubscription: 'fake-active-subscription'
      }, 
      false
    ])

    useRouterMocked.mockReturnValueOnce({
      push: pushMocked
    } as any)

    render(<SubscribeButton />)

    const subscribeButton = screen.getByText('Subscribe now')

    fireEvent.click(subscribeButton)

    expect(pushMocked).toHaveBeenCalled()
  })
})