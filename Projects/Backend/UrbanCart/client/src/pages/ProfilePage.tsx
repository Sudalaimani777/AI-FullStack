import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/useAuthStore';
import {
  ProfileHeader,
  ProfileIdentityCard,
  PersonalInfoCard,
  ContactDetailsCard,
  ShippingAddressCard,
  PreferencesCard,
  SecurityCard,
} from '../components/profile';

export const ProfilePage: React.FC = () => {
  const { user, setUser, logout } = useAuthStore();
  const navigate = useNavigate();

  // Personal details state - strictly from user store, no dummy fallbacks
  const [fullName, setFullName] = useState(user?.user_name || '');
  const [displayName, setDisplayName] = useState(user?.user_name || '');
  const [email, setEmail] = useState(user?.user_email || '');
  const [phone, setPhone] = useState('');

  // Shipping address state - empty values so inputs show placeholders
  const [streetAddress, setStreetAddress] = useState('');
  const [apt, setApt] = useState('');
  const [city, setCity] = useState('');
  const [stateProv, setStateProv] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [country, setCountry] = useState('');

  // Synchronize state when user data loads or changes
  useEffect(() => {
    if (user) {
      if (user.user_name) {
        setFullName(user.user_name);
        setDisplayName(user.user_name);
      }
      if (user.user_email) {
        setEmail(user.user_email);
      }
    }
  }, [user]);

  // Preferences toggles
  const [productUpdates, setProductUpdates] = useState(true);
  const [offersRewards, setOffersRewards] = useState(false);
  const [smsNotifications, setSmsNotifications] = useState(false);
  const [twoStepVerification, setTwoStepVerification] = useState(true);

  // Status feedback
  const [saveSuccess, setSaveSuccess] = useState(false);

  const handleSave = () => {
    if (user) {
      setUser({
        ...user,
        user_name: fullName.trim() || user.user_name,
        user_email: email.trim() || user.user_email,
      });
    }
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 3000);
  };

  const handleSignOutAll = () => {
    logout();
    navigate('/signin');
  };

  const avatarSrc = user?.avatar || '';
  const memberSince = user?.createdAt
    ? new Date(user.createdAt).getFullYear().toString()
    : '';

  return (
    <div className="w-full bg-[#fbf9f5] min-h-screen">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-[96px] pt-6 md:pt-[56px] pb-10 md:pb-[80px] flex flex-col gap-6 md:gap-[32px]">
        {/* Page Header */}
        <ProfileHeader onSave={handleSave} saveSuccess={saveSuccess} />

        {/* Profile Identity Card */}
        <ProfileIdentityCard
          name={fullName || user?.user_name || 'Account'}
          email={email || user?.user_email || ''}
          avatarSrc={avatarSrc}
          memberSince={memberSince}
        />

        {/* Settings Content Grid: 2 columns on desktop, single stacked column on mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-[24px] items-start w-full">
          {/* Left Column: Personal Information, Contact Details, Shipping Address */}
          <div className="flex flex-col gap-6 md:gap-[24px] w-full">
            <PersonalInfoCard
              fullName={fullName}
              displayName={displayName}
              onFullNameChange={setFullName}
              onDisplayNameChange={setDisplayName}
            />

            <ContactDetailsCard
              email={email}
              phone={phone}
              onEmailChange={setEmail}
              onPhoneChange={setPhone}
            />

            <ShippingAddressCard
              streetAddress={streetAddress}
              apt={apt}
              city={city}
              stateProv={stateProv}
              zipCode={zipCode}
              country={country}
              onStreetAddressChange={setStreetAddress}
              onAptChange={setApt}
              onCityChange={setCity}
              onStateProvChange={setStateProv}
              onZipCodeChange={setZipCode}
              onCountryChange={setCountry}
            />
          </div>

          {/* Right Column: Preferences, Security */}
          <div className="flex flex-col gap-6 md:gap-[24px] w-full">
            <PreferencesCard
              productUpdates={productUpdates}
              offersRewards={offersRewards}
              smsNotifications={smsNotifications}
              onProductUpdatesChange={setProductUpdates}
              onOffersRewardsChange={setOffersRewards}
              onSmsNotificationsChange={setSmsNotifications}
            />

            <SecurityCard
              twoStepVerification={twoStepVerification}
              onTwoStepVerificationChange={setTwoStepVerification}
              onSignOutAll={handleSignOutAll}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
