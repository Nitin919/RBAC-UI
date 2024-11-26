import { useState } from 'react';
import { setupTwoFactorAuth, verifyTwoFactorAuth } from '../utils/api';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';

const TwoFactorAuth = () => {
  const [qrCodeUrl, setQrCodeUrl] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [isSetupComplete, setIsSetupComplete] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSetup = async () => {
    setLoading(true);
    try {
      const { qrCode } = await setupTwoFactorAuth();
      setQrCodeUrl(qrCode);
    } catch {
      alert('Failed to set up Two-Factor Authentication. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleVerify = async () => {
    setLoading(true);
    try {
      await verifyTwoFactorAuth(verificationCode);
      setIsSetupComplete(true);
      alert('Two-Factor Authentication setup complete!');
    } catch {
      alert('Verification failed. Please check the code and try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Two-Factor Authentication</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Initial Setup Button */}
        {!qrCodeUrl && !isSetupComplete && (
          <Button onClick={handleSetup} disabled={loading}>
            {loading ? 'Setting up...' : 'Setup 2FA'}
          </Button>
        )}

        {/* QR Code and Verification Input */}
        {qrCodeUrl && !isSetupComplete && (
          <div className="space-y-4">
            <Image
              src={qrCodeUrl}
              alt="QR Code for 2FA"
              className="mx-auto"
              width={200}  // Adjust according to your needs
              height={200} // Adjust according to your needs
            />
            <Input
              type="text"
              placeholder="Enter verification code"
              value={verificationCode}
              onChange={(e) => setVerificationCode(e.target.value)}
            />
            <Button onClick={handleVerify} disabled={loading}>
              {loading ? 'Verifying...' : 'Verify'}
            </Button>
          </div>
        )}

        {/* Success Message */}
        {isSetupComplete && (
          <p className="text-green-500">
            Two-Factor Authentication is successfully set up and active.
          </p>
        )}
      </CardContent>
    </Card>
  );
};

export default TwoFactorAuth;
