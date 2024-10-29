import "./globals.css";
import AuthProvider from "./(components)/AuthProvider";
import Nav from "./(components)/Nav";

export const metadata = {
  title: "authenticationApp",
  description: "application pour maitriser les systèmes d'authentification",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="fr">
      <body className="bg-gray-100">
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
};

export default RootLayout;
