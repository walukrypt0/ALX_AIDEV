"use server";

export async function submitFeedback(prevState, formData) {
  const feedback = formData.get('feedback');

  // Simulate an asynchronous operation (e.g., API call)
  await new Promise(resolve => setTimeout(resolve, 2000));

  if (feedback.toLowerCase().includes('error')) {
    return "Feedback submission failed: Please avoid the word 'error'.";
  } else {
    return `Thank you for your feedback: "${feedback}"`;
  }
}