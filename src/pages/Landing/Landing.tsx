import { NavLink } from 'react-router-dom'

// types
import { User } from '../../types/models'
import Profiles from '../Profiles/Profiles';
import rocketY from './landingrocket.png'

interface LandingProps {
  user: User | null;
}

const Landing = (props: LandingProps): JSX.Element => {
  const { user } = props

  return (
    <>
    {user? < Profiles />: 
    <div className='flex flex-col items-center bg-white mt-8 gap-6'>
      <img src={rocketY} className="w-64" alt="" />
      <h1 className='text-4xl font-nunito font-boldest'>Addventures</h1>
      <p className='text-2xl font-nunito font-bolder mb-7'>Transforming math <br />into an adventure.</p>
      <div className='flex justify-center'>
        <div className='flex flex-col w-[80vw] gap-4 text-center'>
          <NavLink to="/login" className='rounded-xl bg-blue-500 h-15 text-white font-bold py-4'>Login</NavLink>
          <NavLink to="/signup"  className='rounded-xl bg-gray-300 h-15 text-black py-4 font-bold'>Create a Profile</NavLink>
        </div>
      </div>
    </div>
  }</>
  )
}

export default Landing