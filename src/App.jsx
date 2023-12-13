import "./App.css"
import { TwitterFollowCard } from "./TwitterFollowCard"

export function App () {

  const users = [
    {
      userName: "asiel",
      name: "Asiel Valle Valera",
      isFollowing: true
    },
    {
      userName: "alejandro",
      name: "Alejandro R.",
      isFollowing: false
    },
    {
      userName: "perez",
      name: "Pedro Perez",
      isFollowing: true
    },
    {
      userName: "antonio",
      name: "Antonio Toledo Cruz",
      isFollowing: false
    }
  ]

  return (
    <section className="app-section">

      {
        users.map(({ userName, name, isFollowing }) => (
          <TwitterFollowCard key={userName} userName={userName} initialIsFollowing={isFollowing}>
            {name}
          </TwitterFollowCard>
        ))
      } 

    </section>
  )   
}