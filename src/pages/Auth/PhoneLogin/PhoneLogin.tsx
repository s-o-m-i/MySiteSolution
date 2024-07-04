import { useState } from "react";
import { auth } from "config";
import { useNavigate } from "react-router-dom";
import { signInWithPhoneNumber, RecaptchaVerifier, PhoneAuthProvider, signInWithCredential } from "firebase/auth";
import { isEmpty } from "libs/helper";
import { useSnackbar } from "components/shared/Toast/ToastWrap";

// Component for Phone Login
const PhoneLogin = () => {
  const navigate = useNavigate();
  const [showOTP, setShowOTP] = useState(false);
  const [verificationResponse, setVerificationResponse] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  // useSnackbar hook from the ToastWrap component for showing toast messages
  const showSnackbar = useSnackbar();

  // Function to handle phone login form submission
  const onLoginWithPhone = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const phone = data.get("phone");
    
    // Check if phone number is provided
    if (isEmpty(phone as string)) {
      showSnackbar('Phone is required.', 'warning');
      return;
    }
    
    // Initiate Captcha verification
    onCaptchVerify(phone as string);
  };

  // Function to verify Captcha and initiate OTP verification
  const onCaptchVerify = async (phone: string) => {
    try {
      const appVerifier = new RecaptchaVerifier(auth, "recaptcha-container", {});
      setLoading(true);
      
      // Sign in with phone number and initiate Captcha verification
      const response = await signInWithPhoneNumber(auth, phone, appVerifier);
      setVerificationResponse(response);
      setShowOTP(true);
    } catch (error) {
      console.log({ error });
      showSnackbar('Something went wrong! Please refresh the page and try again.', 'error');
    }
  };

  // Function to handle OTP verification form submission
  const onOtpVerification = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const otp = data.get("otp");
    
    // Check if OTP is provided
    if (isEmpty(otp as string)) {
      showSnackbar('OTP is required.', 'warning');
      return;
    }

    try {
      const verificationId = verificationResponse?.verificationId;
      const credential = PhoneAuthProvider.credential(verificationId, otp as string);

      // Sign in with the provided OTP credential
      const response = await signInWithCredential(auth, credential);

      // If user is successfully signed in, store user details and navigate to home page
      if (response?.user) {
        localStorage.setItem("user", JSON.stringify(response?.user));
        navigate("/");
      }
    } catch (error) {
      console.log({ error });
      showSnackbar('Invalid OTP', 'error');
    }
  };

  // JSX structure for the Phone Login component
  return (
    <div>
      {
        <div>
          {showOTP ? (
            <>
              {/* OTP Verification Form */}
              <div className={`login-page`}>
                <div className="form">
                  <h3>Please Enter Your OTP</h3>
                  <form className="login-form" onSubmit={onOtpVerification} autoComplete="off">
                    <input autoComplete="off" type="text" placeholder="Enter Here" name="otp" />
                    <button>Submit</button>
                    <p className="message">
                      Not registered?
                      <div
                        onClick={() => {
                          navigate("/register");
                        }}>
                        Create an account
                      </div>
                    </p>
                  </form>
                </div>
              </div>
            </>
          ) : (
            <>
              {/* Phone Login Form */}
              <div className={`login-page`}>
                <div className="form">
                  <h3>Login With Phone</h3>
                  <form className="login-form" onSubmit={onLoginWithPhone} autoComplete="off">
                    <input autoComplete="off" type="text" placeholder="+92313xxxxxxx" name="phone" />
                    <button style={{ backgroundColor: loading ? "gray" : "#43a047" }} disabled={loading}>
                      Verify
                    </button>
                    <p className="message">
                      Not registered?
                      <div
                        onClick={() => {
                          navigate("/register");
                        }}>
                        Create an account
                      </div>
                    </p>
                    <div id="recaptcha-container"></div>
                  </form>
                </div>
              </div>
            </>
          )}
        </div>
      }
    </div>
  );
};

export default PhoneLogin;
