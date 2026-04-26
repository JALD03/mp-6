"use client";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { Box, Typography, Divider } from "@mui/material";
import styled from "styled-components";

const Avatar = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 2px solid #1f2937;
  margin-bottom: 20px;
`;

const SignOutLink = styled.a`
  font-size: 0.88rem;
  color: #6b7280;
  text-decoration: none;
  transition: color 0.2s;

  &:hover {
    color: #fff;
  }
`;

function Profile() {
    const params = useSearchParams();
    const name = params.get("name");
    const email = params.get("email");
    const picture = params.get("picture");

    if (!name) return (
        <Box textAlign="center">
            <Typography color="text.secondary" mb={2}>No user info found.</Typography>
            <SignOutLink href="/">← Go back</SignOutLink>
        </Box>
    );

    return (
        <Box textAlign="center">
            <Avatar src={picture!} alt="Profile picture" />
            <Typography variant="h5" sx={{ fontWeight: 700, mb: 0.5 }}>{name}</Typography>
            <Typography variant="body2" color="text.secondary">{email}</Typography>
            <Divider sx={{ my: 4, borderColor: "#1f2937" }} />
            <SignOutLink href="/">Sign out</SignOutLink>
        </Box>
    );
}

export default function ProfilePage() {
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
                maxWidth: 400,
                width: "100%",
                boxShadow: "0 25px 50px rgba(0,0,0,0.5)",
            }}>
                <Suspense fallback={<Typography color="text.secondary">Loading...</Typography>}>
                    <Profile />
                </Suspense>
            </Box>
        </Box>
    );
}