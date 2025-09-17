
import { useActionState } from 'react';
import { submitFeedback } from './actions';

function FeedbackForm() {
  const [message, formAction, isPending] = useActionState(submitFeedback, null);

  return (
    <form action={formAction}>
      <h2>Feedback Form</h2>
      <label htmlFor="feedback">Your Feedback:</label>
      <textarea id="feedback" name="feedback" rows="4" cols="50" disabled={isPending}></textarea>
      <button type="submit" disabled={isPending}>
        {isPending ? 'Submitting...' : 'Submit'}
      </button>
      {message && <p>{message}</p>}
    </form>
  );
}

export default FeedbackForm;
