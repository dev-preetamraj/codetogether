import { baseQuery } from "@/services";

export const fetchUser = async (accessToken: string) => {
  try {
    const res = await baseQuery.get("/auth/me", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return res.data.data;
  } catch (err) {
    console.log(err);
    return null;
  }
};
