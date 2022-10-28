import './Line.css';

function Line(props) {
  return (
    <div className="Technologies_graphics_lines_item" 
      style={{
        width : props.width + "%",
        backgroundColor : props.color,
        boxShadow : "0px -2px 23px" + props.shadow + "cc"
      }}></div>
  );
}

export default Line;
