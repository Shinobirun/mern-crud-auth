import { useForm } from 'react-hook-form';
import { useAuth} from '../context/AuthContext';
import { useEffect } from 'react';
import {useNavigate} from 'react-router-dom'


function RegisterPage()  {

    const {register, handleSubmit, formState :{errors},}= useForm();
    const {signup, isAuthenticated, errors: registerErrors} = useAuth();

    useEffect(() => {
        if (isAuthenticated) NavigationPreloadManager('/task')
    },  [isAuthenticated])


    const onSubmit = handleSubmit(async (values) =>{
        signup(values); 
    });


    return (
        <div className='bg-zing-800 max-w-md p-10 rounded-md'>
            {
                registerErrors.map((error,i) => (
                    <div className="bg-red-500 p-2 text-white">
                        {error}
                    </div>
                ) )
            }
            <form 
            onSubmit={onSubmit}>
                <input type="text"
                {...register('username',{required: true})}
                placeholder='Username'
                className='"w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2 '></input>
                {
                    errors.username && (<p className="text-red-500">User name is required</p>)
                }
                <input type="email"
                {...register('email',{required: true})} 
                className='"w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
                placeholder='email'></input>
                {
                    errors.email && (<p className="text-red-500">User email is required</p>)
                }
                <input type="password"
                {...register('password',{required: true})}
                className='"w-full bg-zinc-700 text-white px-4 py-2 rounded-md  my-2'
                placeholder='password'></input>
                {
                    errors.password && (<p className="text-red-500">User password is required</p>)
                }
                <button type="submite">Register</button>
            </form>

        </div>
    )
}

export default RegisterPage;