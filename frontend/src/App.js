import { GoogleOAuthProvider } from "@react-oauth/google";
import AccountProvider from "./context/AccountProvider";
//components
import Messenger from "./components/Messenger";

function App() {
  
  const clientId = "565131881336-u5vreip511r6rjalcg29aovcu9slgkkj.apps.googleusercontent.com";

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <AccountProvider>
        <Messenger/>
      </AccountProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
