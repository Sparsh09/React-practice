export default function TextAreaComponent({ text, setText }) {
  return (
    <textarea
      value={text}
      className="textarea"
      onChange={(event) => {
        let newText = event.target.value;
        if (newText.includes("<script>")) {
          alert("Warning: <script> tag is not allowed");
          newText = newText.replace("<script>", "");
        }
        console.log(newText);
        setText(newText);
      }}
      placeholder="Enter your text..."
      spellCheck="false"
    ></textarea>
  );
}
