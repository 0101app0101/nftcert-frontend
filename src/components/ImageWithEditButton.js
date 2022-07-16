import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'

const ImageWithEditButton = ({image}) => (
    <div className="edit-image-container">
    <img className="edit-image" src={image} alt={image} />
    <button class="middle-edit-button">
      <FontAwesomeIcon icon={faEdit} />
    </button>
  </div>
)
export default ImageWithEditButton