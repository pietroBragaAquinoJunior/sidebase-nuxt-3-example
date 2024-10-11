import GithubProvider from 'next-auth/providers/github'
import { NuxtAuthHandler } from '#auth'

export default NuxtAuthHandler({
  // A secret string you define, to ensure correct encryption
  secret: 'pipiboy-hortelazinho-anis-estrelado',
  providers: [
    // @ts-expect-error Use .default here for it to work during SSR.
    GithubProvider.default({
      clientId: 'Ov23livXi0zJ2QkBWkS5',
      clientSecret: '2447afa16a5712f1da59d443afcffdac6e9483f4'
    })
  ],
  callbacks: {
    signIn ({ user, account, profile, email, credentials }) {
      console.log(user, account, profile, email, credentials)
      return true
    }
  }
}
)
