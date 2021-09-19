import {useParams} from 'react-router-dom'


const ModelPage = () => {
const {id, name} = useParams()

  return (
    <div className="model-page">

      <h1>Model ID - {id}</h1>
      <h1>Model Name - {name}</h1>
    </div>
  )
}
export default ModelPage
