import "./assets/styles/styles.scss";
import newsInfo from "./assets/data/data.json"

const App = () => {
  return (
    <div>
      <h1>Hi</h1>
      {newsInfo.map(news =>
        <div key={news?.id}>
          <h2>{news?.title}</h2>
          <p>{news?.description}</p>
        </div>
      )}
    </div>
  )
}

export default App