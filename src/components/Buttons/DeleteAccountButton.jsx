import { useAuth0 } from '@auth0/auth0-react';
import React, { useState } from 'react';

function DeleteAccountButton() {
  const { user, getAccessTokenSilently } = useAuth0();
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDeleteAccount = async () => {
    const confirmed = window.confirm(
      'Are you sure you want to delete your account?'
    );
    if (confirmed) {
      setIsDeleting(true);
      const token = await getAccessTokenSilently();
      const response = await fetch(
        `https://${process.env.REACT_APP_AUTH0_DOMAIN}/api/v2/users/${user.sub}`,
        {
          method: 'DELETE',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setIsDeleting(false);
      if (response.ok) {
        // Log the user out of your app
        // Display a message confirming that their account has been deleted
      } else {
        // Display an error message
      }
    }
  };

  return (
    <button
      onClick={handleDeleteAccount}
      disabled={isDeleting}
      className='bg-red-700 opacity-85 text-white p-3 rounded-lg hover:bg-red-500'
    >
      Delete Account
    </button>
  );
}

export default DeleteAccountButton;
