import { baseQuery } from "@/services"

export const verifyAccessToken = async (accessToken: string) => {
    try {
        const res = await baseQuery.post('/auth/token/verify', {access_token: accessToken});
        if(res.status === 200) return true;
        return false;
    } catch(err) {
        console.log(err);
        return false
    }
}

export const refreshAccessToken = async (refreshToken: string) => {
    try {
        const res = await baseQuery.post('/auth/token/refresh', {refresh_token: refreshToken});
        return res.data.data.access_token;
    } catch(err) {
        console.log(err);
        return null
    }
} 