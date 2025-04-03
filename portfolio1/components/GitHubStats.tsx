"use client"

import { useEffect, useState } from "react";

interface GitHubData {
  followers: number;
  following: number;
  public_repos: number;
}

export function GitHubStats() {
    const [githubData, setGithubData] = useState<GitHubData | null>(null);

    useEffect(() => {
      fetch("https://api.github.com/users/rawbil")
        .then((res) => res.json())
        .then((data) => setGithubData(data));
    }, []);
    return (
      githubData && (
        <div className="mt-6 text-center">
          <p className="text-lg">GitHub Followers: <span className="font-semibold">{githubData.followers}</span></p>
          <p className="text-lg">Following: <span className="font-semibold">{githubData.following}</span></p>
          <p className="text-lg">Public Repositories: <span className="font-semibold">{githubData.public_repos}</span></p>
        </div>
      )
    );
  }