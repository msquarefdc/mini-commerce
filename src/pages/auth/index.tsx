import { Box, Button } from "@mui/material";
import { signIn, signOut, useSession } from "next-auth/react";
import { useState } from "react";

const AuthPage = () => {
  const { data: session } = useSession();
  const [type, setType] = useState("password");
  if (session) {
    return (
      <>
        Signed in as {session?.user?.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
        <Box>
          <input type={type} />
          <Button
            variant="contained"
            onClick={() => {
              const newType = type === "password" ? "text" : "password";
              setType(newType);
            }}
          >
            Eye
          </Button>
        </Box>
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  );
};

export default AuthPage;
