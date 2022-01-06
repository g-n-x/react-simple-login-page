import '../styles/label.css'

export default function Label (props) {
  return <label { ...props }>{ props.children }</label>
}
