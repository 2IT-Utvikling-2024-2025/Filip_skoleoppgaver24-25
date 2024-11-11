import './Students.css';

export default function Students(props) {
  function handleClick() {
    document.getElementsByClassName('age')[0].style.display = 'block';
  }

  return (
    <div className="student-container">
      <div className="student">
        <div className="name">{props.name}</div>
        <div className="age">{props.age}</div>
      </div>
    </div>
  );
}
