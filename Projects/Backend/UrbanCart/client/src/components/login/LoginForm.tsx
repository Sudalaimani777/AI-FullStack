import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff, Loader2, AlertCircle } from 'lucide-react';
import { signInSchema, type SignInFormValues } from '../../schemas/auth.schema';
import api from '../../api/axios';
import { useAuthStore } from '../../store/useAuthStore';
import { GoogleSignInButton } from './GoogleSignInButton';

export interface LoginFormProps {
  onSuccess?: () => void;
}

export const LoginForm: React.FC<LoginFormProps> = ({ onSuccess }) => {
  const navigate = useNavigate();
  const setAuth = useAuthStore((state) => state.setAuth);

  const [showPassword, setShowPassword] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignInFormValues>({
    resolver: zodResolver(signInSchema),
  });

  const onSubmit = async (values: SignInFormValues) => {
    try {
      setServerError(null);
      const response = await api.post('/auth/login', values);
      const { user, token } = response.data;
      setAuth(user, token);
      if (onSuccess) {
        onSuccess();
      } else {
        navigate('/');
      }
    } catch (err: unknown) {
      const errorMsg =
        (err as { response?: { data?: { message?: string } } })?.response?.data?.message ||
        'Failed to log in. Please check your credentials.';
      setServerError(errorMsg);
    }
  };

  return (
    <div className="w-full max-w-[350px] sm:max-w-md mx-auto my-auto px-6 py-6 sm:px-8 lg:py-6">
      {/* Introduction */}
      <div className="mb-6 space-y-1.5">
        <span className="text-xs font-semibold uppercase tracking-wider text-[#e45a2a]">
          Member access
        </span>
        <h1 className="text-3xl sm:text-4xl lg:text-[48px] leading-[1.05] font-normal text-[#242320] tracking-tight">
          Welcome back.
        </h1>
        <p className="text-sm text-[#716d66] pt-1 leading-relaxed">
          Sign in to track orders, save your edit, and check out faster.
        </p>
      </div>

      {/* Google Sign In Button */}
      <GoogleSignInButton />

      {/* Divider */}
      <div className="flex items-center gap-3.5 my-4">
        <div className="flex-1 h-px bg-[#d8d1c7]" />
        <span className="text-xs font-medium text-[#a39d94]">OR</span>
        <div className="flex-1 h-px bg-[#d8d1c7]" />
      </div>

      {/* Server Error Message */}
      {serverError && (
        <div className="mb-4 p-3.5 rounded-xl bg-rose-50 border border-rose-200 flex items-center gap-2.5 text-rose-700 text-xs">
          <AlertCircle className="w-4 h-4 flex-shrink-0" />
          <span>{serverError}</span>
        </div>
      )}

      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-3.5">
        {/* Email Address */}
        <div>
          <label className="block text-xs font-medium text-[#242320] mb-1.5">
            Email address
          </label>
          <input
            type="email"
            {...register('user_email')}
            placeholder="you@example.com"
            className="w-full h-[50px] px-4 bg-white border border-[#d8d1c7] rounded-xl text-sm text-[#242320] placeholder-[#a39d94] focus:outline-none focus:border-[#242320] transition-colors"
          />
          {errors.user_email ? (
            <p className="text-xs text-rose-500 mt-1">{errors.user_email.message}</p>
          ) : (
            <p className="text-[11px] text-[#716d66] mt-1">
              We'll never share your email.
            </p>
          )}
        </div>

        {/* Password */}
        <div>
          <label className="block text-xs font-medium text-[#242320] mb-1.5">Password</label>
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              {...register('user_password')}
              placeholder="Enter your password"
              className="w-full h-[50px] pl-4 pr-11 bg-white border border-[#d8d1c7] rounded-xl text-sm text-[#242320] placeholder-[#a39d94] focus:outline-none focus:border-[#242320] transition-colors"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700 transition-colors cursor-pointer"
              aria-label="Toggle password visibility"
            >
              {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            </button>
          </div>
          {errors.user_password ? (
            <p className="text-xs text-rose-500 mt-1">{errors.user_password.message}</p>
          ) : (
            <p className="text-[11px] text-[#716d66] mt-1">
              Error messages appear here when needed.
            </p>
          )}
          <div className="flex justify-end mt-1.5">
            <a href="#forgot" className="text-xs text-[#e45a2a] hover:underline">
              Forgot password?
            </a>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full h-[52px] bg-[#242320] hover:bg-[#161512] disabled:bg-[#5b5853] text-white text-sm font-medium rounded-xl transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer mt-2"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Signing in...
            </>
          ) : (
            'Sign in'
          )}
        </button>

        {/* Sign up prompt */}
        <p className="text-center text-xs text-[#716d66] pt-2">
          New to UrbanCart?{' '}
          <Link to="/register" className="text-[#e45a2a] font-medium hover:underline">
            Create an account
          </Link>
        </p>
      </form>
    </div>
  );
};
