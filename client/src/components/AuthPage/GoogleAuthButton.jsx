import googleLogo from "../../assets/googleLogo.jpg";

function GoogleAuthButton({ onPress }) {
  return (
    <div
      className="flex w-3/6 cursor-pointer items-center justify-center rounded-full bg-white py-2 md:w-4/6"
      onClick={onPress}
    >
      <img
        src={googleLogo}
        alt="google-logo"
        className="mx-2 h-4 w-4 md:h-8 md:w-8"
      />
      <div className="mx-2 cursor-pointer text-sm font-medium md:text-base">
        Login with google
      </div>
    </div>
  );
}

export default GoogleAuthButton;
