import React, { useState } from 'react';
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
  const { user, logout } = useAuthStore();
  const navigate = useNavigate();

  // Parse name from user store or defaults
  const fullName = user?.user_name || 'Maya Thompson';
  const nameParts = fullName.split(' ');
  const defaultFirst = nameParts[0] || 'Maya';
  const defaultLast = nameParts.slice(1).join(' ') || 'Thompson';

  // Personal details state
  const [firstName, setFirstName] = useState(defaultFirst);
  const [lastName, setLastName] = useState(defaultLast);
  const [displayName, setDisplayName] = useState(
    user?.user_name ? `${user.user_name.split(' ')[0]} T.` : 'Maya T.'
  );
  const [email, setEmail] = useState(user?.user_email || 'maya.thompson@example.com');
  const [phone, setPhone] = useState('+1 (415) 555-0138');

  // Shipping address state
  const [streetAddress, setStreetAddress] = useState('245 Market Street');
  const [apt, setApt] = useState('Apt 4B');
  const [city, setCity] = useState('San Francisco');
  const [stateProv, setStateProv] = useState('California');
  const [zipCode, setZipCode] = useState('94105');
  const [country, setCountry] = useState('United States');

  // Preferences toggles
  const [productUpdates, setProductUpdates] = useState(true);
  const [offersRewards, setOffersRewards] = useState(false);
  const [smsNotifications, setSmsNotifications] = useState(true);
  const [twoStepVerification, setTwoStepVerification] = useState(true);

  // Status feedback
  const [saveSuccess, setSaveSuccess] = useState(false);

  const handleSave = () => {
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 3000);
  };

  const handleSignOutAll = () => {
    logout();
    navigate('/signin');
  };

  const avatarSrc =
    user?.avatar ||
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80';

  return (
    <div className="w-full bg-[#fbf9f5] min-h-screen">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-[96px] pt-6 md:pt-[56px] pb-10 md:pb-[80px] flex flex-col gap-6 md:gap-[32px]">
        {/* Page Header (Desktop: Node 53:789 / Mobile: Node 53:914) */}
        <ProfileHeader onSave={handleSave} saveSuccess={saveSuccess} />

        {/* Profile Identity Card (Desktop: Node 53:796 / Mobile: Node 53:920) */}
        <ProfileIdentityCard
          name={`${firstName} ${lastName}`}
          email={email}
          avatarSrc={avatarSrc}
          memberSince="2023"
        />

        {/* Settings Content Grid: 2 columns on desktop, single stacked column on mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-[24px] items-start w-full">
          {/* Left Column: Personal Information, Contact Details, Shipping Address */}
          <div className="flex flex-col gap-6 md:gap-[24px] w-full">
            <PersonalInfoCard
              firstName={firstName}
              lastName={lastName}
              displayName={displayName}
              onFirstNameChange={setFirstName}
              onLastNameChange={setLastName}
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
