function ShowCompletedBtn({ show, onClick }) {
  if (show) {
    return <button onClick={onClick}>Hide Completed</button>;
  } else {
    return <button onClick={onClick}>Show Completed</button>;
  }
}
export default ShowCompletedBtn;
