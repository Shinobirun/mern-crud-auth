import { useForm } from 'react-hook-form'
import {registerRequest} from '../api/auth'

function RegisterPage()  {

    const {register, handleSubmit}= useForm()
    const onSubmit = handleSubmit(async (values) =>{
        
        const res = await registerRequest(values)
        console.log(res);
    })


    return (
        <div className='bg-zing-800 max-w-md p-10 rounded-md'>
            <form 
            onSubmit={onSubmit}>
                <input type="text"
                {...register('username',{required: true})}
                placeholder='Username'
                className='"w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2 '></input>
                <input type="email"
                {...register('email',{required: true})} 
                className='"w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
                placeholder='email'></input>
                <input type="password"
                {...register('password',{required: true})}
                className='"w-full bg-zinc-700 text-white px-4 py-2 rounded-md  my-2'
                placeholder='password'></input>
                <button type="submite">Register</button>
            </form>

        </div>
    )
}

export default RegisterPage;