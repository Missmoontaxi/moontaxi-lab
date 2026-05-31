const LOGIN = 'Missmoontaxi'

export type GitHubStats = {
  contributions: number
  activeRepos: number
  commitsThisMonth: number
}

// Shown when no token is configured (local dev / preview) or a fetch fails.
const FALLBACK: GitHubStats = {
  contributions: 203,
  activeRepos: 6,
  commitsThisMonth: 63,
}

const QUERY = `
  query ($login: String!, $yearStart: DateTime!, $now: DateTime!, $monthStart: DateTime!) {
    user(login: $login) {
      year: contributionsCollection(from: $yearStart, to: $now) {
        contributionCalendar { totalContributions }
        commitContributionsByRepository(maxRepositories: 100) { repository { name } }
      }
      month: contributionsCollection(from: $monthStart, to: $now) {
        totalCommitContributions
      }
    }
  }
`

export async function getGitHubStats(): Promise<GitHubStats> {
  const token = process.env.GITHUB_TOKEN
  if (!token) return FALLBACK

  const now = new Date()
  const yearStart = new Date(Date.UTC(now.getUTCFullYear(), 0, 1)).toISOString()
  const monthStart = new Date(
    Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), 1)
  ).toISOString()

  try {
    const res = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: QUERY,
        variables: { login: LOGIN, yearStart, now: now.toISOString(), monthStart },
      }),
      // Re-fetch at most once an hour (ISR).
      next: { revalidate: 3600 },
    })

    if (!res.ok) return FALLBACK

    const json = await res.json()
    const user = json?.data?.user
    if (!user) return FALLBACK

    return {
      contributions: user.year.contributionCalendar.totalContributions,
      activeRepos: user.year.commitContributionsByRepository.length,
      commitsThisMonth: user.month.totalCommitContributions,
    }
  } catch {
    return FALLBACK
  }
}
