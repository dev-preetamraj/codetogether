import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import React from "react";

const githubClientId = process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID;

const LoginPage = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <Card className="w-[25rem] h-[15rem]">
        <CardHeader>
          <CardTitle>Continue using codetogether</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="w-full">
            <Link
              href={`https://github.com/login/oauth/authorize?client_id=${githubClientId}&scope=read:user,user:email`}
            >
              <Button variant="outline" className="w-full" size="lg">
                Login with Github
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginPage;
