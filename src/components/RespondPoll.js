import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { formatPoll } from '../utils/helper';
import { handleSaveAnswer } from '../actions/polls';

const RespondPoll = (props) => {
	const [value, setValue] = React.useState("");
	const { dispatch, authedUser, poll } = props;

	const handleChange = e => {
		setValue(e.target.value);
	}
	const handleSubmit = e => {
		e.preventDefault();
		if (value !== "")
			dispatch(handleSaveAnswer(authedUser, id, value));
	}

	const { optionOne, optionTwo, id, avatarURL, name } = poll;
	
	return (
		<div className="card poll-item">
			<div className="title">
				<h4>{name} asks: </h4>
			</div>
			<div className="poll-container">
				<div className="img">
					<img
						src={avatarURL}
						alt="no-avatar"
						className="user-img poll-img-width" />
				</div>
				<form className="response-poll" onSubmit={handleSubmit}>
					<h4>Would You Rather...</h4>
					<p><input type="radio" value="optionOne" name="poll" onChange={handleChange}/>{optionOne.text}</p>
					<p><input type="radio" value="optionTwo" name="poll" onChange={handleChange} />{optionTwo.text}</p>
					<button
						type="submit"
						disabled={value === ""}
						className="login-btn">
							Submit
					</button>
				</form>
			</div>
		</div>
	);
};

RespondPoll.prototype = {
	users: PropTypes.object.isRequired,
	questionList: PropTypes.object.isRequired,
	authedUser: PropTypes.string.isRequired,
};

const mapStateToProps = ({ users, questionList, authedUser }, {id}) => {
	const poll = questionList[id];
	const user = users[poll.author];

	return {
		poll: poll ? formatPoll(poll, user, authedUser): null,
		authedUser,
	}
}

export default connect(mapStateToProps)(RespondPoll);