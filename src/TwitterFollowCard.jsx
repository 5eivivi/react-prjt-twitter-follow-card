import { useState } from "react"

export function TwitterFollowCard ({ userName, initialIsFollowing, children }) {

  const [ isFollowing, setIsFollowing ] = useState(initialIsFollowing)

  console.log("TwitterFollowCard.jsx ", isFollowing )

  const textoDelBoton = isFollowing ? "Siguiendo" : "Seguir"
  const classNameDelBoton = isFollowing ? "tw-followCard-button is-following" : "tw-followCard-button"

  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img className="tw-followCard-avatar" alt="Avatar de midudev" src={`https://unavatar.io/${userName}`} />
        <div className="tw-followCard-info">
          <strong>{ children }</strong>
          <span className="tw-followCard-infoUserName">@{ userName }</span>
        </div>
      </header>

      <aside>
        <button className={classNameDelBoton} onClick={() => setIsFollowing(!isFollowing)}>
          <span className="tw-followCard-text">{ textoDelBoton }</span>
          <span className="tw-followCard-stopFollow">Dejar de seguir</span>
        </button>
      </aside>
    </article>
  )
}