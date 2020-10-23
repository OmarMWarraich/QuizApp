import React from "react";
import "../App.css";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import { selectPropsType } from "./../Types/types";
import FormControl from '@material-ui/core/FormControl';
import Select from "@material-ui/core/Select";
const SelectCard: React.FC<selectPropsType> = ({
  questions,
  category,
  setCategory,
  setQuestions,
  level,
  setLevel,
  callback,
}) => {
 
  return (
    <div className="input-card-container">
      <div className='configuration-heading'>Select Options As Per Your Choice</div>
      <div className="select">
        <form
          className="question-form"
          action=""
          onSubmit={(e: React.FormEvent<EventTarget>) =>
            callback(e, questions, level)
          }
        >
          <div className="questions-dropdown">
            <FormControl variant="outlined"  fullWidth>
              <InputLabel  id="demo-simple-select-outlined-label">
                Category
              </InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={category}
                defaultValue={category}
                style={{
                 color: 'green',
                 backgroundColor: "transparent"
                }}
                onChange={(event) => setCategory(Number(event.target.value))}
                required
                label="Category"
                
              >
                <MenuItem style={{
                 color: 'cadetblue'}}value={9}>General Knowledge</MenuItem>
                <MenuItem style={{
                 color: 'cadetblue'}} value={11}>Movies</MenuItem>
                <MenuItem style={{
                 color: 'cadetblue'}}value={17}>Science</MenuItem>
                <MenuItem style={{
                 color: 'cadetblue'}}value={18}>Computers</MenuItem>
                <MenuItem style={{
                 color: 'cadetblue'}}value={19}>Mathematics</MenuItem>
                <MenuItem style={{
                 color: 'cadetblue'}}value={21}>Sports</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className="questions-dropdown">
            <FormControl variant="outlined" fullWidth>
              <InputLabel id="demo-simple-select-outlined-label">
                Questions
              </InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={questions}
                style={{
                  color: 'green',
                  backgroundColor: "transparent"
                 }}
                onChange={(event) => setQuestions(Number(event.target.value))}
                required
                label="Questions"
              >
                <MenuItem style={{
                 color: 'cadetblue'}}value={5}>Five</MenuItem>
                <MenuItem style={{
                 color: 'cadetblue'}}value={10}>Ten</MenuItem>
                <MenuItem style={{
                 color: 'cadetblue'}}value={15}>Fifteen</MenuItem>
              </Select>
            </FormControl>
          </div>

          <div className="questions-dropdown">
            <FormControl variant="outlined" fullWidth>
              <InputLabel id="demo-simple-select-outlined-label">
                Difficulty
              </InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={level}
                style={{
                  color: 'green',
                  backgroundColor: "transparent"
                 }}
                onChange={(event) => setLevel(event.target.value as string)}
                required
                label="Questions"
              >
                <MenuItem style={{
                 color: 'cadetblue'}}value="easy">Easy</MenuItem>
                <MenuItem style={{
                 color: 'cadetblue'}}value="medium">Medium</MenuItem>
                <MenuItem style={{
                 color: 'cadetblue'}}value="hard">Hard</MenuItem>
              </Select>
            </FormControl>
          </div>
          <input className="submit-btn" value="Let's Start Quiz" type="submit" />
        </form>
      </div>
    </div>
  );
};

export default SelectCard;