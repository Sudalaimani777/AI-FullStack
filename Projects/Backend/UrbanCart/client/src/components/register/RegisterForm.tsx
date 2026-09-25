import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff, Loader2, AlertCircle } from 'lucide-react';
import { signUpSchema, type SignUpFormValues } from '../../schemas/auth.schema';
import api from '../../api/axios';
import { useAuthStore } from '../../store/useAuthStore';
import { GoogleSignUpButton } from './GoogleSignUpButton';

export interface RegisterFormProps {
  onSuccess?: () => void;
}

export const RegisterForm: React.FC<RegisterFormProps> = ({ onSuccess }) => {
  const navigate = useNavigate();
  const setAuth = useAuthStore((state) => state.setAuth);

  const [showPassword, setShowPassword] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignUpFormValues>({
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit = async (values: SignUpFormValues) => {
    if (!agreed) {
      setServerError('Please agree to the Terms of Service and Privacy Policy.');
      return;
    }

    try {
      setServerError(null);
      const response = await api.post('/auth/register', values);
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
        'Registration failed. Please check your details and try again.';
      setServerError(errorMsg);
    }
  };

  return (
    <div className="w-full max-w-[350px] sm:max-w-md mx-auto my-auto px-6 py-6 sm:px-8 lg:py-6">
      {/* Introduction */}
      <div className="mb-5 space-y-1.5">
        <span className="text-xs font-semibold uppercase tracking-wider text-[#e45a2a]">
          Join UrbanCart
        </span>
        <h1 className="text-3xl sm:text-4xl lg:text-[44px] leading-[1.08] font-normal text-[#242320] tracking-tight">
          Make the city yours.
        </h1>
        <p className="text-sm text-[#716d66] pt-1 leading-relaxed">
          Create an account for saved finds, effortless checkout, and order updates.
        </p>
      </div>

      {/* Google Sign Up Button */}
      <GoogleSignUpButton />

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
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
        {/* Full Name */}
        <div>
          <label className="block text-xs font-medium text-[#242320] mb-1.5">Full name</label>
          <input
            type="text"
            {...register('user_name')}
            placeholder="Your full name"
            className="w-full h-[50px] px-4 bg-white border border-[#d8d1c7] rounded-xl text-sm text-[#242320] placeholder-[#a39d94] focus:outline-none focus:border-[#242320] transition-colors"
          />
          {errors.user_name && (
            <p className="text-xs text-rose-500 mt-1">{errors.user_name.message}</p>
          )}
        </div>

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
              We'll send order updates to this address.
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
              placeholder="Create a password"
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
              Use 8+ characters, including a number.
            </p>
          )}
        </div>

        {/* Consent Checkbox */}
        <div className="flex items-start gap-2.5 pt-1">
          <input
            type="checkbox"
            id="consent"
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
            className="mt-0.5 rounded border-[#d8d1c7] text-[#242320] focus:ring-0 focus:ring-offset-0 cursor-pointer"
          />
          <label htmlFor="consent" className="text-xs text-[#716d66] leading-relaxed cursor-pointer">
            I agree to the{' '}
            <a href="#terms" className="text-[#242320] underline underline-offset-2">
              Terms of Service
            </a>{' '}
            and{' '}
            <a href="#privacy" className="text-[#242320] underline underline-offset-2">
              Privacy Policy
            </a>
            .
          </label>
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
              Creating account...
            </>
          ) : (
            'Create account'
          )}
        </button>

        {/* Sign in prompt */}
        <p className="text-center text-xs text-[#716d66] pt-1">
          Already have an account?{' '}
          <Link to="/signin" className="text-[#e45a2a] font-medium hover:underline">
            Sign in
          </Link>
        </p>
      </form>
    </div>
  );
};
