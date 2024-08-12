import "../styles/styles.scss"

function Banner({ image, showTitle, title }) {
  return (
    <div
      className="banner-container"
      style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${image})`
        }}
    >
      {showTitle && <h1 className="banner-title">Chez vous, partout et ailleurs</h1>}
    </div>
  )
}

export default Banner
