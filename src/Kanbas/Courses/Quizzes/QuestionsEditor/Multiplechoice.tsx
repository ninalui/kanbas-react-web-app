import { PiTrashLight } from "react-icons/pi";
import { FaArrowAltCircleRight } from "react-icons/fa";
import "./styles.css";

export default function Multiplechoice(
  { question, setQuestion }:
    { question: any; setQuestion: any; }
) {
  const answers = question.options;

  const addAnswer = () => {
    const newAnswer = { value: "Option", correct: false };
    console.log("newAnswer", newAnswer);
    setQuestion({ ...question, options: [...answers, newAnswer] });
  };

  const handleChange = (e: any, id: any) => {
    const newAnswers = answers.map((a: any) => (a._id === id ? { ...a, value: e.target.value } : a));
    setQuestion({ ...question, options: newAnswers });
  };

  const handleChangeCorrect = (id: any) => {
    const newAnswers = answers.map((a: any) => ({ ...a, correct: a._id === id }));
    setQuestion({ ...question, options: newAnswers });
  };

  const removeAnswer = (id: any) => {
    const newAnswers = answers.filter((a: any) => a._id !== id);
    setQuestion({ ...question, options: newAnswers });
  };

  return (
    <div id="mc-editor">
      {answers.map((answer: any) => (
        <div className="d-flex flex-row pb-3" key={answer._id}>
          {/* icon to choose correct answer*/}
          <div className="me-3">
            <label>
              <input
                type="radio"
                className="col-form-check-input radio-hide"
                name="correctAnswer"
                value={answer._id}
                checked={answer.correct}
                onChange={() => handleChangeCorrect(answer._id)}
              />
              <FaArrowAltCircleRight className={`fs-4 ${answer.correct ? "text-success" : ""}`} />
            </label>
          </div>

          {/* label - changes betwen possible answer and correct answer based on radio button */}
          <div className="me-3">
            <label
              htmlFor={`mc-answer-${answer._id}`}
              className={`col-sm-10 col-form-label text-end label-nowrap ${answer.correct ? "text-success" : ""}`}
            >
              {answer.correct ? "Correct Answer" : "Possible Answer"}
            </label>
          </div>

          {/* possible answers */}
          <div className="col">
            <textarea
              id={`mc-answer-${answer._id}`}
              className="form-control"
              value={answer.value}
              onChange={(e) => handleChange(e, answer._id)}
              rows={1} />
          </div>

          {/* remove answer */}
          <div>
            <button className="btn btn-link text-black" onClick={() => removeAnswer(answer._id)}>
              <PiTrashLight className="fs-4" />
            </button>
          </div>
        </div>
      ))}

      {/* add another answer */}
      <div className="text-end">
        <button className="btn btn-link text-danger text-decoration-none" onClick={() => addAnswer()}>
          + Add Another Answer
        </button>
      </div>
    </div>
  );
}
