import React, { useState } from "react";
import { questionPropsType } from "./../Types/types";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from '@material-ui/core/FormControl';

const QuestionCard: React.FC<questionPropsType> = ({
  question,
  options,
  callback,
  totalQuestions,
  currentQuestion,
}) => {
  // Answer state
  let [selectedAns, setSelectedAns] = useState("");

  
  // Radio
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedAns(event.target.value);
  };
  
  return (
    <div className="question-container">
      <div className="progress-bar">
        Question: {++currentQuestion} / {totalQuestions}
      </div>
      <div className="question">
        <h3>{question}</h3>
      </div>

      <form
        className="question-form"
        action=""
        onSubmit={(e: React.FormEvent<EventTarget>) => callback(e, selectedAns)}
      >
        <FormControl component="fieldset">
          <RadioGroup
            aria-label="option"
            name="option"
            value={selectedAns}
            onChange={handleChange}
          >
            {options.map((option, index) => {
              return (
                <div key={index}>
                  
                  <FormControlLabel
                    value={option}
                    
                    control={<Radio style={{color:'green'}} required={true} />}
                    label={option}
                  />

                  {/* <input  onChange={handleSelect} /> */}
                </div>
              );
            })}
          </RadioGroup>
        </FormControl>
        <input
          className="submit-btn"
          type="submit"
          value="NEXT"
        />
      </form>
    </div>
  );
};

export default QuestionCard;