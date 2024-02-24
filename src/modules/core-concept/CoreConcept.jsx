
"An alternative for receiving props is object destructuring."
const CoreConcept = ({title, image, description}) => {
  return (
    <div>
      <img src={image} alt="Stylized atom" />
      <h1>{title}</h1>
      <p> {description}</p>
    </div>
  )
}
export default CoreConcept;