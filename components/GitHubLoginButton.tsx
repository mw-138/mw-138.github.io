"use client";

import React from "react";
import { Button } from "./ui/button";
import { signIn } from "next-auth/react";
import { FaGithub } from "react-icons/fa";

function GitHubLoginButton() {
  return (
    <Button
      variant="outline"
      className="flex gap-2"
      onClick={() => signIn("github")}
    >
      <FaGithub />
      Sign in with GitHub
    </Button>
  );
}

export default GitHubLoginButton;
