import RenderMultipleElements from "./RenderMultipleElements";
import UpdateStateSeparately from "./UpdateStateSeparately";
import UpdateStateBetweenComponents from "./UpdateStateBetweenComponents";

export default function App() {
  return (
    <div>
      <RenderMultipleElements />
      <br />
      <UpdateStateSeparately />
      <br />
      <UpdateStateBetweenComponents />
    </div>
  );
}
