import {userForm} from 'react-hook-form'

function RegisterPage()  {

    const {register, handleSubmit}= useForm()
    return (
        <div className='bg-zing-800 max-w-md rounded-md'>
            <form onSubmit={handleSubmit(values =>{
                console.log(values);
            })}>
                <input type="text"
                {...register('username',{required: true})}
                className='"w-full bg-zinc-700 text-white px-4 py2 rounded-md '></input>
                <input type="email"
                {...register('email',{required: true})}></input>
                <input type="password"
                {...register('password',{required: true})}></input>
                <button type="submite">Register</button>
            </form>

        </div>
    )
}

export default RegisterPage;