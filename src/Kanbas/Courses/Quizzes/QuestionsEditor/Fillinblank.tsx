import { PiTrashLight } from "react-icons/pi";
import "./styles.css";

export default function Fillinblank(
  { question, setQuestion }:
    { question: any; setQuestion: any; }
) {
  const answers = question.options;

  const addAnswer = () => {
    const newAnswer = { value: "Option", correct: true };
    console.log("newAnswer", newAnswer);
    setQuestion({ ...question, options: [...answers, newAnswer] });
  };

  const handleChange = (e: any, id: any) => {
    const newAnswers = answers.map((a: any) => (a._id === id ? { ...a, value: e.target.value } : a));
    setQuestion({ ...question, options: newAnswers });
  };

  const removeAnswer = (id: any) => {
    const newAnswers = answers.filter((a: any) => a._id !== id);
    setQuestion({ ...question, options: newAnswers });
  };

  return (
    <div id="fill-in-editor">
      {answers.map((answer: any) => (
        <div className="form-group d-flex pb-3" key={answer._id}>
          {/* possible answers */}
          <div className="me-3">
            <label
              htmlFor={`fib-answer-${answer._id}`}
              className="col-sm-10 col-form-label text-end label-nowrap"
            >
              Possible Answer
            </label>
          </div>
          <div className="flex-fill">
            <input
              id={`fib-answer-${answer._id}`}
              className="form-control"
              type="text"
              defaultValue={answer.value}
              onChange={(e) => handleChange(e, answer._id)}
            />
          </div>

          {/* remove answer */}
          <div>
            <button className="btn btn-link text-black" type="button" onClick={() => removeAnswer(answer._id)}>
              <PiTrashLight className="fs-4" />
            </button>
          </div>
        </div>
      ))}

      {/* add another answer */}
      <div className="text-end">
        <button className="btn btn-link text-danger text-decoration-none" type="button" onClick={() => addAnswer()}>
          + Add Another Answer
        </button>
      </div>
    </div>
  );
}
