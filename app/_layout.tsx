import App from "./app_stack";
import { AuthProvider } from "./auth_provider";

export default function RootLayout() {

  return (
    <AuthProvider>
    <App></App>
    </AuthProvider>
  );
}
