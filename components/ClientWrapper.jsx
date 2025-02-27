import { ClerkProvider } from "@clerk/nextjs";

const ClientWrapper = ({ children }) => {
  return <ClerkProvider>{children}</ClerkProvider>;
};

export default ClientWrapper;
