export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const code = searchParams.get("code");

    if (!code) {
        return Response.redirect("/error");
    }

    const tokenRes = await fetch("https://oauth2.googleapis.com/token", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
            code,
            client_id: process.env.GOOGLE_CLIENT_ID!,
            client_secret: process.env.GOOGLE_CLIENT_SECRET!,
            redirect_uri: process.env.REDIRECT_URI!,
            grant_type: "authorization_code",
        }),
    });

    const { access_token } = await tokenRes.json();

    const userRes = await fetch("https://www.googleapis.com/oauth2/v3/userinfo", {
        headers: { Authorization: `Bearer ${access_token}` },
    });

    const user = await userRes.json();

    const profileParams = new URLSearchParams({
        name: user.name,
        email: user.email,
        picture: user.picture,
    });

    const baseUrl = process.env.REDIRECT_URI!.replace("/api/auth/callback", "");
    return Response.redirect(`${baseUrl}/profile?${profileParams}`);
}