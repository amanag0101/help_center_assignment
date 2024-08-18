export const response = (
    success = true,
    message = success
      ? "Request processed successfully."
      : "An error occurred while processing your request.",
    result = {}
  ) => {
    return {
      success: success,
      message: message,
      result: result,
    };
  };