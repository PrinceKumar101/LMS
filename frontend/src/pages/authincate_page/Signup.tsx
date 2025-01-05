import { SignupForm } from '@/components/Signup-form'
import React from 'react'

const Signup:React.FC = () => {
  return (
    <>
    <div>
      <div>
        <SignupForm website_name='LMS' login_link='/login'/>
      </div>
    </div>
    </>
  )
}

export default Signup