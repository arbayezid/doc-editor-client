import { Link, useNavigate } from 'react-router-dom';
import loginLogo from '../../assets/DevsImg/tadyLogo.png'
import { useForm } from "react-hook-form";
import { useContext, useState } from 'react';
import { FaEye } from 'react-icons/fa';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';
import SocialLogin from '../shared/SocialLogin';
// import { AuthContext } from '../../providers/AuthProvider';
// import Swal from 'sweetalert2';

const Signin = () => {
    const [showPassword, setShowPassword] = useState(false)
    const {signinUser} = useContext(AuthContext)
    const navigate = useNavigate()
    // const location = useLocation()

    // const from = location.state?.from?.pathname || '/'

    const togglePassword = () =>{
        setShowPassword(!showPassword)
    }

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        signinUser(data.email,data.password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser)
            Swal.fire({
                icon: 'success',
                title: 'Login Successfull',
                text: 'Welcome to Likho',
              })
              navigate('/')

        })
        .catch(error => {
            console.log(error.message)
        })
    }

    return (
        <div className="hero min-h-screen bg-base-200 my-10 rounded-xl">
            
            <form onSubmit={handleSubmit(onSubmit)} className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left w-1/2">

                    <img src={loginLogo} alt="" />
                </div>
                <div className="card w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className="text-3xl font-bold">Login!</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" {...register("email", { required: true })} placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type={showPassword ? 'text' : 'password'} {...register("password", { required: true })} placeholder="password" className="input input-bordered"/><FaEye onClick={togglePassword} className='relative bottom-7 left-64'></FaEye>
                            
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-3">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <p className='mt-2'>New to this site? <Link to='/signup' className='text-blue-600 font-semibold'>Signup</Link></p>
                    </div>
                    <SocialLogin></SocialLogin>
                </div>
            </form>
        </div>
    );
};

export default Signin;
