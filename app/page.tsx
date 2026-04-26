import { Box, Typography } from "@mui/material";
import SignInButton from "./components/button";

export default function Home() {
    return (
        <Box sx={{
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            bgcolor: "background.default",
            p: 3,
        }}>
            <Box sx={{
                bgcolor: "background.paper",
                borderRadius: 4,
                p: { xs: 4, sm: 6 },
                maxWidth: 420,
                width: "100%",
                boxShadow: "0 25px 50px rgba(0,0,0,0.5)",
            }}>
                <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
                    Sign in
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>
                    Connect with your Google account to continue.
                </Typography>
                <SignInButton />
                <Typography variant="caption" color="text.secondary" sx={{ mt: 2, display: "block" }}>
                    We only request access to your basic profile information.
                </Typography>
            </Box>
        </Box>
    );
}